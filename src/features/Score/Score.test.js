import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Score from "./Score";

/* *************************** Smoke Test *************************** */
describe("Score", () => {
    const score = 900;

    it("renders buttons and score", () => {
        render(<Score score={score} />);
        const displayedScore = screen.getByText(900);
        expect(displayedScore).toBeInTheDocument();
    });
});