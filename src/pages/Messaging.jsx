import { useState } from "react"
import PageNavigation from "../components/PageNavigation"

function Messaging() {
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState([])

  function sendMessage() {
    if (message.trim() === "") return

    setMessages([
      ...messages,
      {
        id: Date.now(),
        text: message,
      },
    ])

    setMessage("")
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      sendMessage()
    }
  }

  return (
    <main className="messaging-page">

      <div className="messaging-header">

        <span className="messaging-label">
          GET IN TOUCH
        </span>

        <h1>
          Instant <span>Messaging</span>
        </h1>

        <p className="messaging-intro">
          Send a message using the interactive messaging facility
          below.
        </p>

      </div>

      <div className="chat-container">

        <div className="chat-header">

          <div className="chat-profile">
            <div className="profile-icon">
              T
            </div>

            <div>
              <h2>Treesa</h2>
              <span>Available for messages</span>
            </div>
          </div>

          <div className="online-status">
            <span></span>
            Online
          </div>

        </div>


        <div className="chat-messages">

          {messages.length === 0 ? (

            <div className="empty-chat">

              <div className="empty-icon">
                💬
              </div>

              <h3>Start a Conversation</h3>

              <p>
                Type a message below to interact with this
                messaging facility.
              </p>

            </div>

          ) : (

            messages.map((msg) => (

              <div
                className="message-bubble"
                key={msg.id}
              >
                {msg.text}
              </div>

            ))

          )}

        </div>


        <div className="chat-input-area">

          <input
            type="text"
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
          />

          <button onClick={sendMessage}>
            Send
          </button>

        </div>

      </div>
      <PageNavigation previous="/blog" previousLabel="Blog" next="/readme" nextLabel="Readme" />

    </main>
  )
}


export default Messaging