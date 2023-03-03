/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";
import Logo from "../assets/Logo.jpg";

import {
  BoltIcon,
  ExclamationCircleIcon,
  SunIcon,
} from "@heroicons/react/24/outline";

const Page = () => {
  return (
    <div className="bg-[#343541] grid grid-cols-1 place-items-center text-white px-2 h-full md:h-screen">
      <h1 className="text-3xl md:text-5xl font-bold mt-20">ChatGPT</h1>
      <div className="grid grid-cols-1 place-items-center md:grid-cols-3 space-x-2">
        <div>
          <div className="grid grid-cols-1 place-items-center my-5">
            <SunIcon className="h-8 w-8" />
            <h2>Examples</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">
              "Explaing quantum compunting in simple terms"
            </p>
            <p className="infoText">
              "Got any creative ideas for a 10 year old's birthday?"
            </p>
            <p className="infoText">
              "How do I make an HTTP request in JavaScript?"
            </p>
          </div>
        </div>

        <div>
          <div className="grid grid-cols-1 place-items-center my-5">
            <BoltIcon className="h-8 w-8" />
            <h2>Capablities</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">
              Remeber what user said earlier in the conversation
            </p>
            <p className="infoText">
              Allow us to provide follow-up corrections
            </p>
            <p className="infoText">
              Trained to decline inappropriate requests
            </p>
          </div>
        </div>

        <div>
          <div className="grid grid-cols-1 place-items-center my-5">
            <ExclamationCircleIcon className="h-8 w-8" />
            <h2>Limitations</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">
              May ocassionally generate incorrect information
            </p>
            <p className="infoText">
              May occasionally produce harmful instructions or biased content
            </p>
            <p className="infoText">
              Limited knowledge of world and events after 2021
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center m-4 md:m-0">
        <Image src={Logo} alt="Logo Image" className="rounded-full h-10 w-10 mr-2 " />
        <p className="text-xs">Developed and Maintained by JavaScript Space | Faizan</p>
      </div>
    </div>
  );
};

export default Page;
