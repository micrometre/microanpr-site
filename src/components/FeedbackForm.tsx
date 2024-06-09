import { type FormEvent, useState } from "react";

export default function Form() {
  const [responseMessage, setResponseMessage] = useState("");

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const response = await fetch("http://192.168.1.122:8082", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    if (data.message) {
      setResponseMessage(data.message);
    }
  }

  return (
    <main>
      <ul role="list" className="link-card-grid">
        <section className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
          <div className="mx-auto max-w-2xl lg:max-w-5xl">
            <div className="text-center">
              <h1 className="text-balance text-2xl font-bold tracking-tight text-neutral-800 dark:text-neutral-200 md:text-4xl md:leading-tight">
                Contact us
              </h1>
              <p
                className="mt-1 text-pretty text-neutral-600 dark:text-neutral-400">
                Have questions or want to discuss a project? Reach
                out, and let's craft the perfect solution with our
                services.
              </p>
            </div>
            <div className="mt-12 grid items-center gap-6 lg:grid-cols-2 lg:gap-16">
              <div className="flex flex-col rounded-xl p-4 sm:p-6 lg:p-8">
                <h2 className="mb-8 text-xl font-bold text-neutral-700 dark:text-neutral-300">
                  Fill in the form below
                </h2>
                <form onSubmit={submit}>
                  <div className="grid gap-4">

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="first-name" ><input type="text" id="first-name" placeholder="First Name"
                          className="block w-full rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-700 placeholder:text-neutral-500 focus:border-neutral-200 focus:outline-none focus:ring focus:ring-neutral-400 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-600 dark:bg-neutral-700/30 dark:text-neutral-300 dark:placeholder:text-neutral-400 dark:focus:ring-1"
                          name="first-name" autoComplete="first-name" required /></label>
                      </div>
                      <div>

                        <label htmlFor="last-name"><input type="text" id="last-name" placeholder="Last Name"
                          className="block w-full rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-700 placeholder:text-neutral-500 focus:border-neutral-200 focus:outline-none focus:ring focus:ring-neutral-400 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-600 dark:bg-neutral-700/30 dark:text-neutral-300 dark:placeholder:text-neutral-400 dark:focus:ring-1"
                          name="last-name" autoComplete="last-name" required /></label>
                      </div>
                    </div>
                      <label htmlFor="email"><input type="email" id="email" placeholder="Email"
                        className="block w-full rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-700 placeholder:text-neutral-500 focus:border-neutral-200 focus:outline-none focus:ring focus:ring-neutral-400 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-600 dark:bg-neutral-700/30 dark:text-neutral-300 dark:placeholder:text-neutral-400 dark:focus:ring-1"
                        name="email" autoComplete="email" required /></label>
                      <label htmlFor="phone"><input type="phone" id="phone" placeholder="Phone Number"
   											className="block w-full rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-700 placeholder:text-neutral-500 focus:border-neutral-200 focus:outline-none focus:ring focus:ring-neutral-400 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-600 dark:bg-neutral-700/30 dark:text-neutral-300 dark:placeholder:text-neutral-400 dark:focus:ring-1"

                       name="phone" autoComplete="phone" required /></label>
                      <label htmlFor="company">company<input type="company" id="company" name="company" autoComplete="company" required /></label>
                      <br />
                      <label htmlFor="message">Message<textarea id="message" name="message" autoComplete="off" required /></label>
                      <br />
                      <br />
                      <button>Send</button>
                      {responseMessage && <p>{responseMessage}</p>}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </ul>
    </main>
  );
}