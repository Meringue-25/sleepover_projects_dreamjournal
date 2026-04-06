"use client";

import { signIn } from "next-auth/react";

type Props = {};

const SignInButton = ({}: Props) => {
  return (
    <button
      onClick={() => {
        signIn("discord");
      }}
    >
      Sign In
    </button>
  );
};

export default SignInButton;
