import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";
import App from "./App";
import userEvent from "@testing-library/user-event";

describe("TEST APP", () => {
  test("render component", async () => {
    // render(<App />);
    // const helloWorldElem = screen.getByText(/hello world/i);
    // const btn = screen.getByRole("button");
    // const input = screen.getByPlaceholderText(/input value/i);

    // expect(helloWorldElem).toBeInTheDocument();
    // expect(btn).toBeInTheDocument();
    // expect(input).toMatchSnapshot();
    //   screen.debug();
  });

  test("render component", async () => {
    render(<App />);
    //   const helloWorldElem = screen.queryByText(/hello world12345/i);
    //   expect(helloWorldElem).toBeNull();
    // screen.debug();
    // const helloWorldElem = await screen.findByText(/hello2/i);
    // screen.debug();
    // expect(helloWorldElem).toBeInTheDocument();
    // expect(helloWorldElem).toHaveStyle({color: 'green'});
  });

  test("render component", async () => {
    render(<App />);
    
    const btn = screen.getByTestId('toggle-btn');
    expect(screen.queryByTestId('toggle-elem')).toBeNull();
    fireEvent.click(btn);
    expect(screen.queryByTestId('toggle-elem')).toBeInTheDocument();
    fireEvent.click(btn);
    expect(screen.queryByTestId('toggle-elem')).toBeNull();
  });

  test("render component", async () => {
    render(<App />);
    
    const input = screen.getByPlaceholderText(/input value/i);
    expect(screen.getByTestId('input value')).toContainHTML('');
    // fireEvent.input(input, {
    //     target: { value: 'inputt' }
    // })
    await userEvent.type(input, 'inputt');
    expect(screen.getByTestId('input value')).toContainHTML('inputt');
  });
});
