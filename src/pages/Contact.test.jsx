
import { describe, it, expect, vi, afterEach } from "vitest";
import {
  render,
  screen,
  fireEvent,
  waitFor,
  cleanup,
} from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Contact from "./Contact";

afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
});

function renderContact() {
  return render(
    <MemoryRouter>
      <Contact />
    </MemoryRouter>
  );
}

function fillContactForm() {
  fireEvent.change(screen.getByLabelText("Your Name"), {
    target: { value: "Test User" },
  });

  fireEvent.change(screen.getByLabelText("Email Address"), {
    target: { value: "test@example.com" },
  });

  fireEvent.change(screen.getByLabelText("Subject"), {
    target: { value: "Portfolio enquiry" },
  });

  fireEvent.change(screen.getByLabelText("Message"), {
    target: { value: "This is a test message." },
  });
}

describe("Contact page", () => {
  it("displays all four contact form fields", () => {
    renderContact();

    expect(screen.getByLabelText("Your Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Email Address")).toBeInTheDocument();
    expect(screen.getByLabelText("Subject")).toBeInTheDocument();
    expect(screen.getByLabelText("Message")).toBeInTheDocument();
  });

  it("marks all form fields as required", () => {
    renderContact();

    expect(screen.getByLabelText("Your Name")).toBeRequired();
    expect(screen.getByLabelText("Email Address")).toBeRequired();
    expect(screen.getByLabelText("Subject")).toBeRequired();
    expect(screen.getByLabelText("Message")).toBeRequired();
  });

  it("submits valid information to the Contact API", async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ message: "Message received" }),
    });

    vi.stubGlobal("fetch", fetchMock);

    renderContact();
    fillContactForm();

    fireEvent.click(screen.getByRole("button", { name: "Send Message" }));

    await waitFor(() => {
      expect(fetchMock).toHaveBeenCalledTimes(1);
    });

    expect(fetchMock).toHaveBeenCalledWith(
      "http://127.0.0.1:8000/api/contact/",
      expect.objectContaining({
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "Test User",
          email: "test@example.com",
          subject: "Portfolio enquiry",
          message: "This is a test message.",
        }),
      })
    );
  });

  it("displays a success message after successful submission", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => ({ message: "Message received" }),
      })
    );

    renderContact();
    fillContactForm();

    fireEvent.click(screen.getByRole("button", { name: "Send Message" }));

    expect(
      await screen.findByText("Your message has been sent successfully!")
    ).toBeInTheDocument();
  });

  it("displays an error message when submission fails", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockRejectedValue(new Error("Network error"))
    );

    const consoleError = vi.spyOn(console, "error").mockImplementation(() => {});

    renderContact();
    fillContactForm();

    fireEvent.click(screen.getByRole("button", { name: "Send Message" }));

    expect(
      await screen.findByRole("alert")
    ).toHaveTextContent("Unable to send your message. Please try again.");
    
    consoleError.mockRestore();
  });
});
