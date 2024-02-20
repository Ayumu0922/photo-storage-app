"use client";
import { useState } from "react";
import { supabase } from "../utils/supabaseClient";
import Error from "next/error";
import { ClipLoader } from "react-spinners";
import { useRouter } from "next/navigation";

export default function PhotoUploader() {
  const [uploading, setUploading] = useState(false);
  const router = useRouter();
  // 認証済みのuserならファイルのアップロード許可
  async function handleFileUpload(event) {
    try {
      setUploading(true);

      const file = event.target.files[0];
      const fileExt = file.name.split(".").pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) {
        throw new Error("User not authenticated for photo upload");
      }

      const filePath = `user_uploads/${user.id}/${fileName}`;
      const { error } = await supabase.storage
        .from("photos")
        .upload(filePath, file);

      if (error) {
        throw error;
      }
      // 画像をアップロードした後、その画像を含むページが次回アクセスされたときに最新の状態photos pageを再生成するようにする
      await fetch("/api/revalidate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ path: "/photos" }),
      });

      router.refresh();
    } catch (err) {
      console.error(err);
    } finally {
      setUploading(false);
    }
  }

  return (
    <label
      htmlFor="photo-upload"
      className="cursor-pointer bg-teal-600 hover:bg-teal-500 text-white font-bold py-2 px-4 rounded-lg m-4 flex justify-center items-center"
      style={{ width: "120px", height: "40px" }} // ボタンの幅と高さを固定
    >
      {uploading ? <ClipLoader color="#36d7b7" size={25} /> : "追加する"}
      <input
        type="file"
        id="photo-upload"
        onChange={handleFileUpload}
        disabled={uploading}
        className="hidden"
      />
    </label>
  );
}
