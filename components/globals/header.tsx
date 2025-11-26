import Link from "next/link"

export const Header = () => {
    return (
        <header className="flex items-center justify-between h-32 px-7 py-7 bg-gray-300 text-black">
            <Link href={"/"} className="text-3xl">YesWeCook</Link>
            <nav>
                <ul className="flex gap-6 items-center">
                    <li className="text-green-600 hover:text-green-700 transition"><Link href={"/"}>Home</Link></li>
                    <li className="text-green-600 hover:text-green-700 transition"><Link href={"/entrees"}>Entrées</Link></li>
                    <li className="text-green-600 hover:text-green-700 transition"><Link href={"/plats"}>Plats</Link></li>
                    <li className="text-green-600 hover:text-green-700 transition"><Link href={"/desserts"}>Dessers</Link></li>
                    <li className="text-green-600 hover:text-green-700 transition"><Link href={"/aperos"}>Apéros</Link></li>
                    <li className="text-green-600 hover:text-green-700 transition"><Link href={"blog"}>Blog</Link></li>
                </ul>
            </nav>
        </header>
    )
}