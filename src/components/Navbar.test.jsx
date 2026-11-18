
import { describe, it, expect } from "vitest";
import { render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navbar from "./Navbar";

describe("Navbar component", () => {
  it("renders all navigation links correctly", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    const nav = screen.getByRole("navigation");

    expect(within(nav).getByRole("link", { name: "About" })).toHaveAttribute("href", "/about");
    expect(within(nav).getByRole("link", { name: "Education" })).toHaveAttribute("href", "/education");
    expect(within(nav).getByRole("link", { name: "Professional Knowledge" })).toHaveAttribute("href", "/professional-knowledge");
    expect(within(nav).getByRole("link", { name: "Blog" })).toHaveAttribute("href", "/blog");
    expect(within(nav).getByRole("link", { name: "Picture Gallery" })).toHaveAttribute("href", "/picture-gallery");
    expect(within(nav).getByRole("link", { name: "Video Gallery" })).toHaveAttribute("href", "/video-gallery");
    expect(within(nav).getByRole("link", { name: "Contact" })).toHaveAttribute("href", "/contact");
    expect(within(nav).getByRole("link", { name: "Readme" })).toHaveAttribute("href", "/readme");
  });

  it("renders the portfolio logo linking to the Home page", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    expect(
      screen.getByRole("link", { name: "My Portfolio" })
    ).toHaveAttribute("href", "/");
  });
});
