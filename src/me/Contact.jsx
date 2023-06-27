import { GitHub, Gmail, Instagram} from "./Icons";
import "./Contact.css";
import React from "react";

export function Contact() {

  const handleButtonGmail = () => {
    window.location.href =
      "https://mail.google.com/mail/?view=cm&fs=1&to=jodavasa9936@gmail.com";
  };
  return (
    <div className="Contact">
      <div className="Contained">
        <h1>Let's work together...</h1>
        <h2>How do you take your coffee?</h2>
        <div className="icons">
          <button onClick={handleButtonGmail}>
            <a href="#">
              <Gmail /> <p>Send me a Gmail</p>
            </a>
          </button>
          <button>
            <a href="https://www.instagram.com/jose__valencia/">
              <Instagram /> <p>Instagram</p>
            </a>
          </button>

          <button>
            <a href="https://github.com/jodavasa9936">
              <GitHub /> <p>GitHub</p>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
