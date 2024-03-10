import Button from "@/components/website/button";
import posterData from "./posterData";
import Markdown from "react-markdown";
import { twMerge } from "tailwind-merge";
import { IoCloudDownload } from "react-icons/io5";
export default function Page() {
  return (
    <div className="container">
      <div className="mb-4 text-2xl font-bold md:text-4xl" id="page-title">
        靜態海報展
      </div>
      <div className="flex flex-col gap-4 md:gap-8">
        {posterData.map((poster, index) => (
          <div
            className="relative scroll-m-[100px] items-center overflow-hidden rounded-2xl bg-white p-4 shadow-md"
            key={index}
            id={`poster-${index}`}
          >
            <div className="flex flex-col lg:flex-row">
              <div className="w-full shrink-0 lg:w-[400px]">
                <img
                  src={`/2024/poster/${poster.image}`}
                  alt={poster.title}
                  className="aspect-[1/1.414] w-full rounded-xl"
                />
              </div>

              <div className="flex flex-col rounded-xl max-lg:py-2 lg:px-4">
                <div className="text-xl font-bold text-[#385aac] lg:text-2xl">
                  {poster.title}
                </div>
                <Markdown className="porse mt-1 break-all max-lg:text-sm">
                  {poster.description}
                </Markdown>
                <div className="my-4 h-[2px] rounded-full bg-current opacity-5" />
                <div className="flex items-center gap-2 text-lg">
                  <div className="flex shrink-0" style={{ gap: "-8px" }}>
                    {poster.avatars.map((avatar, index) => (
                      <img
                        key={index}
                        src={`/2024/poster/${avatar}`}
                        alt={poster.title}
                        className={twMerge(
                          index !== 0 && "-ml-1",
                          "h-8 w-8 rounded-full border border-white object-cover shadow-sm",
                        )}
                      />
                    ))}
                  </div>
                  {poster.author}
                </div>
                <Markdown className="porse mt-1 break-all max-lg:text-sm">
                  {poster.authorDescription}
                </Markdown>
                <div className="my-4 flex-1" />
                <div className="flex justify-end gap-4">
                  <a
                    href={`https://sitcon.org/2024/poster/${poster.file}`}
                    className="flex items-center justify-center gap-2 break-keep rounded-full bg-[#385AAC] p-4 py-1.5 text-xl font-bold text-[#F8F3E8] shadow-[0px_6px_6px_0px_#5D7DDB4D] hover:bg-[#304e96] active:bg-[#263d75] md:text-lg"
                    download={poster.file}
                  >
                    <IoCloudDownload />
                    下載海報
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
