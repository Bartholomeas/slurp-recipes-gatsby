import React from "react"
import {render, screen, fireEvent} from "@testing-library/react"
import LoginPanel from "./LoginPanel"
import TestWrapper from "../providers/TestWrapper"

describe("Login panel component", ()=>{
    it("renders correctly", ()=>{
        render(
            <TestWrapper>
                <LoginPanel/>
            </TestWrapper>
        )
    })
})