import Image from "next/image";
import AuthForm from "./components/AuthForm";

export default function Home() {
  return (
    <main className=" flex items-center justify-center min-h-screen relative">
      <video
        src="/background_movie.mp4"
        type="video/mp4"
        autoPlay
        loop
        muted
        className="absolute w-auto min-w-full min-h-full max-w-none"
      ></video>
      <div className="absolute z-10 w-full h-full bg-black opacity-20"></div>
      <div className=" z-20 absolute 0 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className=" text-white text-3xl font-bold  text-center mb-4">
          Photo Storage App
        </h2>
        <p className=" text-lg text-center text-white mb-3">
          お気に入りの写真を登録して自分だけのアルバムを作成しよう
        </p>
        <AuthForm />
      </div>
    </main>
  );
}
