import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../images/gatsby-astronaut.png'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" lang="en" description="home page" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <img src={Image} alt="image" />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
