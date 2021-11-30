import React, { useContext } from "react"
import { StateContext } from "../../../context/StateContext"
import FormField from "../../molecules/FormField/FormField"
import {
  ModalBody,
  ModalForm,
  FormContainer,
  SelectWrapper,
  SelectLabel,
  Select,
  ButtonWrapper,
  Button,
} from "./AddRecipeModal.styles"

const AddRecipeModal = () => {
  const { isModalOpen, closeModal } = useContext(StateContext)

  return (
    <ModalBody
      appElement={document.getElementById("___gatsby")}
      isOpen={isModalOpen}
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
          <SelectWrapper>
            <SelectLabel htmlFor="diet">diet</SelectLabel>
            <Select name="diet" id="diet">
              <option value="vegetarian">vegetarian</option>
              <option value="vegan">vegan</option>
              <option value="lactose-free">lactose-free</option>
            </Select>
          </SelectWrapper>
          <SelectWrapper>
            <SelectLabel htmlFor="difficulty">difficulty</SelectLabel>
            <Select name="difficulty" id="difficulty">
              <option value="easy">easy</option>
              <option value="medium">medium</option>
              <option value="hard">hard</option>
            </Select>
          </SelectWrapper>
          <SelectWrapper>
            <SelectLabel htmlFor="type">type</SelectLabel>
            <Select name="type" id="type">
              <option value="breakfast">breakfast</option>
              <option value="lunch">lunch</option>
              <option value="dinner">dinner</option>
              <option value="starter">starter</option>
              <option value="dessert">dessert</option>
              <option value="drink">drink</option>
              <option value="soup">soup</option>
            </Select>
          </SelectWrapper>
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
        <FormField id="image" name="image" label="image" type="file" />

        <ButtonWrapper>
          <Button style={{ marginRight: "1rem" }}>add recipe</Button>
          <Button closeBtn>close</Button>
        </ButtonWrapper>
      </ModalForm>
    </ModalBody>
  )
}

export default AddRecipeModal
