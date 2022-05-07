// Next.js Imports
import Link from 'next/link'


function NavLink({to, children}) {
    return <a href={to} className={`mx-4`}>
        {children}
    </a>
}


export default function Navbar() {
    return (
        <nav className="flex filter drop-shadow-md bg-white px-4 py-4 h-20 items-center">
            <div className="w-3/12 flex items-center">
                <Link href="/">
                    <a className="text-2xl font-semibold">INFRA-PUSH</a>
                </Link>
            </div>
            <div className="w-9/12 flex justify-end items-center">
                <div className="md:flex">
                    <NavLink to="/settings">
                        Settings
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}