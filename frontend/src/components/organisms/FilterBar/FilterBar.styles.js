import styled from "styled-components"

export const FilterWrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: flex-start;
  height: 100vh;
  width: 100%;
  margin-top: 4rem;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%)
    scale(${({ isOpen }) => (isOpen ? "1" : "0")});
  transform-origin: left bottom;
  background-color: ${({ theme }) => theme.colors.greenish};
  border-radius: 6px;
  overflow: hidden;
  transition: transform 0.2s ease-in;
  z-index: 200;
  @media only screen and (min-width: 768px) {
    position: relative;
    display: flex;
    min-height: 100%;
    max-width: 200px;
    left: 0;
    top: 0;
    transform: translate(0);
    opacity: 1;
  }

  /* &::before {
    content: "";
    position: absolute;
    background: gold;
    height: 100%;
    left: -2rem;
  } */
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
  height: 90%;
  width: 100%;
  padding: 2rem 0;
  overflow-y: auto;
  @media only screen and (min-width: 768px) {
    padding: 0;
    align-items: center;
  }
`

export const ClearButton = styled.button`
  padding: 0.8rem 1.4rem;
  border: none;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.secondaryColor};
  color: ${({ theme }) => theme.colors.lightFont};
  font-size: 1.4rem;
  cursor: pointer;
  transition: 0.3s background-color;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryColor};
  }
`
