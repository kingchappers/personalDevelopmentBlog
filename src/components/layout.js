import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import "../styles/global.scss"

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
        <div>
            <header className="block">
                <h1 className="title is-1">
                    Sam Chapman .Dev | {data.site.siteMetadata.title}
                </h1>
                <div className="navbar has-background-primary">
                    <div className="navbar-brand">
                        <Link className="navbar-item is-size-3 has-text-white-ter has-text-weight-bold mx-3" to="/">Sam Chapman .Dev</Link>
                    </div>
                    <div className="navbar-start">
                            <Link className="navbar-item is-size-4 has-text-white-ter" to="/">
                                Home
                            </Link>

                            <Link className="navbar-item is-size-4 has-text-white-ter" to="/blog">
                                Blog
                            </Link>

                            <Link className="navbar-item is-size-4 has-text-white-ter" to="/about">
                                About
                            </Link>
                </div>
                </div>
            </header>

            <main>
                <h1 className="title">{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}

export default Layout