import Image from "next/image";
import AuthForm from "./components/AuthForm";

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen relative">
      <video
        src="/background_movie.mp4"
        type="video/mp4"
        autoPlay
        loop
        muted
        className="absolute min-w-full min-h-full object-cover"
      ></video>
      <div className="absolute z-10 w-full h-full bg-black opacity-20"></div>
      <div className=" z-20  w-full h-full max-w-xl">
        <AuthForm />
      </div>
      <h2 className=" flex flex-col justify-center items-center z-20 text-white text-5xl font-bold  text-center mb-4 absolute top-1/4">
        Photo Storage App
        <p className="  text-lg text-center text-white mt-9 ">
          お気に入りの写真を登録して自分だけのアルバムを作成しよう
        </p>
      </h2>
    </main>
  );
}
