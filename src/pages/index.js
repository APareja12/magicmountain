import * as React from "react"
import Hero from "../components/Hero"
import Layout from "../components/layout"
import Retreats from "../components/Retreats"
import Seo from "../components/seo"
import Stats from "../components/Stats"
import Testimonials from "../components/Testimonials"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <Retreats heading="Our Favorite Retreats"/>
    <Testimonials />
    <Stats />
  </Layout>
)

export default IndexPage
