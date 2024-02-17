import { useLayoutEffect, useState } from "react";

export default function SouvenirCard({
  image,
  description,
}: {
  image: string;
  description: Array<string>;
}) {
  const [size, setSize] = useState(0);
  useLayoutEffect(() => {
    function updateSize() {
      setSize(window.innerWidth);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div className="mb-10 rounded-lg shadow-xl">
      <div className="flex flex-col">
        <img src={`/2024/website/${image}`} />
        <ul className="ml-8 list-disc p-5 text-start">
          {description.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
