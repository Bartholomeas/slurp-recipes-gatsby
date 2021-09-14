import styled from "styled-components"
import Button from "../../atoms/Button/Button"

export const RecipesWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding-top: 6rem;

  @media only screen and (min-width: 768px) {
    max-width: 1980px;
    margin: 0 auto;
  }
`
export const RecipesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-top: 4rem;
  padding: 4rem 0;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    height: 90vh;
    padding: 4rem;
  }
`

export const CardsContainer = styled.div`
  grid-column: 2/8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: gold;

  @media only screen and (min-width: 768px) {
    display: grid;
    grid-gap: 3rem;
  }
`

export const FiltersButton = styled(Button)`
  font-size: 5rem;
  color: red;

  &::before {
    width: 5rem;
  }
`
