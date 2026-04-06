import Link from "next/link";
import SignInButton from "./SignInButton";
import { getServerAuthSession } from "~/server/auth";
const Navbar = () => {
  const user = getServerAuthSession();
  return (
    <nav className="sticky inset-0 flex w-full items-center justify-center gap-16 bg-pink-100 p-4 *:rounded-xl *:border *:border-pink-300 *:p-2">
      <Link href="/">Home</Link>
      <SignInButton />
      <Link href="/journals">Journals</Link>
    </nav>
  );
};

export default Navbar;
