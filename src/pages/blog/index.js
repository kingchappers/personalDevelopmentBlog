import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import "../../styles/global.scss"

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="Blog Posts">
      <div className="columns is-multiline">  
        {
          data.allMdx.nodes.map(node => (
            <div className="column is-one-quarter">
                <div className="card card-content has-background-primary has-text-white-ter">
                <Link to={`/blog/${node.frontmatter.slug}`}>
                  <article key={node.id}>
                    <h2 className="card-header-title has-text-white-ter">
                      {node.frontmatter.title}
                    </h2>
                    <p className="content">Excerpt: {node.excerpt}</p>
                    <p className="is-size-7">Posted: {node.frontmatter.date}</p>
                  </article>
                  </Link>
            </div>
        </div>
          ))
        }
        </div>
    </Layout>
  )
}

export const query = graphql `
  query GetBlogPosts {
    allMdx(sort: {frontmatter: {date: DESC}}) {
      nodes {
        frontmatter {
          date(formatString: "D MMMM, YYYY")
          title
          slug
        }
        excerpt(pruneLength: 100)
      }
    }
  }
`

export const Head = () => <Seo title="Blog Posts" />

export default BlogPage