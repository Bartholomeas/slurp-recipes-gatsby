import React from "react"
import styled from "styled-components"
import Button from "../../atoms/Button/Button"
import { AiOutlineCheckCircle } from "react-icons/ai"

export const Wrapper = styled.div`
  position: absolute;
  height: auto;
  max-height: 200px;
  max-width: 300px;
  width: 100%;
  padding: 2rem;
  border-radius: 6px;
  left: 50%;
  top: 50%;
  transform: translate(
    ${({ isActive }) => (isActive ? "-50%, 50%" : "-50%, 400px")}
  );
  background-color: ${({ theme }) => theme.colors.lightGrey};
  color: ${({ theme }) => theme.colors.fontColor};
  box-shadow: 3px 2px 10px -3px ${({ theme }) => theme.colors.shadow};
  border: 1px solid green;
  transition: transform 0.3s ease-in-out;
`
export const Title = styled.p`
  border-bottom: 1px solid green;
  color: ${({ theme }) => theme.colors.darkerSecondary};
  text-align: center;
  font-size: 2rem;
  padding-bottom: 1rem;
`
export const TextContainer = styled.div`
  padding-top: 1.6rem;
`
export const Text = styled.p`
  font-size: 1.5rem;
  font-family: "Poppins", sans-serif;/
`

export const PopupBtn = styled(Button)`
  border: none;
  background-color: ${({ theme }) => theme.colors.offGreenish};

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondaryColor};
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
