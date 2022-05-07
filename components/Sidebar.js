// Next.js Imports
import Link from 'next/link'


export default function Sidebar(props) {
    return(
        <div className="w-30 h-max-h-screen shadow-md bg-white px-1 absolute">
            <ul className="relative">
                <li className="relative">
                <Link href="/">
                    <a className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">
                        <span>Home</span>
                    </a>
                </Link>
                </li>
                <li className="relative">
                <Link href="/dashboard">
                    <a className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">
                        <span>Dashboard</span>
                    </a>
                </Link>
                </li>
                <li className="relative">
                <Link href="/campaigns">
                    <a className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">
                        <span>Campaigns</span>
                    </a>
                </Link>
                </li>
                <li className="relative">
                <Link href="/products">
                    <a className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">
                        <span>Products</span>
                    </a>
                </Link>
                </li>
                <li className="relative">
                <Link href="/metrics">
                    <a className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">
                        <span>Metrics</span>
                    </a>
                </Link>
                </li>
            </ul>
        </div>
    )
}