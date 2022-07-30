import React from "react"
import styled from "styled-components"
import {
  FacebookShareButton,
  FacebookIcon,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
  TwitterShareButton,
  TwitterIcon,
  EmailShareButton,
  EmailIcon,
} from "react-share"

export const Wrapper = styled.div`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  flex-direction: column;
  position: absolute;
  left: 0;
  top: 5rem;
  height: 150px;
  width: 250px;
  border-radius: ${({ theme }) => theme.otherStyles.smallRadius};
  padding: 1.6rem;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 3px 2px 10px -3px ${({ theme }) => theme.otherStyles.shadow};
  z-index: 9999;
`
export const ButtonsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  padding: 2rem 0;
`
export const HeadingText = styled.p`
  color: ${({ theme }) => theme.colors.fontColor};
  color: red;
  font-size: ${({ theme }) => theme.fontSize.normal};
  padding-bottom: 1rem;
`
export const LinkInput = styled.input`
  width: 100%;
  height: 2rem;
`

const SharePanel = ({ ...props }) => {
  const windowGlobal = typeof window !== "undefined" && window
  const shareUrl = windowGlobal.location

  return (
    <Wrapper onClick={props.onClick} isOpen={props.isOpen}>
      <HeadingText>Udostępnij:</HeadingText>
      <ButtonsContainer>
        <FacebookShareButton
          aria-label="Udostępnij na Facebook"
          content="To jest button"
          url={shareUrl}
        >
          <FacebookIcon size={40} />
        </FacebookShareButton>
        <FacebookMessengerShareButton
          url={shareUrl}
          aria-label="Udostępnij na Messenger"
        >
          <FacebookMessengerIcon size={40} />
        </FacebookMessengerShareButton>
        <TwitterShareButton
          url={shareUrl}
          size={40}
          aria-label="Udostępnij na Twitter"
        >
          <TwitterIcon size={40} />
        </TwitterShareButton>
        <EmailShareButton
          subject={`Spróbuj naszego przepisu na ${props.title}`}
          aria-label="Udostępnij przez E-mail"
        >
          <EmailIcon size={40} />
        </EmailShareButton>
      </ButtonsContainer>
    </Wrapper>
  )
}

export default SharePanel
