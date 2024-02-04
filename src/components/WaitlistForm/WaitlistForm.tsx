"use client";

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import "./styles.css"
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup"

interface FormData {
  email: string;
};
const requiredSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Invalid email format"
    )
    .max(255, "Email is too long")
});
export default function WaitlistForm() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(requiredSchema),
  });
  const [successMessage, setSuccessMessage] = useState('');


  const handleFormSubmit = async (data: FormData) => {
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        body: JSON.stringify({ email: data.email }),
      });
      const response = await res.json();

      if (response.status === 400) {
        setSuccessMessage("You are already subscribed");
        reset();
      } else if (response.status === 400 && response.title === "Invalid Resource") {
        setSuccessMessage("Please enter a valid email address");
        reset();
      } else if (response.status === "subscribed") {
        setSuccessMessage("You are now subscribed");
        reset();
      } else {
        throw new Error(response.message || alert(response.message));
      }
    } catch (error: any) {
      alert(error.message);
    }
  };
  const handleInputChange = () => {
    setSuccessMessage(''); 
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
          <form onSubmit={handleSubmit(handleFormSubmit)}>
            <input
              type="email"
              autoComplete="email"
              placeholder="Enter your email"
              className="nb-input default"
              onFocus={handleInputChange}
              {...register("email", { required: true })}
            />
              {errors.email && <p className="alert error">Please enter a valid email</p>}  
              {successMessage && <p className="alert success">{successMessage}</p>}
            <button type="submit" className="nb-button orange rounded">
              Join Waitlist
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
