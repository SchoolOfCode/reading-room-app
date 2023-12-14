import { createServerClient } from "@supabase/ssr";
export const createClient = (cookieStore) => {
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        get(name) {
          var _a;
          return (_a = cookieStore.get(name)) === null || _a === void 0
            ? void 0
            : _a.value;
        },
        set(name, value, options) {
          try {
            cookieStore.set(Object.assign({ name, value }, options));
          } catch (error) {
            // The `set` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
        remove(name, options) {
          try {
            cookieStore.set(Object.assign({ name, value: "" }, options));
          } catch (error) {
            // The `delete` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
      },
    }
  );
};
