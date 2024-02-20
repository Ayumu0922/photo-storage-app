"use client";

import Image from "next/image";

export default function Photo({
  src,
  alt,
  width,
  height,
  photoName,
  isFavorited = false,
}) {
  return (
    <div
      className="relative shadow-md border border-white border-opacity-80 rounded-lg overflow-hidden cursor-pointer"
      style={{ width: width, height: height }}
    >
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
    </div>
  );
}
