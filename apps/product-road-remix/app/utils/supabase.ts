import { createClient } from "@supabase/supabase-js";

const isServer = typeof window === "undefined";

declare global {
  interface Window {
    ENV: { [key: string]: string };
  }
}

function createSupabase() {
  if (isServer) {
    return createClient(
      process.env.SUPABASE_URL || "",
      process.env.SUPABASE_ANON_KEY || ""
    );
  }

  return createClient(window.ENV.SUPABASE_URL, window.ENV.SUPABASE_ANON_KEY);
}

export const supabase = createSupabase();
