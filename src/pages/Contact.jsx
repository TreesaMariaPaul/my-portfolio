
import { useState } from "react";
import PageNavigation from "../components/PageNavigation";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setIsSubmitting(true);
    setStatus("");

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/contact/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          typeof data === "object"
            ? Object.values(data).flat().join(" ")
            : "Something went wrong."
        );
      }

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="contact-page">
      <header className="contact-header">
        <span className="contact-label">GET IN TOUCH</span>
        <h1>
          Contact <span>Me</span>
        </h1>
        <p>
          Have a question, opportunity, or something interesting to discuss?
          Feel free to get in touch.
        </p>
      </header>

      <section className="contact-container">
        <div className="contact-information">
          <h2>Let's Connect</h2>
          <p>
            I am always interested in connecting with people, learning about
            new opportunities, and discussing technology.
          </p>

          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:YOUR_EMAIL@example.com">
              YOUR_EMAIL@example.com
            </a>
          </p>

          <p>
            <strong>Location:</strong> Limerick, Ireland
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Your Name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />

          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />

          <label htmlFor="subject">Subject</label>
          <input
            id="subject"
            name="subject"
            type="text"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Enter the subject"
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message..."
            rows="6"
            required
          />

          {status === "success" && (
            <p className="contact-success" role="status">
              Your message has been sent successfully!
            </p>
          )}

          {status === "error" && (
            <p className="contact-error" role="alert">
              Unable to send your message. Please try again.
            </p>
          )}

          <button
            type="submit"
            className="contact-submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </section>

      <PageNavigation
        previous="/readme"
        previousLabel="Readme"
        next="/"
        nextLabel="Home"
      />
    </main>
  );
}

export default Contact;
