import { type FormEvent, useState } from "react";

export default function Form() {
  const [responseMessage, setResponseMessage] = useState("");

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const response = await fetch("/api/feedback", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    if (data.message) {
      setResponseMessage(data.message);
    }
  }

  return (
    <form onSubmit={submit}>
      <label htmlFor="first-name">First Name<input type="text" id="first-name" name="first-name" autoComplete="first-name" required /></label>
      <br />
      <br />
      <label htmlFor="last-name">Last Name<input type="text" id="last-name" name="last-name" autoComplete="last-name" required /></label>
      <br />
      <br />
      <label htmlFor="email">Email<input type="email" id="email" name="email" autoComplete="email" required /></label>
      <br />
      <br />
      <label htmlFor="phone">Phone Number<input type="phone" id="phone" name="phone" autoComplete="phone" required /></label>
      <br />
      <br />
      <br />
      <label htmlFor="comppany">comppany<input type="comppany" id="comppany" name="comppany" autoComplete="comppany" required /></label>
      <br />
      <label htmlFor="message">Message<textarea id="message" name="message" autoComplete="off" required /></label>
      <br />
      <br />
      <button>Send</button>
      {responseMessage && <p>{responseMessage}</p>}
    </form>
  );
}