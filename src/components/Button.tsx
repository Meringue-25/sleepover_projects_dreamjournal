import type React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button = (props: Props) => {
  return (
    <button
      {...props}
      className="bg-accent-300 hover:bg-accent-400 cursor-pointer rounded-xl p-4 py-1 transition-colors disabled:cursor-not-allowed disabled:opacity-30"
    >
      {props.children}
    </button>
  );
};
