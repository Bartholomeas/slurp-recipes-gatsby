import styled from "styled-components"

export const ConverterWrapper = styled.div`
  position: absolute;
  height: auto;
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
    /* height: 300px; */
    width: 400px;
    right: 2rem;
    transform-origin: top left;
  }
`

export const MeasuresContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2rem 0;
  /* gap: 1rem; */
  height: 100%;
  width: 100%;
`
export const ConverterHeader = styled.h2`
  font-weight: 300;
`
export const TopContainer = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
`
export const ConvertedContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.secondaryColor};

  & p {
    padding: 1rem;
  }
`

export const ConvertedValuesBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  padding: 2rem 1rem;
  border-radius: 6px;
  color: ${({ theme }) => theme.colors.secondarySupport};
  background-color: ${({ theme }) => theme.colors.greenish};
  font-size: 1.6rem;
`
export const ConvertedValue = styled.p`
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  align-items: center;
  gap: 2rem;
  font-size: 1.6rem;
`
