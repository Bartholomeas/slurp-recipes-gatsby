import React, { useContext } from "react"
import styled from "styled-components"
import Modal from "react-modal"
import { StateContext } from "../../../context/StateContext"
import FormField from "../../molecules/FormField/FormField"

export const ModalBody = styled(Modal)`
  position: absolute;
  top: 50%;
  left: 50%;
  min-height: 70vh;
  min-width: 80%;
  max-width: 500px;
  padding: 2rem;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.colors.darkerGrey};
  color: ${({ theme }) => theme.colors.fontColor};
  box-shadow: 0px 10px 10px 3px ${({ theme }) => theme.colors.shadow};
  border-radius: 8px;
`

export const ButtonWrapper = styled.div``

export const Button = styled.button`
  padding: 1rem 2rem;
  color: ${({ theme }) => theme.colors.lightFont};
  background-color: ${({ closeBtn }) => (closeBtn ? "#AEAEAE" : "#A41A1A")};
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.darkerBase};
    transform: scale(1.05);
  }
`
// MODAL FORM

export const ModalForm = styled.form``

const AddRecipeModal = () => {
  const { isModalOpen, closeModal } = useContext(StateContext)

  return (
    <ModalBody
      appElement={document.getElementById("___gatsby")}
      isOpen={isModalOpen}
      onRequestClose={closeModal}
    >
      <ModalForm>
        <FormField id="title" name="title" label="title" />
        <FormField id="time" name="time" label="time" />
        {/*  */}
        <FormField id="diet" name="diet" label="diet" />
        <FormField id="type" name="type" label="type" />
        <FormField id="difficulty" name="difficulty" label="difficulty" />
        {/*  */}
        <FormField
          id="preparation"
          name="preparation"
          label="preparation"
          type="textarea"
        />
        <FormField
          id="ingredients"
          name="ingredients"
          label="ingredients"
          type="textarea"
        />
        {/*  */}
        <FormField id="image" name="image" label="image" type="file" />

        <ButtonWrapper>
          <Button>add recipe</Button>
          <Button closeBtn>close</Button>
        </ButtonWrapper>
      </ModalForm>
    </ModalBody>
  )
}

export default AddRecipeModal
