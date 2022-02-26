import styled from "styled-components"

export const FilterWrapper = styled.div`
  /* grid-column: 0/1; */
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  margin-top: 7rem;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.lightSecondary};
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  max-height: ${({ isOpen }) => (isOpen ? "800px" : "0px")};
  transition: max-height 0.3s, opacity 0.1s;
  overflow: hidden;
  z-index: 200;

  @media only screen and (min-width: 768px) {
    min-height: 100%;
    width: 300px;
    opacity: 1;
  }
`

export const FilterHeader = styled.p`
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.fontColor};
  font-size: 2.6rem;
  font-weight: bold;
  text-align: center;
`

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  overflow-y: auto;

  @media only screen and (min-width: 768px) {
    align-items: flex-start;
  }
`

export const ClearButton = styled.button`
  padding: 0.8rem 1.4rem;
  border: none;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.baseColor};
  color: ${({ theme }) => theme.colors.lightFont};
  font-size: 1.4rem;
  cursor: pointer;
  transition: 0.3s background-color;

  &:hover {
    background-color: ${({ theme }) => theme.colors.darkerBase};
  }
`
