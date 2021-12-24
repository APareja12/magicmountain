import * as React from "react"
import Hero from "../components/Hero"
import Layout from "../components/layout"
import Retreats from "../components/Retreats"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <Retreats />
  </Layout>
)

export default IndexPage
