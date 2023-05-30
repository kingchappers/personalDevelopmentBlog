import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import "../../styles/global.scss"

const BlogPost = ({ data, children }) => {
  return (

    <div className="content">
      <Layout pageTitle={data.mdx.frontmatter.title}>
        <p>{data.mdx.frontmatter.data}</p>
        <article>
          {children}
        </article>
      </Layout>
    </div>
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