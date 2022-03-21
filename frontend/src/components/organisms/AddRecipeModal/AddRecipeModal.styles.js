import styled from "styled-components"
import Modal from "react-modal"

export const ModalBody = styled(Modal)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 50%;
  left: 50%;
  height: calc(100% - 7rem);
  padding: 4rem 0;
  margin-top: 3.4rem;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.colors.lightGrey};
  color: ${({ theme }) => theme.colors.fontColor};
  box-shadow: 3px 2px 10px -3px ${({ theme }) => theme.colors.shadow};
  border-radius: 6px;
  overflow-y: scroll;
  z-index: 1000;

  @media only screen and (min-width: 768px) {
    height: auto;
    padding: 2rem 0;
    height: auto;
    width: 600px;
  }
`
export const ModalHeader = styled.h2`
  position: relative;
  align-self: flex-start;
  margin-left: 2rem;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.fontColor};
  padding: 1rem 0;
`

export const FormContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  width: 100%;
`

export const ButtonWrapper = styled.div`
  align-self: end;
  align-content: end;
`

export const Button = styled.button`
  padding: 1rem 2rem;
  color: ${({ theme }) => theme.colors.lightFont};
  background-color: ${({ closeBtn, theme }) =>
    closeBtn ? theme.colors.grey : theme.colors.secondaryColor};
  border: none;
  border-radius: 6px;
  transition: background-color 0.3s, transform 0.3s;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.darkerPrimary};
    transform: scale(1.05);
  }
`
// MODAL FORM

export const ModalForm = styled.form`
  width: 100%;
  height: 100%;
  padding: 2rem;

  @media only screen and (max-width: 320px) {
    min-height: 400px;
    overflow-y: scroll;
  }
  @media only screen and (min-width: 768px) {
    height: auto;
    overflow: auto;
  }
`
