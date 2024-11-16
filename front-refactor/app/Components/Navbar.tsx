import Link from "next/link";

export default function Navbar() {
    return (
        <div className="w-full z-50 text-white">
            <nav className="flex justify-between items-center m-6 font-dyna text-4xl">
                <div>
                    <Link href="/">
                        <p className="hover:text-lime-400 transition-colors duration-200 ease-linear">Trains</p>
                    </Link>
                </div>
                <div >
                    <Link href="/register">
                        <p className="text-3xl hover:text-lime-400 transition-colors duration-200 ease-linear">SIGN UP</p>
                    </Link>
                </div>
            </nav>
        </div>
    )
}