import React from "react"
import styled from "styled-components"

const Wrapper = styled.div``

const Label = styled.label``

const Input = styled.input``

const FormField = ({ id, label, name, type = "text", ...props }) => {
  return (
    <Wrapper>
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} name={name} type={type}></Input>
    </Wrapper>
  )
}

export default FormField
