import React from 'react';

const Contact = () => {
  return (
    <section className="flex flex-col items-center justify-center p-8">
      <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
      <p className="mb-4">Feel free to reach out via email or connect with me on LinkedIn!</p>
      <form className="w-full max-w-md">
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="name">Name</label>
          <input
            className="border border-gray-300 rounded p-2 w-full"
            type="text"
            id="name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
          <input
            className="border border-gray-300 rounded p-2 w-full"
            type="email"
            id="email"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="message">Message</label>
          <textarea
            className="border border-gray-300 rounded p-2 w-full"
            id="message"
            rows="4"
            required
          ></textarea>
        </div>
        <button
          className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600"
          type="submit"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;