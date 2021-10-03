import React from "react"
import styled from "styled-components"
import { Helmet } from "react-helmet"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/providers/Layout"
import ContactForm from "../components/organisms/ContactForm/ContactForm"

const ContactPageWrapper = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100%;
  margin-top: 8rem;
`

const AboutUsSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: flex-start;
  width: 100%;
  min-height: 50vh;
  max-width: 1600px;
  padding: 4rem 2rem;
  background-color: ${({ theme }) => theme.colors.lightGrey};

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    height: 50vh;
  }
`
const AboutUsTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media only screen and (min-width: 768px) {
    justify-content: flex-start;
    align-items: flex-end;
    width: 60%;
    margin-right: 3rem;
    text-align: right;
  }
`

const AboutUsHeader = styled.h1`
  margin-bottom: 2rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.darkerBase};
  font-size: 4rem;

  @media only screen and (min-width: 768px) {
    align-self: end;
  }
`

const AboutUsText = styled.p`
  width: 100%;
  color: ${({ theme }) => theme.colors.fontColor};
  text-align: center;
  margin-bottom: 4rem;
  font-size: 2rem;
  @media only screen and (min-width: 768px) {
    width: 100%;
    text-align: right;
  }
`

const ContactFormSection = styled.section`
  min-height: 60vh;
  width: 100%;
  padding: 4rem 0;
`

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
        <AboutUsSection>
          <AboutUsTextWrapper>
            <AboutUsHeader>who we are?</AboutUsHeader>
            <AboutUsText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem a a
              suspendisse egestas pharetra, nibh nisi sagittis. Magnis accumsan
              in neque, non a aliquet. Odio dignissim consectetur mattis
              dignissim augue velit a vitae. Suspendisse elementum ullamcorper
              lobortis mauris, purus sed morbi mattis aenean. Neque interdum
              pellentesque molestie amet ac.
            </AboutUsText>
          </AboutUsTextWrapper>
          <StaticImage
            src="../../static/contact.jpg"
            alt="Phone that is making photo of food"
          />
        </AboutUsSection>
        <ContactFormSection>
          <ContactForm />
        </ContactFormSection>
      </ContactPageWrapper>
    </Layout>
  )
}

export default Contact
