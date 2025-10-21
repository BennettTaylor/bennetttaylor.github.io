import React from 'react';

const About = () => {
return (
    <section className="p-4 md:p-10 mx-auto max-w-7xl">
        <div className="flex flex-row items-center justify-center pop-in-div">
            <div className="max-w-3xl bg-white p-8 shadow-2xl rounded-lg">
                <h2 className="chicle-regular text-2xl md:text-3xl font-bold text-center mb-6">Who am I?</h2>
                <p className="indent-8 chicle-regular text-md md:text-lg font-bold mb-6">
                    As the URL, GitHub respository, and header for this website might suggest, my name is Bennett Taylor!
                    I am currently pursuing a Master's degree in Electrical and Computer Engineering at Boston University,
                    where I am deepening my expertise in embedded systems, computer architecture, and hardware-software integration.
                </p>
                <p className="indent-8 chicle-regular text-md md:text-lg font-bold mb-6">
                    Generally speaking, I like to work on challenging and interesting project where I can learn something new.
                    Understanding how things work and figuring out how to make them better is at the core of what I want to do.
                </p>
                <p className="indent-8 chicle-regular text-md md:text-lg font-bold mb-6">
                    While I complete my degree, I'm looking for job or co-op opportunities in software engineering, embedded systems,
                    or hardware design. If you have an opportunity that you think I might be a good fit for, please don't hesitate
                    to reach out via email (betaylor83@gmail.com).
                </p>
                <h2 className="chicle-regular text-2xl md:text-3xl font-bold text-center mb-6">My Backgound</h2>
                <p className="indent-8 chicle-regular text-md md:text-lg font-bold mb-6">
                    Originally I'm from Groton, Massachusetts, where I graduated from Groton-Dunstable Regional High School
                    and attained the rank of Eagle Scout (Troop 3 Groton, 2021).
                </p>
                <p className="indent-8 chicle-regular text-md md:text-lg font-bold mb-6">
                    I completed my undergraduate studies at
                    Boston University, graduating Cum Laude in 2025 with a B.S. in Computer Engineering. I started my academic
                    journey as a Biomedical Engineering major, but changed course after completing an arthroscopic equipment
                    internship at Johnson & Johnson during the summer of 2022. During this internship I had the opportunity to
                    join the embedded software team to work on a project to improve & test the device's mechanical performance
                    through software improvements. This experience sparked my interest in embedded systems and computer engineering,
                    and I decided to switch majors to learn more about how embedded devices and computers work beneath the hood.
                </p>
                <p className="indent-8 chicle-regular text-md md:text-lg font-bold mb-6">
                    Since then I've had the opportunity to work on a variety of projects between coursework, personal projects, and an internship.
                    More information about those projects can be found below this section or on the projects page. Through this work I've developed
                    my skills in C, Linux, BASH, Verilog, and Python. Although I have experience with many other programming languages, frameworks,
                    and tools, these are what I would consider my core strengths. I find myself most interested in the design and interaction of 
                    hardware and software, which I hope to pursue in my future career.
                </p>
                <h2 className="chicle-regular text-2xl md:text-3xl font-bold text-center mb-6">In My Free Time</h2>
                <p className="indent-8 chicle-regular text-md md:text-lg font-bold mb-6">
                    Outside of technical work, I enjoy hiking, backpacking, running, rock climbing, painting, drawing, and photography.
                    You can view the highlights of my artistic work on the Art page of this website! I developed a love of the outdoors
                    while in the Boy Scouts, where I first started backpacking and completed many, many conservation projects.
                    The wilderness seems to have a calming, motivating effect on me, and I definitely feel refreshed after spending time outside.
                    I would also consider myself quite active, having played soccer and baseball as a kid, and run during cross country and track
                    in high school and college (although I was never particularly fast).
                </p>
            </div>
        </div>
    </section>
    );
};

export default About;