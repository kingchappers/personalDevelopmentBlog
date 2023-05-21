import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

const BlogPost = ({ data, children }) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.data}</p>
      <article className="prose max-w-none">
        {children}
      </article>
    </Layout>
  )
}

export const query = graphql`
  query GetBlogPostContent ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "D MMMM, YYYY")
      }
    }
  }
`
  
export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />
  
export default BlogPost