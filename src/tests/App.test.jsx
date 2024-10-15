import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../App";
import Home from "../components/home/Home";

describe("App", () => {
  it("At first renders loading message", () => {
    render(<App />);
    expect(screen.getByText("Loading...").textContent).toMatch(/Loading.../i);
  });

  it("renders home message", () => {
    render(<Home />);
    expect(screen.getByText("You're in the home section.").textContent).toMatch(
      /You're in the home section./i
    );
  });

// ******************************************************************************************************
// Neither of these work but I think this is basically what we should be going for:

  it("displays empty shopping cart when cart is empty", () => {
    render(<App shoppingCart={[]} />);
    // expect(screen.getByRole("cartIndicator")).not.toBeInTheDocument();
    // or
    expect(screen.getByRole("cartIndicator")).toBeNull();
  });

  it("displays shopping cart indicator when there is something in the cart", () => {
    render(<App shoppingCart={[{ name: "peanuts", quantity: 1 }]} />);
    expect(screen.getByRole("cartIndicator")).not.toBeInTheDocument();
  });
});

describe("something truthy", () => {
  it("multiplies 2 x 2 = 4", () => {
    expect(2 * 2).toBe(4);
  });
});
