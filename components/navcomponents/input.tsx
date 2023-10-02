"use client";

import { useState, useEffect } from "react";
import { GoSearch } from "react-icons/go";
import { MdKeyboardVoice } from "react-icons/md";
import Hover from "../groupcomponents/hover";
import { useRouter } from "next/navigation";
import Link from "next/link";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { GoDotFill } from "react-icons/go";

interface EventProps {
  target: {
    value: string;
  };
}
const Input = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();
  const [listening, setListening] = useState(false);
  const {
    transcript,
    listening: isListening,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  const getUserQuery = (e: React.ChangeEvent & EventProps) => {
    setQuery(e.target.value);
  };

  const userSubmitQuery = (
    e: React.KeyboardEvent<HTMLInputElement> & EventProps
  ) => {
    if (e.key === "Enter") {
      router.push(`/search/${e.target.value}`);
    }
  };

  const startListening = () => {
    SpeechRecognition.startListening({ continuous: true, language: "en-IN" });
    setListening(true);
  };

  const stopListening = () => {
    SpeechRecognition.stopListening();
    setListening(false);
    router.push(`/search/${!query ? transcript : query}`);
  };

  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  return (
    <div className="flex justify-center items-center space-x-5 w-[37rem]">
      <div className="flex justify-end items-center w-[35rem]">
        <input
          key={query}
          onChange={getUserQuery}
          onKeyUp={userSubmitQuery}
          value={!query ? transcript : query}
          autoFocus
          className="bg-[#121212] w-full outline-none p-2 pl-[1rem] pr-[4rem] text-white border rounded-full border-white border-opacity-20"
          type="text"
          placeholder="Search"
        />
        <div className="iconcontainer absolute border border-white border-opacity-20 h-10 w-14 flex justify-center items-center rounded-r-full cursor-pointer bg-[#222222]">
          <Link href={`/search/${!query ? transcript : query}`}>
            <GoSearch className="text-white text-xl" />
          </Link>
        </div>
      </div>
      {!listening ? (
        <div
          typeof="button"
          onClick={startListening}
          className="group flex flex-col justify-center items-center cursor-pointer bg-white bg-opacity-10 rounded-full p-2"
        >
          <MdKeyboardVoice className="text-white text-2xl" />
          <Hover text={"Microphone"} />
        </div>
      ) : (
        <div
          typeof="button"
          onClick={stopListening}
          className="flex group  flex-col justify-center items-center cursor-pointer bg-white bg-opacity-10 rounded-full p-3"
        >
          <GoDotFill className={"text-md text-[#D80032] animate-ping"} />
          <Hover text={"Listening"} />
        </div>
      )}
      <Hover text={"Microphone"} />
    </div>
  );
};

export default Input;
