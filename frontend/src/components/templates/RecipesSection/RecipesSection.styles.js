import styled from "styled-components"
import { BsFilterCircleFill } from "react-icons/bs"

export const RecipesWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  width: 100vw;
  padding-top: 6rem;
  margin-bottom: 2rem;
  background-color: ${({ theme }) => theme.colors.white};
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    /* justify-content: flex-start; */
    justify-content: center;
    width: auto;
    max-width: 1600px;
    margin: 0 auto;
  }
`
export const RecipesContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 4rem 0;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    padding: 0 1rem;
    margin-top: 4rem;
    gap: 2rem;
    overflow-y: auto;
  }
`

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  gap: 3rem;
  @media only screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 350px;
    gap: 2rem;
    width: 100%;
    //height: 100vh;
    //padding-right: 1rem;
    padding: 0.2rem 0 2rem 1rem;
    /* overflow-y: scroll; */
  }
  @media only screen and (min-width: 1015px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media only screen and (min-width: 1280px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media only screen and (min-width: 1600px) {
    grid-template-columns: repeat(5, 1fr);
  }
`

export const FiltersButton = styled.button`
  position: fixed;
  bottom: 2rem;
  left: 2rem;
  color: ${({ theme }) => theme.colors.secondaryColor};
  background: none;
  border: none;
  font-size: 4rem;
  cursor: pointer;
  z-index: 1000;
  @media only screen and (min-width: 768px) {
    display: none;
  }

  &:hover {
    transform: scale(0.95);
  }
`

export const FilterIcon = styled(BsFilterCircleFill)`
  align-self: normal;
`
