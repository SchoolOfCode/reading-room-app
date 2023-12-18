// auth.js

"use server";

import { headers, cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

const authenticateUser = async (formData, isSignUp) => {
  const email = formData.get("email");
  const password = formData.get("password");
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
      return redirect("/login?message=Could not authenticate user");
    }
  } else {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return redirect("/login?message=Could not authenticate user");
    }
  }

  return redirect("/WelcomePage");
};

export const signIn = async (formData) => {
  return authenticateUser(formData, false);
};

export const signUp = async (formData) => {
  return authenticateUser(formData, true);
};
