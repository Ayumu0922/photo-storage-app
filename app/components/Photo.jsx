"use client";

import Image from "next/image";
import { useState } from "react";
import PhotoModal from "./PhotoModal";

export default function Photo({
  src,
  alt,
  width,
  height,
  photoName,
  isFavorited = false,
}) {
  const [showModal, setShowModal] = useState(true);
  function toggleModal() {
    setShowModal(!showModal);
  }
  return (
    <>
      <div
        className="relative shadow-md border border-white border-opacity-80 rounded-lg overflow-hidden cursor-pointer"
        style={{ width: width, height: height }}
      >
        <form action="deletePhoto" className=" absolute bottom-3 right-9 z-10">
          <input type="hidden" name="photoPath" value={src} />
          <button
            type="submit"
            className=" bg-transparent border-none text-white cursor-pointer hover:text-red-500  hover:scale-110 transition duration-300"
          ></button>
        </form>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-center"
          onClick={() => setShowModal(true)}
        />
      </div>
      {showModal && <PhotoModal src={src} alt={alt} onClose={toggleModal} />}
    </>
  );
}
