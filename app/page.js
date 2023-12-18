// page.js

"use client";

import { signIn, signUp } from "./auth";
import {
  Container,
  Heading,
  Box,
  VStack,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,
  Divider,
  Image,
  Center,
} from "@chakra-ui/react";
import { fonts } from "./fonts";
import { Link } from "@chakra-ui/next-js";

export default function Login({ searchParams }) {
  const handleFormSubmit = async (e, authFunction) => {
    e.preventDefault();

    // Ensure that e.target is an HTMLFormElement
    const formData = new FormData(
      e.target instanceof HTMLFormElement ? e.target : e.target.form
    );

    try {
      await authFunction(formData);
    } catch (error) {
      console.error("Authentication error:", error);
      // Handle authentication error as needed
    }
  };

  return (
    <div>
      <form action={signIn}>
        <label htmlFor="email">Email</label>
        <input name="email" placeholder="you@example.com" required />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="••••••••"
          required
        />
        <button>Sign In</button>
        <button formAction={signUp}>Sign Up</button>
        {searchParams?.message && <p>{searchParams.message}</p>}
      </form>
      <br></br>
      <p>
        Once you've signed up, check your email for a confirmation email - then
        come back here and sign in!
      </p>
    </div>
  );
}
