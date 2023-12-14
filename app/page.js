import Link from 'next/link';
import { createClient } from '@/utils/supabase/server';
import { headers, cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default function Home({ searchParams }) {
  const signIn = async (formData) => {
    'use server';

    const email = formData.get('email');
    const password = formData.get('password');
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return redirect('/?message=Could not authenticate user');
    }

    return redirect('/WelcomePage');
  };

  const signUp = async (formData) => {
    'use server';

    const origin = headers().get('origin');
    const email = formData.get('email');
    const password = formData.get('password');
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${origin}/auth/callback`,
      },
    });

    if (error) {
      return redirect('/?message=Could not authenticate user');
    }

    return redirect('/?message=Check email to continue sign in process');
  };

  return (
    <div>
      <Link href='/'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <polyline points='15 18 9 12 15 6' />
        </svg>{' '}
        Back
      </Link>

      <form action={signIn}>
        <label className='text-md' htmlFor='email'>
          Email
        </label>
        <input name='email' placeholder='you@example.com' required />
        <label className='text-md' htmlFor='password'>
          Password
        </label>
        <input type='password' name='password' placeholder='••••••••' required />
        <button>Sign In</button>
        <button formAction={signUp}>Sign Up</button>
        {searchParams?.message && <p>{searchParams.message}</p>}
      </form>
    </div>
  );
}

// export default function Home() {
//   return (
//     <Heading as="h1" size="xl" className={fonts.architects_daughter.className}>
//       The Reading Room Login Page
//     </Heading>
//   );
// }
