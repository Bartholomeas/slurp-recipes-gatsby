import styled from "styled-components"

export const ConverterWrapper = styled.div`
  position: absolute;
  height: 300px;
  width: 100%;
  top: 7rem;
  right: 0;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  box-shadow: 0px 2px 5px ${({ theme }) => theme.colors.shadow};
  border-radius: 6px;
  transform: scale(
    ${({ isConverterActive }) => (isConverterActive ? "1" : "0")}
  );
  transform-origin: top right;
  transition: transform 0.3s ease-in-out;
  z-index: -15;

  @media only screen and (min-width: 768px) {
    height: 300px;
    width: 400px;
    right: 2rem;
    transform-origin: top left;
  }
`

export const MeasuresContainer = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  padding: 2rem 0;
  gap: 1rem;
  height: 100%;
  width: 100%;
  /* background-color: pink; */
`
export const ConverterHeader = styled.h2`
  font-weight: 300;
`
  