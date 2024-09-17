import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import HomePage from "./page";

jest.mock("./button-actions", () => ({
  ButtonActions: () => <div data-testid="mock-button-actions">Mock ButtonActions</div>,
}));

describe("HomePage", () => {
  beforeEach(() => {
    render(<HomePage />);
  });
  it("renders a heading", () => {
    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("AWS Cloud Practitioner Certification Prep");

  });
  it("renders the ButtonActions component", () => {
    const buttonActions = screen.getByTestId("mock-button-actions");

    expect(buttonActions).toBeInTheDocument();
  });

  it("renders the span element with the correct text", () => {
    const span = screen.getByText(/Cloud Practitioner/i);
    
    expect(span).toHaveClass("text-indigo-500");
  });
});
