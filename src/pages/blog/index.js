import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import "../../styles/global.scss"

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="Blog Posts">
      <h2 className="subtitle has-text-weight-semibold has-text-white-ter">General Tools</h2>
      <div className="columns is-multiline">  
        {
          data.generalTools.nodes.map(node => (
            <div className="column is-one-quarter">
                <div className="card card-content has-text-white-ter">
                <Link to={`/blog/${node.frontmatter.slug}`}>
                  <article key={node.id}>
                    <h2 className="card-header-title has-text-white-ter">
                      {node.frontmatter.title}
                    </h2>
                    <p className="content">{node.excerpt}</p>
                    <p className="is-size-7">Posted: {node.frontmatter.date}</p>
                  </article>
                  </Link>
            </div>
        </div>
          ))
        }
        </div>

        <h2 className="subtitle has-text-weight-semibold has-text-white-ter">Infrastructure Management</h2>
        <div className="columns is-multiline">  
        {
          data.infrastructureManagement.nodes.map(node => (
            <div className="column is-one-quarter">
                <div className="card card-content has-text-white-ter">
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

        <h2 className="subtitle has-text-weight-semibold has-text-white-ter">Linux Configuration</h2>
        <div className="columns is-multiline">  
        {
          data.linuxConfiguration.nodes.map(node => (
            <div className="column is-one-quarter">
                <div className="card card-content has-text-white-ter">
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

        <h2 className="subtitle has-text-weight-semibold has-text-white-ter">Linux Tools</h2>
        <div className="columns is-multiline">  
        {
          data.linuxTools.nodes.map(node => (
            <div className="column is-one-quarter">
                <div className="card card-content has-text-white-ter">
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

        <h2 className="subtitle has-text-weight-semibold has-text-white-ter">Security Tools</h2>
        <div className="columns is-multiline">  
        {
          data.securityTools.nodes.map(node => (
            <div className="column is-one-quarter">
                <div className="card card-content has-text-white-ter">
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

        <h2 className="subtitle has-text-weight-semibold has-text-white-ter">Windows Tools</h2>
        <div className="columns is-multiline">  
        {
          data.windowsTools.nodes.map(node => (
            <div className="column is-one-quarter">
                <div className="card card-content has-text-white-ter">
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
  generalTools: allMdx(
    sort: {frontmatter: {date: DESC}}
    filter: {frontmatter: {category: {eq: "General Tools"}}}
  ) {
    nodes {
      frontmatter {
        date(formatString: "D MMMM, YYYY")
        title
        slug
        category
      }
      excerpt(pruneLength: 150)
    }
  }
  infrastructureManagement: allMdx(
    sort: {frontmatter: {date: DESC}}
    filter: {frontmatter: {category: {eq: "Infrastructure Management"}}}
  ) {
    nodes {
      frontmatter {
        date(formatString: "D MMMM, YYYY")
        title
        slug
        category
      }
      excerpt(pruneLength: 150)
    }
  }
  linuxConfiguration: allMdx(
    sort: {frontmatter: {date: DESC}}
    filter: {frontmatter: {category: {eq: "Linux Configuration"}}}
  ) {
    nodes {
      frontmatter {
        date(formatString: "D MMMM, YYYY")
        title
        slug
        category
      }
      excerpt(pruneLength: 150)
    }
  }
	linuxTools: allMdx(
    sort: {frontmatter: {date: DESC}}
    filter: {frontmatter: {category: {eq: "Linux Tools"}}}
  ) {
    nodes {
      frontmatter {
        date(formatString: "D MMMM, YYYY")
        title
        slug
        category
      }
      excerpt(pruneLength: 150)
    }
  }
  securityTools: allMdx(
    sort: {frontmatter: {date: DESC}}
    filter: {frontmatter: {category: {eq: "Security Tools"}}}
  ) {
    nodes {
      frontmatter {
        date(formatString: "D MMMM, YYYY")
        title
        slug
        category
      }
      excerpt(pruneLength: 150)
    }
  }
  windowsTools: allMdx(
    sort: {frontmatter: {date: DESC}}
    filter: {frontmatter: {category: {eq: "Windows Tools"}}}
  ) {
    nodes {
      frontmatter {
        date(formatString: "D MMMM, YYYY")
        title
        slug
        category
      }
      excerpt(pruneLength: 150)
    }
  }
}
`



export const Head = () => <Seo title="Blog Posts" />

export default BlogPage