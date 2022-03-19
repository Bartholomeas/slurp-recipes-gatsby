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
  /* height: 550px; */
  height: calc(100% - 7rem);
  min-height: 400px;
  padding: 2rem 0;
  margin-top: 3.4rem;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.colors.lightGrey};
  color: ${({ theme }) => theme.colors.fontColor};
  box-shadow: 3px 2px 10px -3px ${({ theme }) => theme.colors.shadow};
  border-radius: 6px;
  z-index: 100000;

  @media only screen and (min-width: 768px) {
    /* height: 550px; */
    max-height: 75vh;
    width: 600px;
  }
`
export const ModalHeader = styled.h2`
  align-self: flex-start;
  margin-left: 2rem;
  font-family: "Poppins", sans-serif;
  color: ${({ theme }) => theme.colors.fontColor};
  padding: 1rem 0;
`

export const FormContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
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
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;

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

export const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 1.6rem;
`

export const SelectLabel = styled.label`
  font-size: 1.6rem;
  margin-bottom: 1rem;
`
export const Select = styled.select`
  padding: 1rem 1.2rem;
  width: 100%;
  border: none;
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.colors.grey};
  background: ${({ isImage }) => (isImage ? "none" : "auto")};
`
