import React from "react";
import { redirect } from "react-router-dom";

export default function TabButton(props) {
  const { text, type, redirect } = props;

  const brColor = (type) => {
    switch (type) {
      case "primary":
        return "hover:bg-[#FF6900] hover:bg-opacity-20 hover:text-[#FF6900] hover:border-[#FF6900] bg-opacity-10 border-emerald-950 border-[1px] rounded-md p-1 px-2 m-1";
      case "secondary":
        return "bg-[#FF6900] text-[#FF6900] bg-opacity-20 border-[#FF6900] hover:bg-[#FF6900] hover:bg-opacity-20 hover:text-[#FF6900] hover:border-[#FF6900] border-[1px] rounded-md p-1 px-2 m-1";
      default:
        return "hover:bg-[#FF6900] hover:bg-opacity-20 hover:text-[#FF6900] hover:border-[#FF6900] bg-opacity-10 border-emerald-950 border-[1px] rounded-md p-1 px-2 m-1";
    }
  };
  return (
    <>
      <a href={redirect}>
        <button className={`font-Inter h-8 ${brColor(type)}`}>{text}</button>
      </a>
    </>
  );
}
