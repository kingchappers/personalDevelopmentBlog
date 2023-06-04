import * as React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

import Layout from '../components/layout'
import Seo from '../components/seo'
import "../styles/global.scss"

const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <p className="block">I'm a security engineer who's been in the industry for a few years now. I'm a bit of a tinkerer and try to experiment with different technologies as much as I can. The posts on this site are things that I have collated where I've learned something new or worked through an issue and wanted to record how I resolved it. They serve mostly as a guide to myself when I'm trying to remember what I've done and used previously but if the can help someone else then that's great.</p>

      <p className="block">Most of the projects on my GitHub, linked below, are things I thought would be useful, or fun, to try doing and I've put them up there in case anyone else finds them useful.</p>

      <p className="block">If you'd like to contact me about anything my details are below. I'm happy to answer questions about anything on this site, whether it's something broken on the site, or some questions about the content. I'm happy to take suggestions if there are any best practices I've not considered, or if there is a better method to do something. I currently work in security so I understand a number of the tools I post about, but I'm not an expert in all of them</p>

      <a className="mx-5" href="https://github.com/kingchappers" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} size='2x' color='white'/>&nbsp; My Github page. <span className="sr-only"></span></a>

      <a className="mx-5" href="https://www.linkedin.com/in/sam-chapman-26558993" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} size='2x' color='white'/> &nbsp; My Linkedin page. <span className="sr-only"></span></a>

    </Layout>
  )
}

export const Head = () => <Seo title="Home Page" />

export default IndexPage