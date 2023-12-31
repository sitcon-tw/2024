"use client";
import Link from "next/link";
import { MouseEventHandler } from "react";
import { twMerge } from "tailwind-merge";

const style = {
  base: "px-6 rounded-full text-2xl font-bold h-[60px]",
  color: {
    yellow:
      "bg-[#FFCA73] text-[#462002] shadow-[0px_5px_8px_0px_#FFBA474D] hover:bg-[#e3b364] active:bg-[#cca15a]",
    blue: "bg-[#385AAC] text-[#F8F3E8] shadow-[0px_6px_6px_0px_#5D7DDB4D] hover:bg-[#304e96] active:bg-[#263d75]",
  },
};

type Style = {
  [key in keyof Omit<typeof style, "base">]: keyof (typeof style)[key];
};

type ButtonProps = {
  text: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  url?: never;
};

type LinkProps = {
  text: string;
  className?: string;
  onClick?: never;
  url: string;
};

type Props = (ButtonProps | LinkProps) & Style;

export default function Button({ text, color, onClick, url }: Props) {
  if (onClick)
    return <ClickButton text={text} color={color} onClick={onClick} />;
  if (url) return <LinkButton text={text} color={color} url={url} />;
  return <ClickButton text={text} color={color} />;
}

function ClickButton({ text, onClick, color, className }: ButtonProps & Style) {
  return (
    <button
      onClick={onClick}
      className={twMerge(className, style.base, style.color[color])}
    >
      {text}
    </button>
  );
}

function LinkButton({ text, url, color, className }: LinkProps & Style) {
  return (
    <div
      className={twMerge(
        className,
        style.base,
        style.color[color],
        "flex items-center justify-center",
      )}
    >
      <Link href={url} target="_blank" rel="noopener noreferrer">
        {text}
      </Link>
    </div>
  );
}
