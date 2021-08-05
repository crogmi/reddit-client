import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import App from "./App";

/* *************************** Smoke Test *************************** */

describe("Home", () => {
    it("renders the home page without crashing", () => {
        render(<App />);
        screen.debug();
    });
});
