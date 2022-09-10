import type { AuthChangeEvent, Session } from "@supabase/supabase-js";
import { createUserSession, logout } from "~/utils/session.server";

import type { ActionFunction } from "@remix-run/node";

/** Takes in an AuthChangeEvent and a supabase user session,
 * If auth change event is `SIGNED_IN`, store the id of user sesson in a cookie,
 * if it is `SIGNED_OUT`, destroy the session cookie.
 */
export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const authEvent = formData.get("event") as AuthChangeEvent;
  const formSession = formData.get("session");

  if (typeof formSession === "string") {
    const session = JSON.parse(formSession) as Session;
    if (authEvent === "SIGNED_IN") {
      return createUserSession({
        userId: session.user?.id,
        request,
        redirectTo: "",
      });
    }
    if (authEvent === "SIGNED_OUT") {
      return logout(request);
    }
  }
};
