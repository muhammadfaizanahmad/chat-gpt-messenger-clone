"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";
import SignInImage from "../assets/SignInLogo.png";

const Login = () => {
  return (
    <div className="bg-[#11A37F] h-screen flex flex-col items-center justify-center text-center">
      <Image src={SignInImage} alt="SignIn Logo" width={300} height={300} />
      <button onClick={() => signIn("google")} className="text-white font-bold text-3xl hover:text-gray-200">
        Sign In to use ChatGPT
      </button>
    </div>
  );
};

export default Login;
