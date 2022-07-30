import { Link } from "gatsby"
import styled from "styled-components"

export const JoinPanelWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  height: auto;
  width: 100%;
  padding: 3rem;
  border-radius: ${({ theme }) => theme.otherStyles.smallRadius};
  box-shadow: 3px 2px 10px -3px ${({ theme }) => theme.otherStyles.shadow};
  background-color: ${({ theme }) => theme.colors.white};
  overflow: hidden;

  @media only screen and (min-width: 768px) {
    height: auto;
    max-width: 600px;
  }
`
export const JoinHeader = styled.p`
  font-weight: 300;
  font-size: 3.2rem;
  color: ${({ theme }) => theme.colors.fontColor};
`
export const JoinForm = styled.form`
  display: flex;
  flex-direction: column;
  padding-top: 2rem;

  @media only screen and (min-width: 768px) {
  }
`
export const JoinLink = styled(Link)`
  text-decoration: none;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.darkGrey};
`
export const ColoredText = styled.span`
  color: ${({ theme }) => theme.colors.accent};
`
export const PasswordInfoText = styled.p`
  display: flex;
  align-items: flex-start;
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: 1.6rem;
  margin-bottom: 1.6rem;
`
