import Link from "next/link";
import SignInButton from "./SignInButton";
import { auth } from "~/server/auth";
import SignOutButton from "./SignOutButton";
const Navbar = async () => {
  const session = await auth();
  return (
    <nav className="bg-secondary-100 *:border-secondary-300 sticky inset-0 flex w-full items-center justify-center gap-16 p-4 text-xl *:rounded-xl *:border *:p-2 *:transition-all *:hover:scale-110">
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
