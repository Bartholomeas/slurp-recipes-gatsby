import styled from "styled-components"

export const FilterWrapper = styled.div`
  grid-column:0/1
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  `
export const FilterHeader = styled.p`
  color: ${({ theme }) => theme.colors.fontColor};
  font-size: 3rem;
  font-weight: bold;
`

export const FilterContainer = styled.div`
  height: 100%;
  width: 100%;
  padding: 3rem;
  background-color: ${({ theme }) => theme.colors.lightGrey};
`
