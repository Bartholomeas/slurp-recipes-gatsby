import React from "react"
import {render,screen} from "@testing-library/react"
import Logo from "./Logo"
import LogoIcon from "../../../images/logo.svg"

describe("Logo", ()=>{
    it("Displays correctly, and have alt attribute of 'Logo Siorb Przepisy'",()=>{
        render(<Logo/>)
        const logoElement = screen.getByAltText(/Logo Siorb Przepisy/i);
        expect(logoElement).toBeInTheDocument();
        expect(logoElement).toHaveAttribute("alt", "Logo Siorb Przepisy");
    })

})