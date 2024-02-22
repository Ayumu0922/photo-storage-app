"use client";

import Image from "next/image";

export default function PhotoModal({ src, alt, onClose }) {
  if (!src) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 animation-fadeIn">
      <div className="bg-gray-800 p-4 rounded-lg relative border border-gray-600">
        <button
          onClick={onClose}
          className="text-gray-300 hover:text-white mb-2"
        >
          閉じる
        </button>
        <div className="relative w-[80vw] h-[80vh]">
          <Image
            src={src}
            alt={alt}
            fill
            className="rounded-lg object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
}
