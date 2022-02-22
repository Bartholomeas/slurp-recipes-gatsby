import styled from "styled-components"
import Button from "../../atoms/Button/Button"

export const RecipesWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding-top: 6rem;
  margin-bottom: 2rem;

  @media only screen and (min-width: 768px) {
    max-width: 1200px;
    margin: 0 auto;
    // margin-bottom: 8rem;
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
    justify-content: center;
    padding: 0 2rem;
    margin-top: 8rem;
    grid-gap: 2rem;
    /* min-height: 100vh; */
    overflow-y: scroll;
  }
`

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  gap: 3rem;
  /* background-color: pink; */
  @media only screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    /* justify-items: space-evenly; */
    gap: 2rem;
    max-width: 1200px;
    padding-bottom: 3rem;
    min-height: 100vh;
  }
  @media only screen and (min-width: 868px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

export const FiltersButton = styled(Button)`
  margin-top: 3rem;

  @media only screen and (min-width: 768px) {
    display: none;
  }
`
