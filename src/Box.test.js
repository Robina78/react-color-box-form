import { render } from "@testing-library/react";
import React from "react";
import Box from './Box';

it("render without crashing", () => {
    render(<Box />);
});

it("matches snapshot", () => {
    const { asFragment } = render(<Box />);
    expect(asFragment()).toMatchSnapshot();
})