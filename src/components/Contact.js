import React from 'react';

const Contact = () => {
  const emailAddress = "betaylor83@gmail.com";
  return (
    <section className="p-4 md:p-10 mx-auto max-w-7xl flex flex-col items-center justify-center">
      <div className="bg-white shadow-2xl rounded-lg m-10 p-10">
        <h2 className="tinos-400 text-3xl text-center font-bold mb-4">Contact Me</h2>
        <p className="tinos-400 mb-6 text-lg text-center">
          Feel free to reach out via email or connect with me on LinkedIn!
        </p>
        
        <a
          href={`https://www.linkedin.com/in/bennettetaylor/`}
          target="_blank"
          rel="noopener noreferrer" 
          className="block w-full max-w-md text-center mb-4"
        >
          <button
            className="tinos-400 bg-lightgreen text-white rounded px-4 py-2 w-full hover:bg-green"
            type="button"
          >
            Connect on LinkedIn
          </button>
        </a>
        <a
          href={`mailto:${emailAddress}?subject=Inquiry%20from%20Portfolio%20Website`}
          className="block w-full max-w-md text-center"
        >
          <button
            className="tinos-400 bg-lightgreen text-white rounded px-4 py-2 w-full hover:bg-green"
            type="button"
          >
            Email Me Directly
          </button>
        </a>
        
        <p className="tinos-400 mt-4 text-center text-sm text-gray-500">
            {emailAddress}
        </p>
      </div>
    </section>
  );
};

export default Contact