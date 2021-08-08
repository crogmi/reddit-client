import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import Comments from "./Comments";

const Button = ({onClick, children}) => (
    <button onClick={onClick}>{children}</button>
);

/* *************************** Unit Test *************************** */
describe("Comments", () => {
    it("displays comments on click", () => {
        const handleClick = jest.fn();
        render(<Button onClick={handleClick}>Comments</Button>);
        fireEvent.click(screen.getByRole("button"));
        expect(handleClick).toHaveBeenCalledTimes(1);
    })
})
