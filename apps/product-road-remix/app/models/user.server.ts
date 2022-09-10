import type { Provider } from "@supabase/supabase-js";
import { supabase } from "~/utils/supabase";

export const loginViaOTP = async (email: string) => {
  const { user, error } = await supabase.auth.signIn({ email });

  if (error) return { user: null, error };
  return { user, error };
};

export const loginViaOAuthProvider = async (provider: Provider) => {
  const { user, error } = await supabase.auth.signIn({ provider });

  if (error) return { user: null, error };
  return { user, error };
};

export const getProfileById = async (id: string) => {
  const { data, error } = await supabase
    .from("profiles")
    .select("id, email, username")
    .eq("id", id)
    .single();

  if (error) return null;
  if (data) return { id: data.id, email: data.email, username: data.username };
};
