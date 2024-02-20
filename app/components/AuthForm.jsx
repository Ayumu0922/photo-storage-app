"use client";
import React, { useState } from "react";
import PulseLoader from "react-spinners/PulseLoader";
import { supabase } from "../utils/supabaseClient";
import { useRouter } from "next/navigation";

const AuthForm = () => {
  const router = useRouter();
  const [isNewUser, setIsNewUser] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [isSigningUp, setIsSigningUp] = useState(false);

  async function handleLogin(e) {
    e.preventDefault();
    setIsSigningIn(true);
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    console.log({ error, data });
    if (!error) {
      router.push("/photos");
    } else {
      setIsSigningIn(false);
    }
  }

  async function handleSignUp(e) {
    e.preventDefault();
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (!error) {
      setIsSigningUp(true);
    }
    console.log({ data, error });
  }

  let signInMessage = "ログイン";
  if (isSigningIn) {
    signInMessage = <PulseLoader color="#5bd0f0" size={10} />;
  } else if (isNewUser) {
    signInMessage = "登録";
  }

  const signUpMessage = <p>確認用のメールを送信しました。</p>;

  return (
    <form
      onSubmit={isNewUser ? handleSignUp : handleLogin}
      className="flex flex-col bg-white rounded-lg p-8 shadow-lg backdrop-blur-sm space-y-4 glassBackgroundColor "
    >
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="メールアドレス"
        className="px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500 "
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="パスワード"
        className="px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
      >
        {signInMessage}
      </button>
      <p className="text-center text-sm text-white ">
        {isNewUser ? (
          <>
            アカウントをすでにお持ちですか？
            <button
              type="button"
              onClick={() => setIsNewUser(false)}
              className="  ml-3 text-underline "
            >
              ログイン
            </button>
          </>
        ) : (
          <>
            アカウントをお持ちではないですか？
            <button
              type="button"
              onClick={() => setIsNewUser(true)}
              className="ml-3 text-underline"
            >
              登録
            </button>
          </>
        )}
      </p>
      {isSigningUp && (
        <p className="text-center text-textGreen">{signUpMessage}</p>
      )}
    </form>
  );
};

export default AuthForm;
