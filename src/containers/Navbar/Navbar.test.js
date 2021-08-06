import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Navbar from "./Navbar";

/* *************************** Smoke Test *************************** */

describe("Navbar", () => {
    it("renders the navbar without crashing", () => {
        render(<Navbar />);
        screen.debug();
    })

    it("renders the site title within the Navbar", () => {
        const navbar = render(<Navbar />)
        const title = navbar.container.querySelector("#site-title");
        expect(title).toBeInTheDocument();
    })
})