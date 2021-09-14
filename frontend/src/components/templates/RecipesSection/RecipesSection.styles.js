import styled from "styled-components"
import Button from "../../atoms/Button/Button"

export const RecipesWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  width: 100%;
  padding-top: 6rem;

  @media only screen and (min-width: 768px) {
    padding: 6rem 4rem;
  }
`
export const RecipesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-top: 6rem;

  @media only screen and (min-width: 768px) {
    display: grid;
    grid-gap: 3rem;
    // grid-template-columns: repeat(4, 1fr);
    grid-template-columns: repeat(4, 1fr);
  }
`

export const FiltersButton = styled(Button)`
  font-size: 5rem;
  color: red;

  &::before {
    width: 5rem;
  }
`
