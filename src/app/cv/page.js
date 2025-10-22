"use client";
import React from 'react';

const CV = () => {
    return (
        <div className="max-w-4xl mx-auto p-6 lg:p-10 shadow-2xl bg-white rounded-xl my-8 text-black tinos-400 pop-in-div">
            <main className=" space-y-8">
                <section>
                    <h2 className="text-lg font-extrabold border-b pb-1 mb-4">EDUCATION</h2>    
                    <div className="space-y-4">
                        <div>
                            <div className="flex justify-between items-start">
                                <h3 className="font-bold text-lg">Boston University, College of Engineering</h3>
                                <span className="text-sm flex-shrink-0">May 2026</span>
                            </div>
                            <p className="italic text-md">M.S. in Electrical and Computer Engineering</p>
                            <p className="text-sm">GPA: 3.74/4.00, College of Engineering Graduate Scholarship</p>
                            <p className="text-sm mt-1">Relevant Coursework: Embedded Systems, Cybersecurity, High Performance Programming, Cloud Computing</p>
                        </div>
                        <div>
                            <div className="flex justify-between items-start">
                                <h3 className="font-bold text-lg">Boston University, College of Engineering</h3>
                                <span className="text-sm flex-shrink-0">May 2025</span>
                            </div>
                            <p className="italic text-md">B.S. in Computer Engineering</p>
                            <p className="text-sm">GPA: 3.78/4.00, Cum Laude, Tau Beta Pi Engineering Honor Society</p>
                            <p className="text-sm mt-1">Relevant Coursework: Operating Systems, Signals & Systems, Networking, Deep Learning</p>
                        </div>
                    </div>
                </section>
                <section>
                    <h2 className="text-lg font-extrabold border-b pb-1 mb-4">EXPERIENCE</h2>
                    <div className="mb-6">
                        <div className="flex justify-between items-start">
                            <h3 className="font-bold text-lg">Machine Learning Teaching Assistant</h3>
                            <span className="text-sm flex-shrink-0">Jan – May 2025</span>
                        </div>
                        <p className="text-md">Boston University Dept. of Electrical and Computer Engineering | Boston, MA</p>
                        <ul className="list-disc ml-5 space-y-1 text-sm">
                            <li>Performed grading for homework assignments on a number of machine learning topics including PCA, Neural Networks, Clustering, etc.</li>
                            <li>Helped students understand homework and exam topics through office hours and Piazza</li>
                        </ul>
                    </div>
                    <div className="mb-6">
                        <div className="flex justify-between items-start">
                            <h3 className="font-bold text-lg">Computer Organization Teaching Assistant</h3>
                            <span className="text-sm flex-shrink-0">Sept – Dec 2024</span>
                        </div>
                        <p className="text-md">Boston University Dept. of Electrical and Computer Engineering | Boston, MA</p>
                        <ul className="list-disc ml-5 space-y-1 text-sm">
                            <li>Aided students in completing coursework including lab work, homework, and exam preparation.</li>
                            <li>Assisted students during computer architecture labs utilizing MIPS assembly, Verilog, and Vivado; labs ranged from writing MIPS assembly to building multistage CPU pipelines with forwarding, hazard detection, etc.</li>
                            <li>Developed grading criteria and provided detailed feedback on homework, labs, and exams in collaboration with professors.</li>
                        </ul>
                    </div>
                    <div className="mb-6">
                        <div className="flex justify-between items-start">
                            <h3 className="font-bold text-lg">Software Engineer Intern</h3>
                            <span className="text-sm flex-shrink-0">Jun – Aug 2024</span>
                        </div>
                        <p className="text-md">Progress Software | Burlington, MA</p>
                        <ul className="list-disc ml-5 space-y-1 text-sm mt-2">
                            <li>Improved the core ABL language by writing C code within the language's XML and JSON handlers and Windows IDE.</li>
                            <li>Integrated updated software libraries into the product codebase, resulting in increased security and stability.</li>
                            <li>Wrote BASH scripts to scan a 2M+ line codebase to detect unused files and functions, leading to the removal of several thousand lines of nonfunctional code.</li>
                            <li>Followed standard software development practices, including version control, agile methodologies, debugging, testing, and compliance with code style guidelines.</li>
                        </ul>
                    </div>
                    <div className="mb-6">
                        <div className="flex justify-between items-start">
                            <h3 className="font-bold text-lg">Logic Design Teaching Assistant</h3>
                            <span className="text-sm flex-shrink-0">Jan – May 2024</span>
                        </div>
                        <p className="text-md">Boston University Dept. of Electrical and Computer Engineering | Boston, MA</p>
                        <ul className="list-disc ml-5 space-y-1 text-sm">
                            <li>Aided students in completing coursework including lab work, homework, and exam preparation.</li>
                            <li>Assisted students during lab sessions in modeling chip components with Verilog on FPGAs; labs ranged from creating simple muxes to creating custom games for an Artix A7 FPGA.</li>
                            <li>Developed grading criteria and provided detailed feedback on homework, labs, and exams in collaboration with professors.</li>
                        </ul>
                    </div>
                    <div className="mb-6">
                        <div className="flex justify-between items-start">
                            <h3 className="font-bold text-lg">Electronic Circuits Lab Assistant</h3>
                            <span className="text-sm flex-shrink-0">Sept – Dec 2023</span>
                        </div>
                        <p className="text-md">Boston University Dept. of Electrical and Computer Engineering | Boston, MA</p>
                        <ul className="list-disc ml-5 space-y-1 text-sm">
                            <li>Performed grading for lab assignments.</li>
                            <li>Assisted students during lab sessions ranging from basic circuit design to heartbeat signal detection circuits.</li>
                            <li>Helped troubleshoot and debug waveform generators, oscilloscopes, and other lab equipment.</li>
                        </ul>
                    </div>
                    <div>
                        <div className="flex justify-between items-start">
                            <h3 className="font-bold text-lg">Arthroscopic Equipment R&D Intern</h3>
                            <span className="text-sm flex-shrink-0">Jun – Sep 2022</span>
                        </div>
                        <p className="text-md">Johnson & Johnson | Raynham, MA</p>
                        <ul className="list-disc ml-5 space-y-1 text-sm mt-2">
                            <li>Assisted the product development team in developing and refining a portfolio of blades, burs, and shavers for use in arthroscopic surgery.</li>
                            <li>Wrote C code and utilized Rhapsody UML to improve shaver performance by optimizing the oscillation mode waveform, leading to improved tissue resection and user perception.</li>
                            <li>Updated design control documentation including software requirements & specifications.</li>
                        </ul>
                    </div>
                </section>
                <section>
                    <h2 className="text-lg font-extrabold border-b pb-1 mb-4">PROJECTS</h2>
                    <div className="space-y-4">
                        <div className="">
                            <div className="flex justify-between items-start">
                                <h3 className="font-bold text-lg">RV32I CPU Implementation on FPGA</h3>
                                <span className="text-sm flex-shrink-0">Sept 2025 – Present</span>
                            </div>
                            <ul className="list-disc ml-5 space-y-1 text-sm mt-1">
                                <li>Working in a team of two to implement a functional 32-bit RISC-V core on a Nexys A7 FPGA with AXI and JTAG interfaces for communication and debugging.</li>
                                <li>The core uses a 5-stage pipeline built using Verilog and Xilinx Vivado design suite.</li>
                            </ul>
                        </div>
                        <div className="">
                            <div className="flex justify-between items-start">
                                <h3 className="font-bold text-lg">Sparse Matrix Multiplication Optimization in C</h3>
                                <span className="text-sm flex-shrink-0">Feb – May 2025</span>
                            </div>
                            <ul className="list-disc ml-5 space-y-1 text-sm mt-1">
                                <li>Investigated low-level sparse matrix multiplication design by implementing custom COO and CRS format matrix structures, randomized generation functions, and both serial & multithreaded multiplication functions.</li>
                                <li>Reviewed results of optimization by using advanced timing techniques and graphical analysis.</li>
                            </ul>
                        </div>
                        <div className="">
                            <div className="flex justify-between items-start">
                                <h3 className="font-bold text-lg">Bike Guard Senior Design Project</h3>
                                <span className="text-sm flex-shrink-0">Aug – May 2025</span>
                            </div>
                            <ul className="list-disc ml-5 space-y-1 text-sm mt-1">
                                <li>Developed and manufactured a bike theft detection device prototype utilizing a Raspberry Pi, IMU, GPS data, cellular connectivity, and embedded camera.</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <h2 className="text-lg font-extrabold border-b pb-1 mb-4">SKILLS & LEADERSHIP</h2>
                    
                    <div className="space-y-2 text-sm">
                        <p><strong className="font-bold">Programming Languages:</strong> C, C++, Make, CMake, Python, BASH, TCL, Verilog, CUDA, Terraform, SQL, MATLAB, Javascript, HTML, CSS, Swift, Arduino</p>
                        <p><strong className="font-bold">Software/Tools:</strong> Linux, Git, Valgrind, GDB, Jira, Wireshark, PyTorch, Visual Studio, Docker, GCP, Github Actions, Xilinx Vivado, Clearcase, Rhapsody UML, Next.js, React, Tailwindcss</p>
                        <p><strong className="font-bold">Leadership:</strong> Running Club Elected Board (2023-2024), Eagle Scout (Troop 3 Groton, 2021)</p>
                    </div>
                </section>

            </main>
        </div>
    );
};

export default CV;