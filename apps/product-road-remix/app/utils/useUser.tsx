import type { AuthChangeEvent, Session, User } from "@supabase/supabase-js";
import type { FC, ReactNode } from "react";
import { createContext, useContext } from "react";
import { useEffect, useState } from "react";

import { supabase } from "./supabase";
import { useFetcher } from "@remix-run/react";

type UserContextType = {
  user: User | null;
  session: Session | null;
};

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

/**
 * This context provides user/session details.
 * It handles auth state changes and sets a cookie for server-side rendering (SSR) when session changes.
 */
export const UserContextProvider: FC<{
  children: ReactNode;
}> = ({ children }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const fetcher = useFetcher();

  const setServerSession = (
    event: AuthChangeEvent,
    session: Session | null
  ) => {
    if (event === "SIGNED_IN" || event === "SIGNED_OUT")
      fetcher.submit(
        { event, session: JSON.stringify(session) },
        { action: "/auth", method: "post" }
      );
  };

  useEffect(() => {
    /* fires when a user signs in or out */
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        setServerSession(event, session);
      }
    );

    return () => {
      authListener?.unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // On initial load, recover session from local storage and store in state
    const session = supabase.auth.session();
    setSession(session);
    setUser(session?.user ?? null);

    // If session exists by now, set a cookie when app is reloaded, in case session was expired while app wasn't open
    // because session recovering/refreshing now happens on supabase constructor, before any onAuthStateChange events are emitted.
    if (session) setServerSession("SIGNED_IN", session);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const value: UserContextType = { user, session };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

/**
 * Gets user/session details stored in UserContext
 */
export const useUser = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error("useUser must be used within a UserContext.Provider");
  }

  return context;
};
