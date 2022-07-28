import styled from "styled-components"
import Modal from "react-modal"

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  margin-top: 10rem;
  /* max-width: ${({ theme }) => theme.otherStyles.maxWidth}; */
  max-width:900px;
  padding: 7rem 2rem 2rem
  background-color: pink;
`

export const Container = styled.div``

export const AddRecipeHeader = styled.h2`
  align-self: flex-start;
  margin-left: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.fontColor};
  font-size: ${({ theme }) => theme.fontSize.medium};
`

export const FormContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  width: 100%;
`

export const ButtonWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  height: 6rem;
`

export const Button = styled.button`
  padding: 1rem 2rem;
  color: ${({ theme }) => theme.colors.lightFont};
  background-color: ${({ closeBtn, theme }) =>
    closeBtn ? theme.colors.grey : theme.colors.accent};
  border: none;
  border-radius: ${({ theme }) => theme.otherStyles.smallRadius};
  transition: background-color 0.2s, transform 0.2s;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.darkBase};
    transform: scale(1.05);
  }
`
// addRecipe FORM

export const Form = styled.form`
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
