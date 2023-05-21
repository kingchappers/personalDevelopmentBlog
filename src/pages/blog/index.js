import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="Blog Posts">
      <ul>
        {
          data.allMdx.nodes.map(node => (
            <article key ={node.id}>
              <h2 className='text-xl font-bold'>
                <Link to={`/blog/${node.frontmatter.slug}`}>
                  {node.frontmatter.title}
                </Link>
              </h2>
              <p>Excerpt: {node.excerpt}</p>
              <p className='text-sm pb-3'>Posted: {node.frontmatter.date}</p>
            </article>
          ))
        }
      </ul>
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