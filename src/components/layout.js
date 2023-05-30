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
        <div className="has-background-dark">
            <div className="container has-background-primary has-text-white-ter"> 
                <header className="title is-1 has-background-dark">
                    <h1 className="title is-1 has-text-white-ter">
                        Sam Chapman .Dev | {data.site.siteMetadata.title}
                    </h1>
                    <div className="navbar has-background-dark">
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
                    <h1 className="title mt-3 has-text-white-ter">{pageTitle}</h1>
                    <div className="has-text-white-ter">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Layout