import React from 'react';

const Contact = () => {
  return (
    <section className="flex flex-col items-center justify-center p-8" style={{ border: "8px solid #FFFFFF" }}>
      <div className="bg-white shadow-2xl rounded-lg m-10 p-10">
        <h2 className="chicle-regular text-2xl font-bold mb-4">Contact Me</h2>
        <p className="chicle-regular mb-4 text-lg">Feel free to reach out via email or connect with me on LinkedIn!</p>
        <form className="w-full max-w-md">
          <div className="mb-4">
            <label className="chicle-regular block text-md font-medium mb-2" htmlFor="name">Name</label>
            <input
              className="border border-lightgreen p-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-lightgreen"
              type="text"
              id="name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="chicle-regular block text-md font-medium mb-2" htmlFor="email">Email</label>
            <input
              className="border border-lightgreen p-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-lightgreen"
              type="email"
              id="email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="chicle-regular block text-md font-medium mb-2" htmlFor="message">Message</label>
            <textarea
              className="border border-lightgreen p-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-lightgreen"
              id="message"
              rows="4"
              required
            ></textarea>
          </div>
          <button
            className="chicle-regular bg-lightgreen text-white rounded px-4 py-2 hover:bg-green"
            type="submit"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;