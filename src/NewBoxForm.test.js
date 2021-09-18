import { render } from "@testing-library/react";
import React from "react";
import NewBoxForm from "./NewBoxForm";

it("render without crashing", () => {
    render(<NewBoxForm />);
});

it("matches snapshot", () => {
    const { asFragment } = render(<NewBoxForm />);
    expect(asFragment()).toMatchSnapshot();
})