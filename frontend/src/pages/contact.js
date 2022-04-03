import React from "react"
import styled from "styled-components"
import { Helmet } from "react-helmet"
import { StaticImage } from "gatsby-plugin-image"
import ContactForm from "../components/organisms/ContactForm/ContactForm"
import axios from "axios"
import Logo from "../components/atoms/Logo/Logo"

const ContactPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  max-width: 1200px;
  gap: 1rem;
  padding: 2rem 2rem 1rem 2rem;
  margin: 0 auto;
  /* width: 100%; */
  margin-top: 7rem;
`

const AboutUsSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: flex-start;
  width: 100%;
  min-height: 50vh;
  border-radius: 6px;
  overflow: hidden;
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
  padding: 2rem;
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
  font-weight: 700;
  color: ${({ theme }) => theme.colors.secondaryColor};
  font-size: 4rem;

  @media only screen and (min-width: 768px) {
    align-self: end;
  }
`

const AboutUsText = styled.p`
  width: 100%;
  color: ${({ theme }) => theme.colors.fontColor};
  text-align: left;
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
`

const Contact = ({ data }) => {
  const windowGlobal = typeof window !== "undefined" && window

  const getImages = async () => {
    const token = JSON.parse(windowGlobal.localStorage.getItem("token"))

    await axios
      .get(`${process.env.STRAPI_URL}/upload/files`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  // console.log(data)
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <html lang="en" />
        <title>Contact s:urp!</title>
        <meta
          name="description"
          content="Best recipes that will be loved by everyone of your family, friends, kids or animals!"
        />
        <link rel="canonical" href="http://localhost:8000/contact" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Raleway:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <ContactPageWrapper>
        <AboutUsSection>
          <AboutUsTextWrapper>
            <AboutUsHeader>Trochę o nas</AboutUsHeader>
            <AboutUsText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem a a
              suspendisse egestas pharetra, nibh nisi sagittis. Magnis accumsan
              in neque, non a aliquet. Odio dignissim consectetur mattis
              dignissim augue velit a vitae. Suspendisse elementum ullamcorper
              lobortis mauris, purus sed morbi mattis aenean. Neque interdum
              pellentesque molestie amet ac.
            </AboutUsText>
            <div style={{ height: "300px" }}>
              <Logo />
            </div>
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
    </>
  )
}

export default Contact
