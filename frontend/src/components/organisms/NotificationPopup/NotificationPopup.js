import React from "react"
import styled from "styled-components"
import Button from "../../atoms/Button/Button"
import { AiOutlineCheckCircle } from "react-icons/ai"

export const Wrapper = styled.div`
  position: fixed;
  height: auto;
  width: 300px;
  /* width: 100%; */
  max-height: 230px;
  /* max-width: 300px; */
  padding: 2rem;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) scale(${({ isActive }) => (isActive ? "1" : "0")});
  transform-origin: bottom;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  color: ${({ theme }) => theme.colors.fontColor};
  box-shadow: 3px 2px 10px -3px ${({ theme }) => theme.otherStyles.shadow};
  border: 1px solid green;
  border-radius: ${({ theme }) => theme.otherStyles.smallRadius};
  transition: transform 0.1s ease;
`
export const Title = styled.p`
  border-bottom: 1px solid green;
  color: ${({ theme }) => theme.colors.accent};
  text-align: center;
  font-size: 2rem;
  padding-bottom: 1rem;
`
export const TextContainer = styled.div`
  padding-top: 1.6rem;
`
export const Text = styled.p`
  font-size: 1.5rem;
  font-family: "Poppins", sans-serif;
`

export const PopupBtn = styled(Button)`
  border: none;
  background-color: ${({ theme }) => theme.colors.base};

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
  }
`

const NotificationPopup = ({ children, isActive = false, onClick }) => {
  return (
    <Wrapper isActive={isActive}>
      <Title>
        <AiOutlineCheckCircle /> Sukces!
      </Title>
      <TextContainer>
        <Text>{children}</Text>
      </TextContainer>
      <PopupBtn onClick={onClick} isLong>
        Ok
      </PopupBtn>
    </Wrapper>
  )
}

export default NotificationPopup
