import React from "react"
import styled from "styled-components"
import Button from "../../atoms/Button/Button"
import { AiOutlineCheckCircle } from "react-icons/ai"

export const Wrapper = styled.div`
  position: fixed;
  flex-direction:column;
  display:flex;
  align-items:center;
  justify-content:center;
  height:auto;
  max-height: 230px;
  padding: 2rem;
  left: 50%;
  width:100%;
  bottom:0;
  transform: translateX(-50%) scale(${({ isActive }) => (isActive ? "1" : "0")});
  transform-origin: bottom;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.fontColor};
  border-radius: ${({ theme }) => theme.otherStyles.smallRadius};
  transition: transform 0.1s ease;
  box-shadow:${({theme})=> theme.otherStyles.shadow};
  z-index:10000;
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
  max-width:300px;
  text-align:center;
`
export const Text = styled.p`
  font-size: 1.5rem;
  font-family: "Poppins", sans-serif;
`

export const PopupBtn = styled(Button)`
  border: none;
  width:150px;
  padding:1rem .8rem;
  margin-top:1.6rem;
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
        Przejdź
      </PopupBtn>
    </Wrapper>
  )
}

export default NotificationPopup
