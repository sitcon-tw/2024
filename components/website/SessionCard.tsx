"use client";
import { useState } from "react";
import SessionDialog from "@/components/website/SessionDialog";
import sessions from "@/public/sessions.json";
import Button from "./button";
import { IoLocation, IoTime } from "react-icons/io5";
import Markdown from "react-markdown";
export default function SessionCard({ id }: { id: string }) {
  function parseTime(time: Date) {
    return time
      .toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      })
      .replace(/\:/g, "");
  }

  const session = sessions.sessions.find((x) => x.id == id);

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const start = new Date(session!.start);
  const end = new Date(session!.end);
  const startString = parseTime(start);
  const endString = parseTime(end);
  const broadcast = session!.broadcast;

  let description = session!.zh.description;
  const sections = description.split("##");

  let priorKnowledge = "";
  let targetAudience = "";

  for (const section of sections) {
    if (section.includes("先備知識")) {
      priorKnowledge = section.replaceAll(" 先備知識\n", "");
      description = description.replaceAll("##" + section, "");
    }
    if (section.includes("目標聽眾")) {
      targetAudience = section.replaceAll(" 目標聽眾\n", "");
      description = description.replaceAll("##" + section, "");
    }
  }

  let gridColumnString = "";

  if (broadcast != null) {
    const roomStartID: number = Math.min(
      ...session!.broadcast.map((x) =>
        sessions.rooms.map((x) => x.id).indexOf(x),
      ),
    );
    const roomEndID: number = Math.max(
      ...session!.broadcast.map((x) =>
        sessions.rooms.map((x) => x.id).indexOf(x),
      ),
    );
    const roomStart = sessions.rooms.map((x) => x.id)[roomStartID] || "time";
    const roomEnd = sessions.rooms.map((x) => x.id)[roomEndID + 1] || "end";
    gridColumnString = `${roomStart} / ${roomEnd}`;
  } else {
    gridColumnString = session!.room;
  }

  function sessionTextColor() {
    return ["Ev"].includes(session!.type) ? "text-[#B1884C]" : "text-[#385AAC]";
  }

  function sessionFontSize() {
    return ["Ev", "K", "L"].includes(session!.type) ? "text-base" : "text-sm";
  }

  function sessionSpeakerFontSize() {
    return ["Ev", "K", "L"].includes(session!.type) ? "text-sm" : "text-xs";
  }

  function sessionTextAlign() {
    return ["Ev", "K", "L"].includes(session!.type)
      ? "text-center"
      : "text-left";
  }

  function sessionMarginBottom() {
    return ["Ev"].includes(session!.type) ? "" : "pb-5";
  }

  function sessionTagsAlign() {
    return ["Ev", "K", "L"].includes(session!.type)
      ? "justify-center"
      : "justify-start";
  }

  function hoverEffect() {
    return ["Ev"].includes(session!.type)
      ? ""
      : "hover:bg-[#b1894c44] cursor-pointer";
  }

  function handleSessionClick() {
    if (["Ev"].includes(session!.type)) return;
    setIsDialogOpen(true);
  }

  const extraTags = [];
  extraTags.push(
    sessions.session_types.find((x) => x.id == session!.type)?.zh.name,
  );

  if (session!.type == "Ev") {
    while (extraTags.length) {
      extraTags.pop();
    }
  }

  return (
    <div
      key={session!.id}
      style={{
        gridColumn: gridColumnString,
        gridRowStart: startString,
        gridRowEnd: endString,
      }}
      className="flex"
    >
      <div
        onClick={handleSessionClick}
        className={`mx-3 my-2 flex flex-1 flex-col bg-[#B1884C26] ${hoverEffect()} justify-between rounded-lg border border-[#B1884C80] p-3 transition`}
      >
        <div className={`flex flex-1 flex-col gap-1 ${sessionMarginBottom()}`}>
          <p
            className={`font-bold ${sessionTextAlign()} ${sessionTextColor()} ${sessionFontSize()}`}
          >
            {session!.zh.title}
          </p>
          {session!.speakers.length ? (
            <p
              className={`text-[#385AAC] ${sessionTextAlign()} ${sessionSpeakerFontSize()}`}
            >
              {session!.speakers
                .map(
                  (speaker) =>
                    sessions.speakers.find((x) => x.id == speaker)?.zh.name,
                )
                .join(" / ")}
            </p>
          ) : null}
        </div>
        <div className={`flex flex-wrap gap-1 ${sessionTagsAlign()}`}>
          {session!.tags
            .map((tag) => sessions.tags.find((x) => x.id == tag)?.zh.name)
            .concat(extraTags)
            .map((tag) => (
              <span
                key={tag}
                className="rounded-lg bg-[#385AAC1A] p-1 px-1 text-xs text-[#061740]"
              >
                #{tag}
              </span>
            ))}
        </div>
      </div>
      <SessionDialog open={isDialogOpen} setOpen={setIsDialogOpen}>
        <div
          className="grid gap-7 text-white"
          style={{
            gridTemplateColumns: "1fr 2fr",
            gridTemplateRows: "auto".repeat(session!.speakers.length + 1),
          }}
        >
          <div className="flex flex-col gap-3">
            <img src="/2024/website/empty.png" alt="video" />
            <div className="flex flex-row gap-2">
              <Button
                color="blue"
                url="https://www.google.com"
                className="text-base md:text-base px-4 py-2"
              >
                即時提問
              </Button>
              <Button
                color="blue"
                url="https://www.google.com"
                className="text-base md:text-base px-4 py-2"
              >
                簡報連結
              </Button>
              <Button
                color="blue"
                url="https://www.google.com"
                className="text-base md:text-base px-4 py-2"
              >
                共筆連結
              </Button>
            </div>
          </div>
          <div>
            <div className="flex gap-3">
              <p className="text-xl font-bold">
                {
                  sessions.session_types.find((x) => x.id == session!.type)?.zh
                    .name
                }
              </p>
              <div className="flex gap-2">
                {session!.tags.map((tag) => (
                  <span
                    key={tag}
                    className="gap-2 rounded-full bg-[#F8F3E8] px-3 py-[0.4rem] text-xs text-[#061740]"
                  >
                    #{sessions.tags.find((x) => x.id == tag)?.zh.name}
                  </span>
                ))}
              </div>
            </div>
            <p className="text-2xl font-bold">{session?.zh.title}</p>
            <div className="flex gap-5">
              <div className="flex items-center gap-2 font-bold">
                <IoTime className="text-2xl" />
                <p>
                  {startString.replace(/(\d{2})(\d{2})/, "$1:$2")} -{" "}
                  {endString.replace(/(\d{2})(\d{2})/, "$1:$2")}
                </p>
              </div>
              <div className="flex items-center gap-2 font-bold">
                <IoLocation className="text-2xl" />
                <p>{session!.room}</p>
              </div>
            </div>
            {targetAudience ? (
              <div>
                <p className="font-bold">目標受眾：</p>
                <Markdown className="max-md:text-sm">{targetAudience}</Markdown>
              </div>
            ) : null}
            {priorKnowledge ? (
              <div>
                <p className="font-bold">先備知識：</p>
                <Markdown className="max-md:text-sm">{priorKnowledge}</Markdown>
              </div>
            ) : null}
            <p className="font-bold">議程介紹：</p>
            <Markdown className="max-md:text-sm">{description}</Markdown>
          </div>
          {
            session!.speakers.map((speaker, idx) => (
              <div key={speaker} style={{
                gridRow: idx + 2,
              }}>
                  <img className="rounded-xl" src={sessions.speakers.find(x => x.id == speaker)?.avatar} alt="speaker" />
              </div>
            ))
          }
          {
            session!.speakers.map((speaker) => (
              <div key={speaker} className="flex flex-col gap-3">
                <div>
                  <p className="text-2xl font-bold">
                    {sessions.speakers.find((x) => x.id == speaker)?.zh.name}
                  </p>
                  <Markdown>{sessions.speakers.find((x) => x.id == speaker)?.zh.bio}</Markdown>
                </div>
              </div>
            ))
          }
        </div>
      </SessionDialog>
    </div>
  );
}
