import React from 'react';
import Image from 'next/image';

const Welcome = () => {
  return (
    <section className="p-10 mx-4">
      <div className="flex flex-row items-center justify-center gap-10 mb-6">
        <div className="pop-in-div">
          <Image
            src="/profile.jpg"
            alt="Bennett Taylor"
            width={350}
            height={350}
            style={{ border: "8px solid #FFFFFF" }}
            className="shadow-2xl rounded-lg"
          />
        </div>
        <div className="max-w-xl bg-white min-h-[300px] p-6 shadow-2xl rounded-lg pop-in-div" style={{ border: "8px solid #FFFFFF" }}>
          <h2 className="chicle-regular text-3xl font-bold text-center mb-4">Welcome!</h2>
          <p className="chicle-regular text-lg text-center">
            Thanks for visiting my website! The goal of this site is to showcase work
            that I've done and am doing,
            while having some fun learning how to build and design a website. Because 
            we live in the age of AI, much of this site was built with the help of LLMs, 
            but all design work was done by me. Before building this website I spent quite 
            a bit of time learning the basics of HTML, CSS, JavaScript, React, Next.js, 
            and Tailwind CSS so that I could tweak and understand everything that was generated.
            I hope you enjoy the site!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Welcome;