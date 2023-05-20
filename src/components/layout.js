import * as React from 'react'
import { Link } from 'gatsby'

const Layout = ({ pageTitle, children }) => {
    return (
        <div className="max-w-screen-7xl mx-20">
            <h1 className="text-4xl font-bold mt-5">
                Sam Chapman .Dev | Personal Development Blog
            </h1>
            <nav className="flex items-center justify-between flex-wrap bg-slate-800 rounded px-5 py-5 mt-4 mb-4">
                <ul className="flex">
                    <li className="mr-6">
                        <Link className="rounded py-2 px-4 bg-slate-600 hover:bg-slate-700 text-white" to="/">
                            Home
                        </Link>
                    </li>
                    <li className="mr-6">
                        <Link className="rounded py-2 px-4 bg-slate-600 hover:bg-slate-700 text-white" to="/about">
                            About
                        </Link>
                    </li>
                </ul>
            </nav>
            <main>
                <h1 className="text-2xl font-bold pb-3">{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}

export default Layout