import styled from "styled-components"
import Button from "../../atoms/Button/Button"

export const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 3px 2px 10px -3px ${({ theme }) => theme.otherStyles.shadow};
  border-radius: ${({ theme }) => theme.otherStyles.smallRadius};
`
export const ContactFormBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 0;
  background-color: orange;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-evenly;
    align-items: flex-start;
  }
`

export const ContactFormBody = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 2rem 2rem 0 2rem;
  gap: 0.8rem;
  border-radius: ${({ theme }) => theme.otherStyles.smallRadius};
  color: ${({ theme }) => theme.colors.lightGrey};
  @media only screen and (min-width: 768px) {
    height: 100%;
    max-width: 500px;
  }
`

export const FormButton = styled(Button)`
  color: ${({ theme }) => theme.colors.white};
`
