"use client";

import { useLayoutEffect, useState } from "react";

function useWindowWidth() {
  const [size, setSize] = useState(0);
  useLayoutEffect(() => {
    function updateSize() {
      setSize(window.innerWidth);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}

export default function EventSection({
  title,
  content,
  backgroundImage,
  backgroundPosition,
}: {
  title: React.ReactNode;
  content: Array<string>;
  backgroundImage: string;
  backgroundPosition: string;
}) {
  const width = useWindowWidth();

  const backgroundStyle = {
    backgroundImage:
      width >= 768 ? `url('/2024/website/${backgroundImage}')` : "none",
    backgroundRepeat: "no-repeat",
    backgroundPosition: `${backgroundPosition} center`,
  };

  return (
    <div className="mb-10 pb-16" style={backgroundStyle}>
      <div className="flex">
        <h1 className="text-3xl font-bold" id={title?.toString()}>
          {title}
        </h1>
        <img
          className="ml-3 w-10 md:hidden"
          src={`/2024/website/${backgroundImage}`}
        />
      </div>
      <div className="mt-9 md:ml-20">
        {content.map((line, index) => (
          <p key={index}>
            {line}
            {index !== content.length - 1 && (
              <span>
                <br />
                <br />
              </span>
            )}
          </p>
        ))}
      </div>
    </div>
  );
}
