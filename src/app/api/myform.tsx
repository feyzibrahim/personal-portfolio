// import axios from "axios";
import { FormEvent, useState } from "react";

const MyForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbw98AE7kDXN1Yy1nA_9c4uhJJuK0nfdPTjSZNJwPGBjPQo5hinClF9GZTbKCsnjJJGJlw/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            message,
          }),
        }
      );

      if (response.ok) {
        alert("Form submitted successfully");
        // Perform any additional actions if needed
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      alert("Something went wrong");
    }
  };

  return (
    <form
      id="gform"
      className="lg:w-2/4 bg-slate-700 mx-auto mt-5 px-5 lg:px-16 rounded"
      onSubmit={handleSubmit}
    >
      <p className="pt-10 pb-2">Name</p>
      <input
        type="text"
        name="name"
        placeholder="Enter your Name"
        className="input-text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p className="pt-10 pb-2">Email</p>
      <input
        type="email"
        name="email"
        placeholder="Enter your Email"
        className="input-text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <p className="pt-10 pb-2">Message</p>
      <textarea
        name="message"
        placeholder="Enter your Message"
        className="input-text h-56"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <div className="text-right">
        <input type="submit" value="Submit" className="button-style my-5" />
      </div>
    </form>
  );
};

export default MyForm;

{
  /* <form
              id="gform"
              className="lg:w-2/4 bg-slate-700 mx-auto mt-5 px-5 lg:px-16 rounded"
              method="POST"
              action="https://script.google.com/macros/s/AKfycbw98AE7kDXN1Yy1nA_9c4uhJJuK0nfdPTjSZNJwPGBjPQo5hinClF9GZTbKCsnjJJGJlw/exec"
            >
              <p className="pt-10 pb-2">Name</p>
              <input
                type="text"
                name="name"
                placeholder="Enter your Name"
                className="input-text"
              />
              <p className="pt-10 pb-2">Email</p>
              <input
                type="email"
                name="email"
                placeholder="Enter your Email"
                className="input-text"
              />
              <p className="pt-10 pb-2">Message</p>
              <textarea
                name="message"
                placeholder="Enter your Message"
                className="input-text h-56"
              />
              <div className="text-right">
                <input
                  type="submit"
                  value="Submit"
                  className="button-style my-5"
                />
              </div>
            </form> */
}
