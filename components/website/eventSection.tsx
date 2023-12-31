"use client";
export default function EventSection({ title, content, backgroundImage, backgroundPosition }: { title: React.ReactNode, content: Array<string>, backgroundImage: string, backgroundPosition: string}) {
    const backgroundStyle = {
        backgroundImage: `url('/2024/website/${backgroundImage}')`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: `${backgroundPosition} center`,
    };
    return (
        <div className="pb-16 mb-10" style={backgroundStyle}>
            <h3 className="font-bold text-3xl">{title}</h3>
            <div className="ml-20 mt-9">
                {content.map((line, index) => (
                    <p key={index}>{line}{index !== content.length - 1 && <span><br/><br/></span>}</p>
                ))}
            </div>
        </div>
    );
  }
  