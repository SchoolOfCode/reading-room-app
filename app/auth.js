// auth.js

"use server";

import { headers, cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

const authenticateUser = async (data, isSignUp) => {
  const email = data.email;
  const password = data.password;
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  if (isSignUp) {
    const origin = headers().get("origin");

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${origin}/auth/callback`,
      },
    });

    if (error) {
      console.log("top error");
      return redirect("/login?message=Could not authenticate user");
    }
  } else {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      console.log("bottom error");
      return redirect("/login?message=Could not authenticate user");
    }
  }

  return redirect("/WelcomePage");
};

export const signIn = async (data) => {
  return authenticateUser(data, false);
};

export const signUp = async (data) => {
  return authenticateUser(data, true);
};
