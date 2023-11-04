"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import "./styles.css";

export default function Waitlist() {
  const [emailInput, setEmailInput] = useState("");
  const [buttonLoading, setButtonLoading] = useState(false);

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!emailInput) {
      alert("Please enter your email address");
      return;
    }

    setButtonLoading(true);
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        body: JSON.stringify({ email: emailInput, }),
      });
      const data = await res.json();

      if (data.status == "400") {
        alert(" You are already subscribed");
      } else if (data.status == "subscribed") {
        console.log(data.status)
        alert(" You are now subscribed");
        setEmailInput("");
        setButtonLoading(false);
      } else {
        throw new Error(
          data.message || alert(data.message)
        );
      }
    } catch (e: any) {
      alert(e.message);
    }

    setEmailInput("");
    setButtonLoading(false);
  };
  return (
    <section className="waitlist">
      <div className="waitlist__container">
        <h3 className="waitlist__title">Waitlist</h3>
        <p>
          Join our waitlist to stay up-to-date with our latest news and
          announcements.
        </p>

        <input type="checkbox" id="modal" />
        <label htmlFor="modal" className="nb-button rounded green">
          Join Waitlist
        </label>
        <label htmlFor="modal" className="modal-background"></label>
        <div className="modal dialog">
          <div className="modal-header">
            <h3> Join our waitlist </h3>
            <label htmlFor="modal" className="close">
              X
            </label>
          </div>
          <p> Thank you for your interest! We&apos;ll be in touch soon. </p>
          <form onSubmit={handleFormSubmit}>
            <input
              type="email"
              autoComplete="email"
              placeholder="Enter your email"
              className="nb-input default"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setEmailInput(e.target.value)
              }
            />
            <button type="submit" className="nb-button orange rounded">
              Join Waitlist
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
