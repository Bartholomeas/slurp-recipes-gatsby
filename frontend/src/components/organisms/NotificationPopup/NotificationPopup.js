import React from "react"
import styled from "styled-components"

export const Wrapper = styled.div`
  position: absolute;
  max-height: 200px;
  max-width: 300px;
  padding: 3rem;
  border-radius: 6px;
  left: 50%;
  bottom: 3rem;
  transform: translateX(-50%);
  box-shadow: 3px 2px 10px -3px ${({ theme }) => theme.colors.shadow};
  background-color: ${({ theme }) => theme.colors.lightGrey};
  color: ${({ theme }) => theme.colors.fontColor};
`
export const Header = styled.p`
  border-bottom: 1px solid green;
`
export const TextContainer = styled.div``
export const Text = styled.p``
export const ButtonWrapper = styled.div``
export const Button = styled.button``

const NotificationPopup = () => {
  return (
    <Wrapper>
      <Header>Sukces!</Header>
      <TextContainer>
        <Text>Gratulacje, rejestracja przebiegła pomyślnie</Text>
      </TextContainer>
      <Button>Ok</Button>
    </Wrapper>
  )
}

export default NotificationPopup
