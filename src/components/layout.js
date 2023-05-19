import * as React from 'react'
import { Link } from 'gatsby'

const Layout = ({ pageTitle, children }) => {
    return (
        <div className="m-10 max-w-screen-2xl mx-auto px-20">
            <h1 className="text-3xl font-bold">
                Sam Chapman .Dev | Personal Development Blog
            </h1>
            <nav className="flex items-center justify-between flex-wrap bg-slate-800 p-4 mt-4 mb-4">
                <ul className="flex">
                    <li className="mr-6">
                        <Link className="inline-block border border-slate-500 rounded py-2 px-4 bg-slate-500 hover:bg-slate-700 text-white" to="/">
                            Home
                        </Link>
                    </li>
                    <li className="mr-6">
                        <Link className="inline-block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white" to="/about">
                            About
                        </Link>
                    </li>
                </ul>
            </nav>
            <main>
                <h1>{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}

export default Layout