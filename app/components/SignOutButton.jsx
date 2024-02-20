import React from "react";

const SignOutButton = () => {
  return (
    <form action="/auth/signout" method="post">
      <button
        type="submit"
        className=" bg-teal-600 text-white font-bold py-2 px-4 rounded hover:bg-teal-500"
      >
        Sign Out
      </button>
    </form>
  );
};

export default SignOutButton;
