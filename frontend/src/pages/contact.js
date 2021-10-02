import React from "react"
import styled from "styled-components"
import { Helmet } from "react-helmet"
import Layout from "../components/providers/Layout"

const ContactPageWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  margin-top: 8rem;
`

const AboutUsSection = styled.section``
const ContactFormSection = styled.section``

const Contact = () => {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <html lang="en" />
        <title>Contact s:urp!</title>
        <meta
          name="description"
          content="Best recipes that will be loved by everyone of your family, friends, kids or animals!"
        />
        <link rel="canonical" href="http://localhost:8000/contact" />
      </Helmet>
      <ContactPageWrapper>
        <AboutUsSection>aboutus</AboutUsSection>
        <ContactFormSection>contact form</ContactFormSection>
      </ContactPageWrapper>
    </Layout>
  )
}

export default Contact
