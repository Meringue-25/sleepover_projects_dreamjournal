import Link from "next/link";

const Navbar = () => {
    return <nav>
        <Link href='/'>Home</Link>
        <Link href="/journals">Journals</Link>
    </nav>
};

export default Navbar;