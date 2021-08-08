import React from "react";
import { render, fireEvent, waitFor, screen, within } from "@testing-library/react";
import '@testing-library/jest-dom';
import Comments from "./Comments";

/* *************************** Unit Test *************************** */
describe("Comments", () => {
    const comments = [
        {
            user: "Charles", 
            text: "The Clippers are bad"
        },
        {
            user: "Bryce",
            text: "They will always be the JV team in the league"
        }
    ];
    const num_comments = 2;


    it("displays comments on click", () => {
        render(<Comments comments={comments} 
                         num_comments={num_comments} />);
        const button = screen.getByRole("button");
        fireEvent.click(button);
        const comment = screen.getByText("They will always be the JV team in the league")
        expect(comment).toBeInTheDocument();
    })
})
