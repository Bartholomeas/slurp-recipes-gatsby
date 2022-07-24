import styled from "styled-components"

export const RecipesWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  max-width: ${({ theme }) => theme.otherStyles.maxWidth};
  padding-top: 6rem;
  margin-bottom: 2rem;
  margin: 0 auto;
  /* background-color: ${({ theme }) => theme.colors.grey}; */
`

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  padding: 2rem;
`
export const SearchbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;

  & h2 {
    color: ${({ theme }) => theme.colors.fontColor};
    font-size: ${({ theme }) => theme.fontSize.big};
  }
`

export const RecipesContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 4rem 2rem;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;

    margin-top: 4rem;
    gap: 2rem;
    overflow-y: auto;
  }
`

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  padding: 2rem;

  gap: 3rem;
  @media only screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 350px;
    gap: 2rem;
    width: 100%;
  }
  @media only screen and (min-width: 1015px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media only screen and (min-width: 1280px) {
    grid-template-columns: repeat(4, 1fr);
  }
`

export const FiltersButton = styled.button`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  color: ${({ theme }) => theme.colors.darkBase};
  background: none;
  border: none;
  font-size: 4rem;
  z-index: 1000;
  cursor: pointer;

  &:hover {
    transform: scale(0.95);
  }

  @media only screen and (min-width: 768px) {
    position: initial;
  }
`
