import styled from "styled-components"

export const FilterWrapper = styled.div`
  grid-column:0/1
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height:100%;
  width: 100%;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  opacity:${({ isOpen }) => (isOpen ? "1" : "0")};
  max-height:${({ isOpen }) => (isOpen ? "800px" : "0px")};
  transition:max-height .3s, opacity .1s;
  
  @media only screen and (min-width: 768px) {
    min-height: 100%;   
    width: 15%;
    opacity: 1;
  }
  `

export const FilterHeader = styled.p`
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.fontColor};
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
`

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;

  @media only screen and (min-width: 768px) {
    align-items: flex-start;
  }
`
