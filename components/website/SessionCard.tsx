"use client";
import { useState } from "react";
import SessionDialog from "@/components/website/SessionDialog";
import sessions from "@/public/sessions.json";
import Button from "./button";
import useMediaQuery from "@/hooks/use-media-query";
import { IoLocation, IoTime, IoPlay } from "react-icons/io5";
import Markdown from "react-markdown";
import { twMerge } from "tailwind-merge";
export default function SessionCard({
  sessionID,
  selectedRoom,
  openSessionID,
  isOpenByDefault,
}: {
  sessionID: string;
  selectedRoom: string;
  openSessionID?: string;
  isOpenByDefault?: boolean;
}) {
  function parseTime(time: Date) {
    return time
      .toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZone: "Asia/Taipei",
      })
      .replace(/\:/g, "");
  }
  const { isMobile } = useMediaQuery();

  const rooms = [
    {
      id: "R2",
      zh: { name: "R2", description: "" },
      en: { name: "R2", description: "" },
    },
    {
      id: "R0",
      zh: { name: "R0", description: "" },
      en: { name: "R0", description: "" },
    },
    {
      id: "R1",
      zh: { name: "R1", description: "" },
      en: { name: "R1", description: "" },
    },
    {
      id: "R3",
      zh: { name: "R3", description: "" },
      en: { name: "R3", description: "" },
    },
    {
      id: "S",
      zh: { name: "S", description: "" },
      en: { name: "S", description: "" },
    },
  ];

  const session = sessions.sessions.find((x) => x.id == sessionID)!;
  const clickable = session.zh.description != "";

  const [isDialogOpen, setIsDialogOpen] = useState(openSessionID == sessionID);

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
      priorKnowledge = section.replace(/ 先備知識(\r)?\n/, "");
      description = description.replaceAll("##" + section, "");
    }
    if (section.includes("目標聽眾")) {
      targetAudience = section.replace(/ 目標聽眾(\r)?\n/, "");
      description = description.replaceAll("##" + section, "");
    }
  }

  let gridColumnString = "";

  if (isMobile) {
    gridColumnString = "R0 / end";
  } else if (broadcast != null) {
    const roomStartID: number = Math.min(
      ...session!.broadcast.map((x) => rooms.map((x) => x.id).indexOf(x)),
    );
    const roomEndID: number = Math.max(
      ...session!.broadcast.map((x) => rooms.map((x) => x.id).indexOf(x)),
    );
    const roomStart = rooms.map((x) => x.id)[roomStartID] || "time";
    const roomEnd = rooms.map((x) => x.id)[roomEndID + 1] || "end";
    gridColumnString = `${roomStart} / ${roomEnd}`;
  } else {
    gridColumnString = session!.room;
  }

  function sessionTextColor() {
    return ["Ev"].includes(session!.type) ? "text-[#B1884C]" : "text-[#385AAC]";
  }

  function sessionFontSize() {
    return ["Ev", "K", "L"].includes(session!.type) && !isMobile
      ? "text-base"
      : "text-sm";
  }

  function sessionSpeakerFontSize() {
    return ["Ev", "K", "L"].includes(session!.type) && !isMobile
      ? "text-sm"
      : "text-xs";
  }

  function sessionTextAlign() {
    return ["Ev", "K", "L"].includes(session!.type) && !isMobile
      ? "text-center"
      : "text-left";
  }

  function sessionMarginBottom() {
    return ["Ev"].includes(session!.type) ? "" : "pb-5";
  }

  function sessionTagsAlign() {
    return ["Ev", "K", "L"].includes(session!.type) && !isMobile
      ? "justify-center"
      : "justify-start";
  }

  function sessionJustify() {
    return ["Ev"].includes(session!.type) ? "justify-center" : "justify-start";
  }

  function handleSessionClick() {
    if (!clickable) return;
    history.pushState(null, "", `/2024/agenda/${session!.id}/`);
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

  const hide =
    isMobile &&
    session?.room != selectedRoom &&
    !(broadcast && broadcast.includes(selectedRoom));

  return (
    <div
      key={session!.id}
      style={{
        gridColumn: gridColumnString,
        gridRowStart: startString,
        gridRowEnd: endString,
        display: hide ? "none" : "block",
      }}
      className="flex"
    >
      <div className="flex h-full">
        <div
          onClick={handleSessionClick}
          className={twMerge(
            `mx-3 my-2 flex flex-1 flex-col justify-between rounded-lg border border-[#d0b892] bg-[#eee4d2] p-3 transition`,
            clickable && "cursor-pointer hover:bg-[#e6d8c2]",
          )}
        >
          <div
            className={`flex flex-1 flex-col gap-1 ${sessionJustify()} ${sessionMarginBottom()}`}
          >
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
      </div>

      <SessionDialog
        open={isDialogOpen}
        setOpen={setIsDialogOpen}
        isOpenByDefault={isOpenByDefault}
      >
        <div
          className="grid gap-7 text-white"
          style={
            isMobile
              ? {}
              : {
                  gridTemplateColumns: isMobile ? "1fr" : "1fr 2fr",
                  gridTemplateRows: "auto".repeat(session!.speakers.length + 1),
                }
          }
        >
          <div
            className="flex flex-col gap-3"
            style={
              !isMobile
                ? {}
                : {
                    gridColumn: "1",
                    gridRow: "2",
                  }
            }
          >
            <div className="flex aspect-video w-full flex-col items-center justify-center gap-2 rounded-xl bg-black/10">
              <IoPlay className="text-5xl" />
              <div>即將上線</div>
            </div>

            <div className="flex flex-row gap-2">
              {session.qa && (
                <Button
                  color="blue"
                  url={session.qa}
                  className="px-4 py-2 text-base md:text-base"
                >
                  即時提問
                </Button>
              )}
              {session.slide && (
                <Button
                  color="blue"
                  url={session.slide}
                  className="px-4 py-2 text-base md:text-base"
                >
                  簡報連結
                </Button>
              )}
              {session.co_write && (
                <Button
                  color="blue"
                  url={session.co_write}
                  className="px-4 py-2 text-base md:text-base"
                >
                  共筆連結
                </Button>
              )}
              {session.live && (
                <Button
                  color="blue"
                  url={session.live}
                  className="px-4 py-2 text-base md:text-base"
                >
                  直播連結
                </Button>
              )}
              {session.record && (
                <Button
                  color="blue"
                  url={session.record}
                  className="px-4 py-2 text-base md:text-base"
                >
                  議程錄影
                </Button>
              )}
            </div>
          </div>
          <div
            className="flex flex-col gap-2"
            style={
              !isMobile
                ? {}
                : {
                    gridColumn: "1",
                    gridRow: "1",
                  }
            }
          >
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
                    className="gap-2 rounded-full bg-[#F8F3E8] px-3 py-1.5 text-xs text-[#061740]"
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
                <Markdown className="prose leading-7 text-white max-md:text-sm">
                  {targetAudience}
                </Markdown>
              </div>
            ) : null}
            {priorKnowledge ? (
              <div>
                <p className="font-bold">先備知識：</p>
                <Markdown className="prose leading-7 text-white max-md:text-sm">
                  {priorKnowledge}
                </Markdown>
              </div>
            ) : null}
            <p className="font-bold">議程介紹：</p>
            <Markdown className="prose leading-7 text-white max-md:text-sm">
              {description}
            </Markdown>
          </div>
          {session!.speakers.map((speaker, idx) => (
            <div
              key={speaker}
              style={{
                gridRow: isMobile ? 3 + idx * 2 + 1 : idx + 2,
              }}
            >
              <img
                className="rounded-xl"
                src={sessions.speakers.find((x) => x.id == speaker)?.avatar}
                alt="speaker"
              />
            </div>
          ))}
          {session!.speakers.map((speaker, idx) => (
            <div
              key={speaker}
              className="flex flex-col gap-3"
              style={
                isMobile
                  ? {
                      gridRow: 3 + idx * 2,
                    }
                  : {}
              }
            >
              <div>
                <p className="text-2xl font-bold">
                  {sessions.speakers.find((x) => x.id == speaker)?.zh.name}
                </p>
                <Markdown className="prose leading-7 text-white max-md:text-sm">
                  {sessions.speakers.find((x) => x.id == speaker)?.zh.bio}
                </Markdown>
              </div>
            </div>
          ))}
        </div>
      </SessionDialog>
    </div>
  );
}
