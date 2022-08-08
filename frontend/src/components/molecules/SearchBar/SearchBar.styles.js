import styled from "styled-components";

export const SearchWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0.4rem 1.2rem;
  color: ${({ theme }) => theme.colors.fontColor};
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
  border-radius: ${({ theme }) => theme.otherStyles.smallRadius};
  box-shadow: ${({ theme }) => theme.otherStyles.shadow};

  @media only screen and (min-width: 768px) {
    max-width: 300px;
  }

  & svg {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.fontColor};
  }
`

export const SearchLabel = styled.label`
  position: absolute;
  left: -10000px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
`

export const SearchArea = styled.input`
  padding: 0.8rem;
  border: none;
  background: none;
  width: 100%;
  border-radius: ${({ theme }) => theme.otherStyles.smallRadius};

  &:focus ${SearchWrapper} {
    border: none;
    background-color: ${({ theme }) => theme.colors.lightGrey};
    background-color: pink;
    outline: 1px solid lightgrey;
  }
`

export const ResultsWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 4rem;
  left: 0;
  width: 100%;
  height: auto;
  padding: 0.8rem 1.6rem;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.otherStyles.smallRadius};
  box-shadow: ${({ theme }) => theme.otherStyles.shadow};
  z-index: 10000;
`
export const ResultsTitle = styled.h3`
  color: ${({ theme }) => theme.colors.grey};
  font-weight: 700;
`

export const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`