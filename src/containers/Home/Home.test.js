import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import Home from "./Home";
import CardList from "../../components/CardList";

/* *************************** Smoke Test *************************** */

describe("Home", () => {
    it("renders the home page without crashing", () => {
        render(<Home />);
        screen.debug();
    });
});

