import React, { useContext } from "react"
import styled from "styled-components"
import Modal from "react-modal"
import { StateContext } from "../../../context/StateContext"
import FormField from "../../molecules/FormField/FormField"

export const ModalBody = styled(Modal)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 50%;
  left: 50%;
  height: 550px;
  min-height: 400px;
  padding: 2rem 0;
  margin-top: 3.4rem;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.colors.darkerGrey};
  color: ${({ theme }) => theme.colors.fontColor};
  box-shadow: 0px 10px 10px 3px ${({ theme }) => theme.colors.shadow};
  border-radius: 8px;

  @media only screen and (min-width: 768px) {
    min-height: 70vh;
    width: 600px;
  }
`

export const FormContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const ButtonWrapper = styled.div`
  align-self: end;
  align-content: end;
`

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

const AddRecipeModal = () => {
  const { isModalOpen, closeModal } = useContext(StateContext)

  return (
    <ModalBody
      appElement={document.getElementById("___gatsby")}
      isOpen={true}
      onRequestClose={closeModal}
    >
      <ModalForm>
        <FormContainer>
          <FormField width="70" id="title" name="title" label="title" />
          <FormField
            width="25"
            id="time"
            name="time"
            label="time"
            type="number"
          />
        </FormContainer>
        <FormContainer>
          {/* <FormField width="30" id="diet" name="diet" label="diet" />
          <FormField width="30" id="type" name="type" label="type" />
          <FormField
            width="30"
            id="difficulty"
            name="difficulty"
            label="difficulty"
          /> */}
          <label for="diet">diet</label>
          <select name="diet" id="diet"></select>
        </FormContainer>
        <FormField
          textarea={true}
          id="preparation"
          name="preparation"
          label="preparation"
          type="textarea"
        />
        <FormField
          textarea={true}
          id="ingredients"
          name="ingredients"
          label="ingredients"
          type="textarea"
        />
        <FormField
          isImage={true}
          id="image"
          name="image"
          label="image"
          type="file"
        />

        <ButtonWrapper>
          <Button style={{ marginRight: "1rem" }}>add recipe</Button>
          <Button closeBtn>close</Button>
        </ButtonWrapper>
      </ModalForm>
    </ModalBody>
  )
}

export default AddRecipeModal
