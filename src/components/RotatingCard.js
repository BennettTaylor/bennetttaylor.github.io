import React from "react";

export default function RotatingCard({ project, onClick }) {
  return (
    <div
      className="w-64 h-40 mx-auto mb-8 cursor-pointer perspective"
      onClick={onClick}
    >
      <div className="relative w-full h-full transition-transform duration-500 transform hover:rotate-y-180">
        <div className="absolute w-full h-full bg-white rounded-lg shadow-md flex flex-col justify-center items-center backface-hidden">
          <h2 className="text-xl font-bold">{project.title}</h2>
          <p className="text-gray-700">{project.description}</p>
        </div>
        <div className="absolute w-full h-full bg-blue-600 text-white rounded-lg shadow-md flex flex-col justify-center items-center rotate-y-180 backface-hidden">
          <span className="text-lg font-semibold">View Project</span>
        </div>
      </div>
      <style jsx>{`
        .perspective {
          perspective: 1000px;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
}