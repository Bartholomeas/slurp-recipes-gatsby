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
    max-width: 1600px;
    margin: 0 auto;
  }
`
export const RecipesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 4rem 0;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    height: 90vh;
    padding: 0 2rem;
    margin-top: 8rem;
    grid-gap: 2rem;
  }
`

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  @media only screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 30rem;
    grid-gap: 3rem;
    overflow-y: scroll;
    padding-bottom: 3rem;
  }
`

export const FiltersButton = styled(Button)`
  margin-top: 3rem;

  @media only screen and (min-width: 768px) {
    display: none;
  }
`
