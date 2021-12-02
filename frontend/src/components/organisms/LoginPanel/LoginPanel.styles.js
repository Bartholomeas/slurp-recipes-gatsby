import styled from "styled-components"
import { Link } from "gatsby"

export const LoginPanelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  padding: 3rem 0;
  /* background-color: ${({ theme }) => theme.colors.darkerGrey}; */

  @media only screen and (min-width: 768px) {
    max-width: 30%;
    margin-right: 3rem;
  }
`
export const LoginHeader = styled.p`
  font-weight: 300;
  font-size: 5rem;
  margin-bottom: 3rem;
  color: ${({ theme }) => theme.colors.fontColor};
`

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
`

export const LoginLabel = styled.label`
  margin-bottom: 1rem;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.fontColor};
`

export const LoginInput = styled.input`
  padding: 1.4rem 1rem;
  margin-bottom: 2rem;
  border: 2px solid ${({ theme }) => theme.colors.darkerGrey};
  border-radius: 6px;
`
export const RegisterLink = styled(Link)`
  text-decoration: none;
  margin-top: 2.2rem;
  color: ${({ theme }) => theme.colors.darkGrey};
`
