import styled from "styled-components"

export const FilterWrapper = styled.div`
  grid-column:0/1
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // height: 100%;
  width: 100%;
  padding: 3rem;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  `
export const FilterHeader = styled.p`
  color: ${({ theme }) => theme.colors.fontColor};
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 2rem;
`

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media only screen and (min-width: 768px) {
    align-items: flex-start;
  }
`
