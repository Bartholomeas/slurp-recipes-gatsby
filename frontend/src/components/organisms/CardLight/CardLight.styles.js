import { Link } from "gatsby"
import styled from "styled-components"

export const CardLink = styled(Link)`
  text-decoration: none;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
  height: 150px;
  max-width: 500px;
  background-color: ${({ theme }) => theme.colors.offLightSecondary};
  border-radius: 6px;
  box-shadow: 3px 2px 10px -3px ${({ theme }) => theme.colors.shadow};
  gap: 2rem;
  overflow: hidden;
  transition: transform 0.3s;

  &:hover {
    transform: scale(0.98);
  }
`
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 100%;
  width: 60%;
  padding: 0.8rem 0rem;
`
export const Title = styled.p`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.darkerBase};
`

export const Button = styled.button`
  color: ${({ theme }) => theme.colors.darkerBase};
  padding: 1rem 0;
  font-family: "Raleway", sans-serif;
  font-weight: 700;
  font-size: 1.6rem;
  border: none;
  background: none;
  cursor: pointer;
  align-self: flex-end;
  margin-right: 2rem;

  &:hover {
    color: ${({ theme }) => theme.colors.baseColor};
  }
`
export const ImageContainer = styled.div`
  height: 100%;
  width: 40%;
  background-color: tomato;
  overflow: hidden;
`
