"use client";
import Button from "@/components/website/button";
export default function TicketSection({
  name,
  description,
  button,
  url,
}: {
  name: React.ReactNode;
  description: Array<string>;
  button: string;
  url: string;
}) {
  return (
    <div className="mb-10 flex flex-row justify-around pb-16">
      <div className="flex flex-col">
        <img src="/2024/website/ticket.svg" alt="SITCON Logo" />
        <p className="text-center font-bold">{name}</p>
      </div>
      <div className="flex flex-col">
        <ul className="ml-2 list-disc">
          {description.map((line, index) => (
            <li key={index}>
              {line}
              {index !== description.length - 1 && (
                <span>
                  <br />
                  <br />
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
      <Button color="blue">{button}</Button>
    </div>
  );
}
