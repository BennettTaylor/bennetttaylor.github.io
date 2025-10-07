"use client";
import { useState } from "react";

const filmImages = Array.from({ length: 17 }, (_, i) => `/art/film${i + 1}.jpg`);
const digitalImages = Array.from({ length: 9 }, (_, i) => `/art/digital${i + 1}.jpg`);
const photoImages = Array.from({ length: 28 }, (_, i) => `/art/photo${i + 1}.jpg`);
const artSections = [
  { key: "painting", title: "Painting", images: ["/art/painting1.jpg", "/art/painting2.jpg"] },
  { key: "digital-art", title: "Digital Art", images: digitalImages },
  { key: "film-photo", title: "Film Photography", images: filmImages },
  { key: "digital-photo", title: "Digital Photography", images: photoImages },
];

export default function Art() {
  const [modalImg, setModalImg] = useState(null);

  return (
    <section className="p-10">
    <div className="space-y-12">
        {artSections.map(section => (
        <div key={section.key}>
            <h2 className="text-center chicle-regular text-3xl font-semibold mb-4">{section.title}</h2>
            <div className="flex items-center justify-center flex-wrap gap-6">
            {section.images.map((src, idx) => (
                <div
                key={src}
                className="bg-white shadow-xl rounded-lg"
                style={{ border: "8px solid #FFFFFF" }}
                >
                <img
                    src={src}
                    alt={`${section.title} ${idx + 1}`}
                    className="max-w-xs max-h-80 object-contain cursor-pointer"
                    onClick={() => setModalImg(src)}
                />
                </div>
            ))}
            </div>
        </div>
        ))}
    </div>
    {modalImg && (
        <div
        className="fixed inset-0 backdrop-blur-md flex items-center justify-center z-50"
        onClick={() => setModalImg(null)}
        >
        <img
            src={modalImg}
            alt="Full size art"
            className="max-w-3xl max-h-[90vh] rounded-lg border-8 border-white shadow-2xl"
        />
        </div>
    )}
    </section>
  );
}