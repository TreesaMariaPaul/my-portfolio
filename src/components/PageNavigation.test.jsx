
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import PageNavigation from "./PageNavigation";

describe("PageNavigation component", () => {
  it("renders both Previous and Next links", () => {
    render(
      <MemoryRouter>
        <PageNavigation
          previous="/education"
          previousLabel="Education"
          next="/blog"
          nextLabel="Blog"
        />
      </MemoryRouter>
    );

    expect(screen.getByRole("link", { name: /PreviousEducation/ }))
      .toHaveAttribute("href", "/education");

    expect(screen.getByRole("link", { name: /NextBlog/ }))
      .toHaveAttribute("href", "/blog");
  });

  it("renders only the Previous link when Next is not provided", () => {
    render(
      <MemoryRouter>
        <PageNavigation
          previous="/education"
          previousLabel="Education"
        />
      </MemoryRouter>
    );

    expect(screen.getByRole("link", { name: /PreviousEducation/ }))
      .toHaveAttribute("href", "/education");

    expect(screen.queryByText("Next")).not.toBeInTheDocument();
  });

  it("renders only the Next link when Previous is not provided", () => {
    render(
      <MemoryRouter>
        <PageNavigation
          next="/blog"
          nextLabel="Blog"
        />
      </MemoryRouter>
    );

    expect(screen.getByRole("link", { name: /NextBlog/ }))
      .toHaveAttribute("href", "/blog");

    expect(screen.queryByText("Previous")).not.toBeInTheDocument();
  });
});
