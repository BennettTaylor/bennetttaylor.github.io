import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <section className="p-10 mx-4">
      <div className="flex flex-row items-center justify-center gap-10 mb-6">
        <div>
          <Image
            src="/profile.jpg"
            alt="Bennett Taylor"
            width={300}
            height={300}
            style={{ border: "8px solid #FFFFFF" }}
            className="shadow-2xl rounded-lg"
          />
        </div>
        <div className="max-w-xl bg-white min-h-[300px] p-6 shadow-2xl rounded-lg" style={{ border: "8px solid #FFFFFF" }}>
          <h2 className="chicle-regular text-3xl font-bold text-center mb-6">Welcome</h2>
          <p className="chicle-regular text-lg text-center">
            I am Bennett Taylor, an Electrical and Computer Engineering M.S. student at Boston University. 
            My passion lies in developing innovative solutions and exploring the intersection of hardware and software.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;