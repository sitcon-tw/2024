"use client";
import { useState } from "react";

type Card = {
  title1: string;
  title2: string;
  content: string;
};

type CardsProps = {
  data: Card[];
};

export default function Cards({ data }: CardsProps) {
  const varients = ["pink", "purple", "green"] as const;

  // TODO: style
  return (
    <div className="grid grid-rows-3 gap-3 lg:grid-cols-3 lg:grid-rows-1 lg:gap-[14px] my-10">
      {data.map((item, index) => (
        <Card key={`${index}`} {...item} varient={varients[index % 3]} />
      ))}
    </div>
  );
}

const varients = {
  pink: {
    bg: "bg-pink",
    text: "text-pink",
    border: "border-pink",
    shadow: "shadow-[0px_4px_4px_0px_#FF349580]",
  },
  purple: {
    bg: "bg-purple",
    text: "text-purple",
    border: "border-purple",
    shadow: "shadow-[0px_4px_4px_0px_#AC24FF80]",
  },
  green: {
    bg: "bg-green",
    text: "text-green",
    border: "border-green",
    shadow: "shadow-[0px_4px_4px_0px_#0CE29580]",
  },
};

export function Card({
  title1,
  title2,
  content,
  varient,
}: Card & {
  varient: "pink" | "purple" | "green";
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* mobile */}
      <div className="min-h-[200px] relative justify-center flex md:hidden">
        <div
          className={`min-h-[200px] rounded-lg border ${varients[varient].border} ${varients[varient].shadow} px-12 py-4`}
        >
          <h1
            className={`${varients[varient].text} text-[20px] font-bold text-center`}
          >
            {title1 + title2}
          </h1>
          <p
            className={`text-[14px] mt-4 ${varients[varient].text} text-center`}
          >
            {content}
          </p>
        </div>
      </div>
      {/* tablet */}
      <div
        className="h-[200px] relative justify-center hidden md:flex lg:hidden"
        onMouseOver={() => setOpen(true)}
        onMouseOut={() => setOpen(false)}
      >
        <div
          className={`h-[200px] rounded-r-lg border ${
            varients[varient].border
          } ${
            open
              ? `w-[400px] translate-x-[100px] py-[10px] px-[40px] ${varients[varient].shadow}`
              : "w-[300px] translate-x-[24px]"
          } ${!open && varients[varient].bg} transition-all`}
        >
          <p className={`text-[14px] mt-4 ${varients[varient].text}`}>
            {content}
          </p>
        </div>
        <div
          className={`h-[200px] absolute z-10 ${
            open
              ? `${varients[varient].bg} ${varients[varient].shadow}`
              : "bg-gold"
          } ${
            open
              ? "-translate-x-[198px] w-[200px] rounded-l-lg"
              : "w-[300px] rounded-lg px-6"
          } transition-all flex justify-center items-center flex-col`}
        >
          <h1
            className={`text-white font-bold ${
              open ? "text-2xl leading-[50px]" : "text-[50px]"
            } transition-all leading-[93px]`}
          >
            {title1}
          </h1>
          <h1
            className={`text-white font-bold ${
              open ? "text-2xl leading-[50px]" : "text-[50px]"
            } transition-all leading-[93px]`}
          >
            {title2}
          </h1>
        </div>
      </div>
      {/* desktop */}
      <div
        className="h-[500px] relative justify-center hidden lg:flex overflow-y-hidden rounded-lg "
        onMouseOver={() => setOpen(true)}
        onMouseOut={() => setOpen(false)}
      >
        <div
          className={`h-[500px] w-full absolute z-0 top-0 border rounded-lg py-5 px-10 ${varients[varient].text} ${varients[varient].border} ${varients[varient].shadow} `}
        >
          <h1 className="text-2xl text-center font-bold my-4">
            {title1 + title2}
          </h1>
          {content.split("\n").map((item, index) => (
            <p className="text-[15px]" key={index}>
              {item}
            </p>
          ))}
        </div>
        <div
          className={`h-[500px] w-full p-12 rounded-lg absolute z-10 bg-gold ${
            open && "-translate-y-[500px]"
          } transition-all flex justify-center items-center shadow-[0px_4px_16px_0px_#E5C366CC] flex-col`}
        >
          <h1 className="text-white text-center font-bold text-[46px] leading-[60px] xl:hidden">
            {title1 + title2}
          </h1>
          <h1 className="text-white text-center font-bold text-[46px] leading-[60px] hidden xl:block">
            {title1}
          </h1>
          <h1 className="text-white text-center font-bold text-[46px] leading-[60px] hidden xl:block">
            {title2}
          </h1>
        </div>
      </div>
    </>
  );
}
