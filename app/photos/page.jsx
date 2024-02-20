import Image from "next/image";
import SignOutButton from "../components/SignOutButton";
import PhotoUploader from "../components/PhotoUploader";
import PhotoGrid from "../components/PhotoGrid";

export default function Photos() {
  return (
    <main className="min-h-screen text-white relative overflow-hidden ">
      {/* 背景画像 */}
      <div className="absolute min-w-full min-h-full">
        <Image
          src="/background_image.jpg" // パスをルートからのものに変更
          layout="fill" // レイアウトを fill に設定
          objectFit="cover" // bg-cover の代わり
          objectPosition="center" // bg-center の代わり
          alt="Background" // alt属性を追加
        />
      </div>
      {/* 黒の透明レイヤー */}
      <div className="absolute min-w-full min-h-full bg-black opacity-50"></div>
      <div className="absolute min-w-full min-h-full backdrop-blur-sm"></div>

      {/* コンテンツコンテナ */}
      <div className="container mx-auto px-4 py-4 relative z-10">
        <div className="flex flex-col items-center mb-6">
          <h1 className="text-4xl font-bold mb-5">写真</h1>
          <PhotoUploader />
        </div>
        <PhotoGrid />
      </div>

      {/* サインアウトボタン */}
      <div className="absolute top-4 right-4 z-10">
        <SignOutButton />
      </div>
    </main>
  );
}
