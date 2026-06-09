import { useState, useRef, useEffect } from "react";
import ladduAI from "../assets/laddu ai.png";

function ChatBot() {

  const [open, setOpen] = useState(false);

  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);

  const [showGreeting, setShowGreeting] = useState(true);
  const chatRef = useRef(null);

  const [messages, setMessages] =
    useState([
      {
        sender: "bot",
        text:
          "Hello 👋 Welcome to Bhanwarilal. How can I help you today?"
      }
    ]);

  const messagesEndRef =
    useRef(null);

  useEffect(() => {

  const handleClickOutside = (event) => {

    if (
      open &&
      chatRef.current &&
      !chatRef.current.contains(
        event.target
      )
    ) {

      setOpen(false);

    }

  };

  document.addEventListener(
    "mousedown",
    handleClickOutside
  );

  return () => {

    document.removeEventListener(
      "mousedown",
      handleClickOutside
    );

  };

}, [open]);

  useEffect(() => {

    const timer =
      setTimeout(() => {

        setShowGreeting(false);

      }, 6000);

    return () =>
      clearTimeout(timer);

  }, []);

  useEffect(() => {

    messagesEndRef.current
      ?.scrollIntoView({
        behavior: "smooth"
      });

  }, [messages]);

  const sendMessage =
    async () => {

      if (!message.trim())
        return;

      const userMessage = {
        sender: "user",
        text: message
      };

      setMessages(prev => [
        ...prev,
        userMessage
      ]);

      const currentMessage =
        message;

      setMessage("");

      setLoading(true);

      try {

        const res =
          await fetch(
            "http://localhost:5000/chat",
            {
              method: "POST",
              headers: {
                "Content-Type":
                  "application/json"
              },
              body:
                JSON.stringify({
                  message:
                    currentMessage
                })
            }
          );

        const data =
          await res.json();

        setMessages(prev => [
          ...prev,
          {
            sender: "bot",
            text: data.reply
          }
        ]);

      } catch {

        setMessages(prev => [
          ...prev,
          {
            sender: "bot",
            text:
              "Sorry, something went wrong."
          }
        ]);

      }

      setLoading(false);

    };

  return (
    <>

      <div className="fixed bottom-6 right-6 z-50">

  {showGreeting && !open && (

    <div
      className="
      absolute
      bottom-24
      right-0
      bg-white
      rounded-2xl
      shadow-xl
      p-4
      w-64
      text-sm
      "
    >

      <p className="font-semibold">
        Heyy 👋
      </p>

      <p>
        Laddu here.
      </p>

      <p>
        How can I help you today?
      </p>

    </div>

  )}

  <img
    src={ladduAI}
    alt="AI Assistant"
    onClick={(e) => {
      e.stopPropagation();
      setOpen(true);
    }}
    className="
    w-auto
    h-30
    cursor-pointer
    ai-float
    "
  />

</div>

      {open && (

        <div
          ref={chatRef}
          className="
          fixed
          bottom-24
          right-6
          z-50
          w-[350px]
          h-[500px]
          bg-white
          rounded-2xl
          shadow-2xl
          overflow-hidden
          flex
          flex-col
          "
        >

          <div
            className="
            bg-[#b8860b]
            text-white
            p-4
            font-bold
            text-lg
            "
          >
            Bhanwarilal Assistant
          </div>

          <div
            className="
            flex-1
            overflow-y-auto
            p-4
            bg-gray-50
            "
          >

            {messages.map(
              (
                msg,
                index
              ) => (

                <div
                  key={index}
                  className={`mb-3 flex ${
                    msg.sender ===
                    "user"
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >

                  <div
                    className={`max-w-[80%] px-4 py-2 rounded-xl ${
                      msg.sender ===
                      "user"
                        ? "bg-[#b8860b] text-white"
                        : "bg-white border"
                    }`}
                  >
                    {msg.text}
                  </div>

                </div>

              )
            )}

            {loading && (

              <div
                className="
                bg-white
                border
                rounded-xl
                inline-block
                px-4
                py-2
                "
              >
                Typing...
              </div>

            )}

            <div
              ref={
                messagesEndRef
              }
            />

          </div>

          <div
            className="
            p-3
            border-t
            flex
            gap-2
            "
          >

            <input
              type="text"
              value={message}
              onChange={(e) =>
                setMessage(
                  e.target.value
                )
              }
              onKeyDown={(e) => {

                if (
                  e.key ===
                  "Enter"
                ) {

                  sendMessage();

                }

              }}
              placeholder="Ask anything..."
              className="
              flex-1
              border
              rounded-lg
              px-3
              py-2
              outline-none
              "
            />

            <button
              onClick={
                sendMessage
              }
              className="
              bg-[#b8860b]
              text-white
              px-4
              rounded-lg
              "
            >
              Send
            </button>

          </div>

        </div>

      )}

    </>
  );
}

export default ChatBot;