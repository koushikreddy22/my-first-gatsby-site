import * as React from 'react'
import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <p>checking pipeline</p>
      <p>checking pipeline again</p>
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage