import React, { useState } from "react";
import vg from "../assets/vg.png";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [disableBtn, setDisableBtn] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("submitHandler fired");
    console.log("honeypot value:", JSON.stringify(honeypot));

    // Bot check - if this hidden field got filled, silently drop it
    if (honeypot) {
      console.log("Blocked by honeypot check! Value was:", honeypot);
      return;
    }

    setDisableBtn(true);
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        { name, email, message },
        PUBLIC_KEY
      );
      toast.success("Message Sent");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {

      toast.error("Error sending message");
    } finally {
      setDisableBtn(false);
    }
  };

  const animations = {
    form: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },

    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
      transition: {
        delay: 0.5,
      },
    },
  };

  return (
    <div id="contact">
      <section>
        <motion.form onSubmit={submitHandler} {...animations.form}>
          <h2>Contact Me</h2>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Your Message"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          {/* Honeypot field - hidden from real users, bots fill it automatically */}
          <input
            type="text"
            name="hp_field_xyz"
            id="hp_field_xyz"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
            style={{
              position: "absolute",
              left: "-9999px",
              width: "1px",
              height: "1px",
              opacity: 0,
            }}
            tabIndex="-1"
            autoComplete="new-password"
          />

          <motion.button
            disabled={disableBtn}
            className={disableBtn ? "disableBtn" : ""}
            {...animations.button}
            type="submit"
          >
            {disableBtn ? "Sending..." : "Send"}
          </motion.button>
        </motion.form>
      </section>
      <aside>
        <img src={vg} alt="Graphics" />
      </aside>
    </div>
  );
};

export default Contact;