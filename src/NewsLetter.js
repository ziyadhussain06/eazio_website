import React from 'react';
import { useForm } from "react-hook-form";
import { useState } from 'react';

//import postmark from 'postmark';
function Newsletter() {
    const { handleSubmit, formState } = useForm(); // functions imported to build form
  const { isSubmitting } = formState;
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  function onSubmit(data) {
    // Return promise that resolves after 3 seconds
    return new Promise((resolve) => {
      setTimeout(() => {
        setMessage('Thank you for submitting');
        setEmail(''); // Reset the email input
        resolve();
      }, 3000);
    });
  }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="newsletter_form">
      <input
        className="input-email"
        type="email"
        name="email"
        placeholder="Enter your email"
        required
        value={email} // Set the value of the input
        onChange={(e) => setEmail(e.target.value)} // Handle input changes
      />
      <button disabled={isSubmitting} className="btn Submit-btn">
        {isSubmitting && <span className="spinner-border spinner-border-sm mr-1 me-1"></span>}
        Submit
      </button>
      <p className="newsletter-message mt-1 color-text">{message}</p>
    </form>
    );
}

export default Newsletter;
