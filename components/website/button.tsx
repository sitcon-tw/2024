"use client";
import Link from "next/link";
import { MouseEventHandler } from "react";
import { twMerge } from "tailwind-merge";

const style = {
  base: "px-6 rounded-full text-xl md:text-2xl font-bold py-3",
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
  children?: React.ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  url?: never;
};

type LinkProps = {
  children?: React.ReactNode;
  className?: string;
  onClick?: never;
  url: string;
};

type Props = (ButtonProps | LinkProps) & Style;

export default function Button({ children, color, onClick, url }: Props) {
  if (onClick)
    return (
      <ClickButton color={color} onClick={onClick}>
        {children}
      </ClickButton>
    );
  if (url)
    return (
      <LinkButton color={color} url={url}>
        {children}
      </LinkButton>
    );
  return <ClickButton color={color}>{children}</ClickButton>;
}

function ClickButton({
  children,
  onClick,
  color,
  className,
}: ButtonProps & Style) {
  return (
    <button
      onClick={onClick}
      className={twMerge(className, style.base, style.color[color])}
    >
      {children}
    </button>
  );
}

function LinkButton({ children, url, color, className }: LinkProps & Style) {
  return (
    <Link
      className={twMerge(
        className,
        style.base,
        style.color[color],
        "flex items-center justify-center",
      )}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </Link>
  );
}
