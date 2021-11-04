import styled from "styled-components"
export const LoginPanelWrapper = styled.div`
  height: 100%;
  width: 100%;
  padding: 3rem 0;

  @media only screen and (min-width: 768px) {
    margin-right: 3rem;
  }
`
export const LoginHeader = styled.h1`
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
`

export const LoginInput = styled.input`
  padding: 1.4rem 1rem;
  margin-bottom: 2rem;
`
