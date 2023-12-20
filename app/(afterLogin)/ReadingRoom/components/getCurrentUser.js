import { createBrowserClient } from "@supabase/ssr";

export async function getCurrentUser() {
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );
  // const user = await supabase.auth.getUser()...

  async function getUserId() {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    console.log(user);
    return user;
  }
  const data = await getUserId();
  return data;
}
