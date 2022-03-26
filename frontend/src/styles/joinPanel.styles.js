import { Link } from "gatsby"
import styled from "styled-components"

export const JoinPanelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  height: auto;
  width: 100%;
  padding: 3rem;
  border-radius: 6px;
  box-shadow: 3px 2px 10px -3px ${({ theme }) => theme.colors.shadow};
  background-color: ${({ theme }) => theme.colors.white};

  @media only screen and (min-width: 768px) {
    height: auto;
    max-width: 600px;
  }
`
export const JoinHeader = styled.p`
  font-weight: 300;
  font-size: 4rem;
  margin-bottom: 3rem;
  color: ${({ theme }) => theme.colors.fontColor};
`
export const JoinForm = styled.form`
  display: flex;
  flex-direction: column;
`
export const JoinLink = styled(Link)`
  text-decoration: none;
  margin-top: 2.2rem;
  color: ${({ theme }) => theme.colors.darkGrey};
`
export const ColoredText = styled.span`
  color: ${({ theme }) => theme.colors.secondaryColor};
`
