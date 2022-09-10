import { createCookieSessionStorage, redirect } from "@remix-run/node";

import { getProfileById } from "~/models/user.server";

if (!process.env.SESSION_SECRET) {
  throw Error("SESSION_SECRET must be set in your environment variables.");
}

const USER_SESSION_KEY = "userId";

export const { getSession, commitSession, destroySession } =
  createCookieSessionStorage({
    cookie: {
      name: "__session",
      httpOnly: true,
      maxAge: 60,
      path: "/",
      sameSite: "lax",
      secrets: [process.env.SESSION_SECRET],
      secure: process.env.NODE_ENV === "production",
    },
  });

export async function createUserSession({
  request,
  userId,
  redirectTo,
}: {
  request: Request;
  userId: string | undefined;
  redirectTo: string;
}) {
  const session = await getUserSession(request);

  //Set the userId property in the cookie
  session.set(USER_SESSION_KEY, userId);

  // Redirect to the url & sets the cookie in the client
  return redirect(redirectTo, {
    headers: {
      "Set-Cookie": await commitSession(session, {
        maxAge: 60 * 60 * 24 * 7, // 7 days
      }),
    },
  });
}

/**
 * Gets a session cookie from the request
 */
export async function getUserSession(request: Request) {
  const cookie = request.headers.get("Cookie");
  return getSession(cookie);
}

export async function getUserId(request: Request) {
  const session = await getUserSession(request);
  const userId = session.get(USER_SESSION_KEY);

  return userId;
}

export async function getUser(request: Request) {
  const userId = await getUserId(request);
  if (userId === undefined) return null;

  const user = await getProfileById(userId as string);
  if (user) return user;

  throw await logout(request);
}

/**
 * Require a user session to get to a page. If none is found
 * redirect them to the login page. After login, take them to
 * the original page they wanted to get to.
 */
export async function requireUserId(
  request: Request,
  redirectTo: string = new URL(request.url).pathname
) {
  const userId = await getUserId(request);
  if (!userId) {
    const searchParams = new URLSearchParams([["redirectTo", redirectTo]]);
    throw redirect(`/login?${searchParams}`);
  }

  return userId;
}

export async function requireUser(request: Request) {
  const userId = await requireUserId(request);
  if (userId == undefined) return null;

  const profile = await getProfileById(userId);
  if (profile) return profile;

  throw await logout(request);
}

/** Destroy the session cookie  */
export async function logout(request: Request) {
  const session = await getUserSession(request);
  return redirect("/", {
    headers: {
      "Set-Cookie": await destroySession(session),
    },
  });
}
