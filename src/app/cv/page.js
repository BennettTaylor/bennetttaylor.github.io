"use client";
import React from 'react';
// Note: In a live Next.js app, external links like FontAwesome 
// (for icons) and Google Fonts would be imported in the root 
// layout file, not here. We assume Inter font is loaded and 
// FontAwesome is accessible for the icons used (fas, fab).

// Assume the custom colors (whiter, peach, green, blue, etc.) are configured in tailwind.config.js.

const CV = () => {
    // Applying global text color and font class to the main container
    return (
        // The main container provides padding and centers the CV content.
        <div className="max-w-4xl mx-auto p-6 lg:p-10 shadow-2xl bg-white rounded-xl my-8 text-black chicle-regular">
            {/* MAIN CONTENT SECTIONS */}
            <main className=" space-y-8">

                {/* EDUCATION */}
                <section>
                    {/* Section title modified: border-b-4 border-peach pb-1 mb-4 text-green -> border-b pb-1 mb-4 */}
                    <h2 className="text-lg font-extrabold border-b pb-1 mb-4">EDUCATION</h2>
                    
                    <div className="space-y-4">
                        {/* Master's Degree */}
                        <div>
                            <div className="flex justify-between items-start">
                                <h3 className="font-bold text-xl">Boston University, College of Engineering</h3>
                                <span className="text-sm flex-shrink-0">Boston, MA | Dec 2026</span>
                            </div>
                            {/* Changed text-green to inherit black */}
                            <p className="italic text-lg">M.S. in Electrical and Computer Engineering</p>
                            <p className="text-sm">GPA: 3.74/4.00, College of Engineering Graduate Scholarship</p>
                            <p className="text-sm mt-1">Relevant Coursework: Embedded Systems, Cybersecurity, High Performance Programming, Cloud Computing</p>
                        </div>

                        {/* Bachelor's Degree */}
                        <div>
                            <div className="flex justify-between items-start">
                                <h3 className="font-bold text-lg">Boston University, College of Engineering</h3>
                                <span className="text-sm flex-shrink-0">Sept 2023 – May 2025</span>
                            </div>
                            {/* Changed text-green to inherit black */}
                            <p className="italic text-md">B.S. in Computer Engineering</p>
                            <p className="text-sm">GPA: 3.78/4.00, Cum Laude, Tau Beta Pi Engineering Honor Society</p>
                            <p className="text-sm mt-1">Relevant Coursework: Operating Systems, Signals & Systems, Networking, Deep Learning</p>
                        </div>
                    </div>
                </section>
                
                {/* EXPERIENCE */}
                <section>
                    {/* Section title modified: border-b-4 border-peach pb-1 mb-4 text-green -> border-b pb-1 mb-4 */}
                    <h2 className="text-lg font-extrabold border-b pb-1 mb-4">EXPERIENCE</h2>

                    {/* BU TA Role - Removed borders/padding/shadows */}
                    <div className="mb-6">
                        <div className="flex justify-between items-start">
                            <h3 className="font-bold text-lg">Teaching Assistant</h3>
                            <span className="text-sm flex-shrink-0">Sept 2023 – May 2025</span>
                        </div>
                        {/* Changed text-green to inherit black */}
                        <p className="text-md">Boston University Dept. of Electrical and Computer Engineering | Boston, MA</p>
                        <p className="text-sm mt-1 mb-2">Courses: Computer Organization, Logic Design, Electric Circuits, Machine Learning</p>
                        <ul className="list-disc ml-5 space-y-1 text-sm">
                            <li>Facilitated learning in four undergraduate engineering courses (80+ students) by aiding students in completing coursework including lab work, homework, and exam preparation.</li>
                            <li>Assisted students during lab sessions in modeling chip components and architecture with Verilog on FPGAs; labs ranged from creating simple muxes to multistage CPU pipelines with forwarding, hazard detection, etc.</li>
                            <li>Developed grading criteria and provided detailed feedback on homework, labs, and exams in collaboration with professors.</li>
                        </ul>
                    </div>

                    {/* Progress Software Internship - Removed borders/padding/shadows */}
                    <div className="mb-6">
                        <div className="flex justify-between items-start">
                            <h3 className="font-bold text-lg">Software Engineer Intern</h3>
                            <span className="text-sm flex-shrink-0">Jun – Aug 2024</span>
                        </div>
                        {/* Changed text-green to inherit black */}
                        <p className="text-md">Progress Software | Burlington, MA</p>
                        <ul className="list-disc ml-5 space-y-1 text-sm mt-2">
                            <li>Improved the core ABL language by writing C code within the language's XML and JSON handlers and Windows IDE.</li>
                            <li>Integrated updated software libraries into the product codebase, resulting in increased security and stability.</li>
                            <li>Wrote BASH scripts to scan a 2M+ line codebase to detect unused files and functions, leading to the removal of several thousand lines of nonfunctional code.</li>
                            <li>Followed standard software development practices, including version control, agile methodologies, debugging, testing, and compliance with code style guidelines.</li>
                        </ul>
                    </div>

                    {/* J&J Internship - Removed borders/padding/shadows */}
                    <div>
                        <div className="flex justify-between items-start">
                            <h3 className="font-bold text-lg">Arthroscopic Equipment R&D Intern</h3>
                            <span className="text-sm flex-shrink-0">Jun – Sep 2022</span>
                        </div>
                        {/* Changed text-green to inherit black */}
                        <p className="text-md">Johnson & Johnson | Raynham, MA</p>
                        <ul className="list-disc ml-5 space-y-1 text-sm mt-2">
                            <li>Assisted the product development team in developing and refining a portfolio of blades, burs, and shavers for use in arthroscopic surgery.</li>
                            <li>Wrote C code and utilized Rhapsody UML to improve shaver performance by optimizing the oscillation mode waveform, leading to improved tissue resection and user perception.</li>
                            <li>Updated design control documentation including software requirements & specifications.</li>
                        </ul>
                    </div>
                </section>

                {/* PROJECTS */}
                <section>
                    {/* Section title modified: border-b-4 border-peach pb-1 mb-4 text-green -> border-b pb-1 mb-4 */}
                    <h2 className="text-lg font-extrabold border-b pb-1 mb-4">PROJECTS</h2>

                    <div className="space-y-4">
                        {/* RV32I CPU Implementation - Removed borders/padding/shadows */}
                        <div className="">
                            <div className="flex justify-between items-start">
                                <h3 className="font-bold text-lg">RV32I CPU Implementation on FPGA</h3>
                                <span className="text-sm flex-shrink-0">Sept 2025–Present</span>
                            </div>
                            <ul className="list-disc ml-5 space-y-1 text-sm mt-1">
                                <li>Working in a team of two to implement a functional 32-bit RISC-V core on a Nexys A7 FPGA with AXI and JTAG interfaces for communication and debugging.</li>
                                <li>The core uses a 5-stage pipeline built using Verilog and Xilinx Vivado design suite.</li>
                            </ul>
                        </div>

                        {/* Sparse Matrix Multiplication - Removed borders/padding/shadows */}
                        <div className="">
                            <div className="flex justify-between items-start">
                                <h3 className="font-bold text-lg">Sparse Matrix Multiplication Optimization in C</h3>
                                <span className="text-sm flex-shrink-0">Feb 2025 – May 2025</span>
                            </div>
                            <ul className="list-disc ml-5 space-y-1 text-sm mt-1">
                                <li>Investigated low-level sparse matrix multiplication design by implementing custom COO and CRS format matrix structures, randomized generation functions, and both serial & multithreaded multiplication functions.</li>
                                <li>Reviewed results of optimization by using advanced timing techniques and graphical analysis.</li>
                            </ul>
                        </div>
                        
                        {/* Bike Guard Senior Design - Removed borders/padding/shadows */}
                        <div className="">
                            <div className="flex justify-between items-start">
                                <h3 className="font-bold text-lg">Bike Guard Senior Design Project</h3>
                                <span className="text-sm flex-shrink-0">Aug 2024–May 2025</span>
                            </div>
                            <ul className="list-disc ml-5 space-y-1 text-sm mt-1">
                                <li>Developed and manufactured a bike theft detection device prototype utilizing a Raspberry Pi, IMU, GPS data, cellular connectivity, and embedded camera.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* SKILLS & LEADERSHIP */}
                <section>
                    {/* Section title modified: border-b-4 border-peach pb-1 mb-4 text-green -> border-b pb-1 mb-4 */}
                    <h2 className="text-lg font-extrabold border-b pb-1 mb-4">SKILLS & LEADERSHIP</h2>
                    
                    <div className="space-y-2 text-sm">
                        <p><strong className="font-bold">Programming Languages:</strong> C, C++, Make, CMake, Python, BASH, SystemVerilog, CUDA, SQL</p>
                        <p><strong className="font-bold">Software/Tools:</strong> Linux, Git, Valgrind, GDB, Jira, Wireshark, Visual Studio, Docker, GCP, Github Actions, Xilinx Vivado</p>
                        <p><strong className="font-bold">Leadership:</strong> Running Club Elected Board (2023-2024), Eagle Scout (Troop 3 Groton, 2021)</p>
                    </div>
                </section>

            </main>
        </div>
    );
};

export default CV;