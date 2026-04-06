import Link from "next/link";
import SignInButton from "./SignInButton";
import { auth } from "~/server/auth";
import SignOutButton from "./SignOutButton";
const Navbar = async () => {
  const session = await auth();
  return (
    <nav className="sticky inset-0 flex w-full items-center justify-center gap-16 bg-pink-100 p-4 *:rounded-xl *:border *:border-pink-300 *:p-2">
      <Link href="/">Home</Link>

      {!session?.user ? (
        <SignInButton />
      ) : (
        <>
          <Link href="/journals">Journals</Link>
          <SignOutButton />
        </>
      )}
    </nav>
  );
};

export default Navbar;
