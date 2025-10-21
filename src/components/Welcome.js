import React from 'react';
import Image from 'next/image';

const Welcome = () => {
  return (
    <section className="p-4 md:p-10 mx-auto max-w-7xl">
      <div className="flex flex-col md:flex-row items-center justify-center gap-4">
        <div className="pop-in-div w-60 h-60 md:w-80 md:h-80 flex-shrink-0">
          <Image
            src="/profile.jpg"
            alt="Bennett Taylor"
            width={350}
            height={350}
            style={{ border: "8px solid #FFFFFF" }}
            className="shadow-2xl rounded-lg mb-10"
          />
        </div>
        <div className="max-w-xl bg-white min-h-[300px] p-6 shadow-2xl rounded-lg pop-in-div" style={{ border: "8px solid #FFFFFF" }}>
          <h2 className="tinos-400 text-2xl md:text-3xl font-bold text-center mb-4">Welcome!</h2>
          <p className="indent-8 tinos-400 text-md md:text-lg">
            Thanks for visiting my website! The goal of this site is to showcase my work
            while having some fun learning how to build and design a website. LLMs were utilized
            in the making of this site to help expedite the coding process,
            but all design work was done by myself. Before building this website I spent quite
            a bit of time learning the basics of HTML, CSS, JavaScript, React, Next.js,
            and Tailwind CSS so I could build what I wanted.
            I hope you enjoy the site!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Welcome;