import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

const Layout = ({ pageTitle, children }) => {

    const data = useStaticQuery(graphql`
        query TitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <div className="grid place-content-center mx-10">
            <header>
                <h1 className="max-w-screen-xl text-5xl font-bold mt-5">
                    Sam Chapman .Dev | {data.site.siteMetadata.title}
                </h1>
                <nav className="flex items-center justify-between flex-wrap bg-slate-800 rounded px-5 py-5 mt-4 mb-4">
                    <ul className="flex">
                        <li className="mr-6">
                            <Link className="rounded py-2 px-4 bg-slate-600 hover:bg-slate-700 text-white" to="/">
                                Home
                            </Link>
                        </li>

                        <li className="mr-6">
                            <Link className="rounded py-2 px-4 bg-slate-600 hover:bg-slate-700 text-white" to="/blog">
                                Blog
                            </Link>
                        </li>

                        <li className="mr-6">
                            <Link className="rounded py-2 px-4 bg-slate-600 hover:bg-slate-700 text-white" to="/about">
                                About
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>

            <main className="col-span-full">
                <h1 className="text-4xl font-bold pb-3">{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}

export default Layout