"use client";

import { signOut } from "next-auth/react";

type Props = {};

const SignOutButton = ({}: Props) => {
  return (
    <button
      onClick={() => {
        signOut();
      }}
    >
      Sign Out
    </button>
  );
};

export default SignOutButton;
