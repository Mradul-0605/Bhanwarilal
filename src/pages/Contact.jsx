import { useState } from "react";

function Contact() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");

  const sendMessage = async () => {

    if (!name.trim()) {

        alert("Please enter your name");
        return;

        }

        if (!email.trim()) {

        alert("Please enter your email");
        return;

        }

        const emailRegex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {

        alert("Please enter a valid email");
        return;

        }

        if (!phone.trim()) {

        alert("Please enter phone number");
        return;

        }

        if (!/^\d{10}$/.test(phone)) {

        alert("Phone number must be 10 digits");
        return;

        }

        if (!message.trim()) {

        alert("Please enter a message");
        return;

        }

        if (message.length < 10) {

        alert(
            "Message should be at least 10 characters"
        );

        return;

        }

    try {

      const response = await fetch(
        "http://localhost:5000/contact",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            phone,
            message,
          }),
        }
      );

      const data =
        await response.json();

      if (data.success) {

        alert(
          "Message Sent Successfully"
        );

        setName("");
        setEmail("");
        setPhone("");
        setMessage("");

      } else {

        alert(
          "Failed To Send"
        );

      }

    } catch {

      alert(
        "Server Error"
      );

    }

  };

  return (

    <section id="contact"
      className="
      py-24
      px-6
      bg-[#f8f1df]
      "
    >

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-14">

          <p
            className="
            text-[#b8860b]
            uppercase
            tracking-[4px]
            mb-3
            "
          >
            Contact Us
          </p>

          <h2
            className="
            text-5xl
            font-bold
            text-[#2b1a05]
            "
          >
            Get In Touch
          </h2>

        </div>

        <div
          className="
          grid
          lg:grid-cols-2
          gap-10
          "
        >

          {/* FORM */}

          <div
            className="
            bg-white
            rounded-3xl
            p-8
            shadow-xl
            "
          >

            <h3
              className="
              text-2xl
              font-bold
              mb-6
              text-[#2b1a05]
              "
            >
              Send Message
            </h3>

            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) =>
                setName(
                  e.target.value
                )
              }
              className="
              w-full
              border
              rounded-xl
              p-4
              mb-4
              "
            />

            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) =>
                setEmail(
                  e.target.value
                )
              }
              className="
              w-full
              border
              rounded-xl
              p-4
              mb-4
              "
            />

            <input
                type="tel"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) =>
                    setPhone(e.target.value)
                }
                className="
                w-full
                border
                rounded-xl
                p-4
                mb-4
                "
                />

            <textarea
              rows="5"
              placeholder="Message"
              value={message}
              onChange={(e) =>
                setMessage(
                  e.target.value
                )
              }
              className="
              w-full
              border
              rounded-xl
              p-4
              mb-4
              resize-none
              "
            />

            <button
              onClick={sendMessage}
              className="
              bg-[#b8860b]
              hover:bg-[#9d7108]
              text-white
              px-8
              py-4
              rounded-xl
              font-semibold
              transition
              "
            >
              Send Message
            </button>

          </div>

          {/* SHOPS */}

          <div
            className="
            grid
            gap-5
            "
          >

            <div
              className="
              bg-white
              rounded-3xl
              p-6
              shadow-xl
              "
            >
              <h3 className="text-xl font-bold mb-3">
                📍 Mhow Store
              </h3>

              <p>☎ +91 XXXXXXXXXX</p>
              <p>☎ +91 XXXXXXXXXX</p>
            </div>

            <div
              className="
              bg-white
              rounded-3xl
              p-6
              shadow-xl
              "
            >
              <h3 className="text-xl font-bold mb-3">
                📍 Tirupati Green Outlet
              </h3>

              <p>☎ +91 XXXXXXXXXX</p>
              <p>☎ +91 XXXXXXXXXX</p>
            </div>

            <div
              className="
              bg-white
              rounded-3xl
              p-6
              shadow-xl
              "
            >
              <h3 className="text-xl font-bold mb-3">
                📍 Indore Outlet
              </h3>

              <p>☎ +91 XXXXXXXXXX</p>
              <p>☎ +91 XXXXXXXXXX</p>
            </div>

            <div
              className="
              bg-white
              rounded-3xl
              p-6
              shadow-xl
              "
            >
              <h3 className="text-xl font-bold mb-3">
                📧 Email
              </h3>

              <p>
                contact@bhanwarilal.com
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>

  );

}

export default Contact;