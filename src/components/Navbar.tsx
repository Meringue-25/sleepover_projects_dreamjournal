import Link from "next/link";

const Navbar = () => {
    return <nav className="sticky inset-0 flex w-full items-center gap-16 justify-center bg-pink-100 p-4 *:border *:border-pink-300 *:rounded-xl *:p-2">
        <Link href='/'>Home</Link>
        <Link href="/journals">Journals</Link>
    </nav>
};

export default Navbar;