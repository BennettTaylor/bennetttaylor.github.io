import React from 'react';

const About = () => {
return (
    <section className="p-4 md:p-10 mx-auto max-w-7xl">
        <div className="flex flex-row items-center justify-center pop-in-div">
            <div className="max-w-3xl bg-white p-8 shadow-2xl rounded-lg">
                <h2 className="tinos-400 text-2xl md:text-3xl font-bold text-center mb-6">Who Am I?</h2>
                <p className="indent-8 tinos-400 text-md md:text-lg font-bold mb-6">
                    As the URL, GitHub repository, and header for this website might suggest, my name is Bennett Taylor!
                    I am currently working at Symbotic as a Mobile Bot Software Co-Op and pursuing a Master's degree in Electrical and Computer Engineering at Boston University,
                    where I am deepening my expertise in embedded systems, computer architecture, and hardware-software integration.
                </p>
                <p className="indent-8 tinos-400 text-md md:text-lg font-bold mb-6">
                    Generally speaking, I enjoy working on challenging and interesting projects where I can learn something new.
                    Understanding how things work and figuring out how to make them better is at the core of what drives me.
                </p>
                <p className="indent-8 tinos-400 text-md md:text-lg font-bold mb-6">
                    I am currently completing a co-op at Symbotic and will be joining Cisco full-time after graduating
                    with my M.S. in May. I am always happy to connect with others in software engineering, embedded systems,
                    and hardware design, so please feel free to reach out via email (betaylor83@gmail.com).
                </p>
                <h2 className="tinos-400 text-2xl md:text-3xl font-bold text-center mb-6">My Background</h2>
                <p className="indent-8 tinos-400 text-md md:text-lg font-bold mb-6">
                    I'm originally from Groton, Massachusetts, where I graduated from Groton-Dunstable Regional High School
                    and attained the rank of Eagle Scout (Troop 3 Groton, 2021).
                </p>
                <p className="indent-8 tinos-400 text-md md:text-lg font-bold mb-6">
                    I completed my undergraduate studies at Boston University, graduating Cum Laude in 2025 with a B.S. in Computer Engineering.
                    I began my academic journey as a Biomedical Engineering major but changed my focus after an internship centered on arthroscopic equipment
                    at Johnson & Johnson during the summer of 2022. During this internship, I had the opportunity to
                    join the embedded software team to work on a project improving and testing the device's mechanical performance
                    through software enhancements. This experience sparked my interest in embedded systems and computer engineering,
                    prompting me to switch majors to learn more about how these devices and computers work "under the hood."
                </p>
                <p className="indent-8 tinos-400 text-md md:text-lg font-bold mb-6">
                    Since then, I've had the opportunity to work on a variety of projects through coursework, personal projects, and internship/co-op work.
                    More information about those projects can be found below or on the projects page. Through this work, I've developed
                    my skills in C, Linux, BASH, Verilog, and Python. Although I have experience with many other programming languages, frameworks,
                    and tools, these are what I would consider my core strengths. I find myself most interested in the design and interaction between 
                    hardware and software, which I hope to pursue in my career.
                </p>
                <h2 className="tinos-400 text-2xl md:text-3xl font-bold text-center mb-6">In My Free Time</h2>
                <p className="indent-8 tinos-400 text-md md:text-lg font-bold mb-6">
                    Outside of my technical work, I enjoy hiking, backpacking, running, rock climbing, painting, drawing, and photography.
                    You can view the highlights of my artistic work on the Art page of this website! I developed a love for the outdoors
                    while in the Boy Scouts, where I first started backpacking and completed many conservation projects.
                    The wilderness has a calming, motivating effect on me, and I always feel refreshed after spending time outside.
                    I've always been active, having played soccer and baseball as a kid and run on cross country and track teams
                    in high school and college (although I was never particularly fast).
                </p>
            </div>
        </div>
    </section>
    );
};

export default About;