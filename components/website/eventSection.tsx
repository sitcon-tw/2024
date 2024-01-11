"use client";

import { useLayoutEffect, useState } from "react";

function useWindowWidth() {
    const [size, setSize] = useState(0);
    useLayoutEffect(() => {
      function updateSize() {
        setSize(window.innerWidth);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
  }

export default function EventSection({ title, content, backgroundImage, backgroundPosition }: { title: React.ReactNode, content: Array<string>, backgroundImage: string, backgroundPosition: string}) {
    const width = useWindowWidth();
    
    const backgroundStyle = {
        backgroundImage: width >= 768 ? `url('/2024/website/${backgroundImage}')` : "none",
        backgroundRepeat: "no-repeat",
        backgroundPosition: `${backgroundPosition} center`,
    };

    return (
        <div className="pb-16 mb-10" style={backgroundStyle}>
            <div className="flex">
                <h3 className="font-bold text-3xl">{title}</h3>
                <img className="w-10 ml-3 md:hidden" src={`/2024/website/${backgroundImage}`} />
            </div>
            <div className="md:ml-20 mt-9">
                {content.map((line, index) => (
                    <p key={index}>{line}{index !== content.length - 1 && <span><br/><br/></span>}</p>
                ))}
            </div>
        </div>
    );
}
