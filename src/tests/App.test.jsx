import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../App";
import Home from "../components/home/Home";

describe("App", () => {
  it("At first renders loading message", () => {
    render(<App />);
    expect(screen.getByText("Loading...").textContent).toMatch(/Loading.../i);
  });

  // ******************************************************************************************************************************************************************
// So far the above is our only successful test. We need to somehow utilize componentDidMount or something similar rather than using a setTimeout. The set timeout somehow makes every test pass

  it("renders home message", () => {
    render(<Home />);
    expect(screen.getByText("You're in the home section.").textContent).toMatch(/You're in the home section./i);
  })

});



describe("something truthy", () => {
  it("multiplies 2 x 2 = 4", () => {
    expect(2 * 2).toBe(4);
  });
});
