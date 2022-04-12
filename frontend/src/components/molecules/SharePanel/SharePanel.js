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
import SearchBar from "../SearchBar/SearchBar"

export const Wrapper = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.grey};
  height: 150px;
  width: 250px;
  border-radius: 6px;
  padding: 1rem;
  z-index: 9999;
`
export const ButtonsContainer = styled.div`
  display: flex;
  /* flex-direction: column; */
  align-items: flex-start;
  justify-content: space-between;
  /* gap: 1rem; */
  height: 100%;
  width: 100%;
  padding: 2rem 0;
`
export const HeadingText = styled.p`
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
    <Wrapper>
      <HeadingText>Udostępnij:</HeadingText>
      <SearchBar />
      <ButtonsContainer>
        <FacebookShareButton content="To jest button" url={shareUrl}>
          <FacebookIcon size={40} />
        </FacebookShareButton>
        <FacebookMessengerShareButton url={shareUrl}>
          <FacebookMessengerIcon size={40} />
        </FacebookMessengerShareButton>
        <TwitterShareButton url={shareUrl} size={40}>
          <TwitterIcon size={40} />
        </TwitterShareButton>
        <EmailShareButton
          subject={`Spróbuj naszego przepisu na ${props.title}`}
        >
          <EmailIcon size={40} />
        </EmailShareButton>
      </ButtonsContainer>
    </Wrapper>
  )
}

export default SharePanel
