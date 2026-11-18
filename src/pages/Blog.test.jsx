
import { describe, it, expect, vi, afterEach } from "vitest";
import { render, screen, fireEvent, waitFor, cleanup } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Blog from "./Blog";

const mockPosts = [
  { id: 1, title: "Post One", excerpt: "First excerpt", content: "First content" },
  { id: 2, title: "Post Two", excerpt: "Second excerpt", content: "Second content" },
  { id: 3, title: "Post Three", excerpt: "Third excerpt", content: "Third content" },
  { id: 4, title: "Post Four", excerpt: "Fourth excerpt", content: "Fourth content" },
  { id: 5, title: "Post Five", excerpt: "Fifth excerpt", content: "Fifth content" },
];

afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
});

function renderBlog() {
  return render(
    <MemoryRouter>
      <Blog />
    </MemoryRouter>
  );
}

describe("Blog page", () => {
  it("displays the Blog heading", async () => {
  vi.stubGlobal(
    "fetch",
    vi.fn().mockResolvedValue({
      ok: true,
      json: async () => mockPosts,
    })
  );

  renderBlog();

  expect(
    screen.getByRole("heading", { name: /My Blog/i })
  ).toBeInTheDocument();

  expect(await screen.findByText("Post One")).toBeInTheDocument();
});

  it("loads blog posts from the API", async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => mockPosts,
    });

    vi.stubGlobal("fetch", fetchMock);

    renderBlog();

    expect(await screen.findByText("Post One")).toBeInTheDocument();
    expect(screen.getByText("Post Two")).toBeInTheDocument();

    expect(fetchMock).toHaveBeenCalledWith(
      "http://127.0.0.1:8000/api/blog/"
    );
  });

  it("displays only two posts on the first page", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => mockPosts,
      })
    );

    renderBlog();

    expect(await screen.findByText("Post One")).toBeInTheDocument();
    expect(screen.getByText("Post Two")).toBeInTheDocument();
    expect(screen.queryByText("Post Three")).not.toBeInTheDocument();
  });

  it("displays the next two posts when Next is clicked", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => mockPosts,
      })
    );

    renderBlog();

    await screen.findByText("Post One");

    fireEvent.click(screen.getByRole("button", { name: "Next" }));

    expect(await screen.findByText("Post Three")).toBeInTheDocument();
    expect(screen.getByText("Post Four")).toBeInTheDocument();
    expect(screen.queryByText("Post One")).not.toBeInTheDocument();
  });

  it("returns to the previous posts when Previous is clicked", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => mockPosts,
      })
    );

    renderBlog();

    await screen.findByText("Post One");

    fireEvent.click(screen.getByRole("button", { name: "Next" }));
    await screen.findByText("Post Three");

    fireEvent.click(screen.getByRole("button", { name: "Previous" }));

    expect(await screen.findByText("Post One")).toBeInTheDocument();
    expect(screen.getByText("Post Two")).toBeInTheDocument();
  });

  it("disables Previous on the first page", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => mockPosts,
      })
    );

    renderBlog();

    await screen.findByText("Post One");

    expect(screen.getByRole("button", { name: "Previous" })).toBeDisabled();
  });

  it("disables Next on the last page", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => mockPosts,
      })
    );

    renderBlog();

    await screen.findByText("Post One");

    fireEvent.click(screen.getByRole("button", { name: "Next" }));
    await screen.findByText("Post Three");

    fireEvent.click(screen.getByRole("button", { name: "Next" }));
    await screen.findByText("Post Five");

    expect(screen.getByRole("button", { name: "Next" })).toBeDisabled();
  });
});
