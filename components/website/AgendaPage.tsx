"use client";

import useIsApp from "@/hooks/useIsApp";
import { useState } from "react";
import sessions from "@/public/sessions.json";
import SessionCard from "@/components/website/SessionCard";
import useMediaQuery from "@/hooks/use-media-query";
import { twMerge } from "tailwind-merge";

export default function Page({
  openSessionID,
  isOpenByDefault,
}: {
  openSessionID?: string;
  isOpenByDefault?: boolean;
}) {
  const isApp = useIsApp();
  function parseTime(time: Date) {
    return time.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: "Asia/Taipei",
    });
  }
  const [selectedRoom, setSelectedRoom] = useState("R1");
  const { isMobile } = useMediaQuery();
  const times = sessions.sessions
    .filter(
      (session) =>
        !isMobile ||
        session.room == selectedRoom ||
        (session.broadcast &&
          session.broadcast.some((item) => item.includes(selectedRoom))),
    )
    .map((session) => [session.start, session.end])
    .flat(1)
    .map((item) => new Date(item))
    .sort()
    .map((item) => parseTime(item))
    .filter((item, index, self) => self.indexOf(item) === index);
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
  const timeTableStyle = {
    gridTemplateColumns:
      "[time] auto" +
      rooms.map((room) => `[${room.id}] 1fr`).join(" ") +
      " [end] auto",
    gridTemplateRows:
      "[room] auto" +
      times.map((time) => `[${time.replace(":", "")}] auto`).join(" ") +
      " [end] auto",
  };
  return (
    <div className="md:container">
      <h1
        className="container mb-4 text-2xl font-bold md:text-4xl"
        id="page-title"
      >
        年會議程表
      </h1>
      {isMobile && (
        <div
          className={twMerge(
            "sticky z-20 mb-6 flex flex-wrap justify-around bg-[#F8F3E8]/90 text-[#B1884C] backdrop-blur-lg",
            isApp ? "top-0" : "top-[80px]",
          )}
          style={{
            boxShadow: "0 4px 2px -2px #B1884C40",
          }}
        >
          {rooms.map((room) => (
            <button
              key={`mobile-${room.id}`}
              onClick={() => setSelectedRoom(room.id)}
              className={`border-b-2 px-4 font-bold transition ${
                selectedRoom == room.id
                  ? "border-[#B1884C]"
                  : "border-[#b1894c00]"
              }`}
            >
              {room.id}
            </button>
          ))}
        </div>
      )}

      <div className="container grid" style={timeTableStyle}>
        {/* empty cell in left top */}
        {!isMobile && (
          <div
            style={{
              gridColumn: "time",
              gridRow: "room",
              boxShadow: "rgba(177, 136, 76, 0.07) 0px 4px 2px -1px",
            }}
            className={twMerge(
              "sticky z-20 mb-5 border-b border-b-[#B1884C66] bg-[#f8f3e8]",
              isApp ? "top-0" : "top-[80px]",
            )}
          />
        )}
        {/* rooms */}
        {rooms
          .filter(() => !isMobile)
          .map((room) => (
            <div
              key={room.id}
              style={{
                gridColumn: room.id,
                gridRow: "room / end",
                boxShadow: "rgba(177, 136, 76, 0.07) 0px 4px 2px -1px",
              }}
              className={twMerge(
                "sticky mb-5 self-start border-b border-b-[#B1884C66] bg-[#f8f3e8] py-3 text-center text-xl font-bold text-[#B1884C]",
                isApp ? "top-0" : "top-[80px]",
              )}
            >
              {room.id}
            </div>
          ))}
        {/* times */}
        {times.map((time) => (
          <div
            key={time}
            style={{
              gridColumn: "time",
              gridRow: time.replace(":", ""),
              transform: "translateY(-50%)",
            }}
            className={`z-10 mr-1 bg-[#F8F3E8] pr-2 text-[#B1884C] md:mr-10 md:pr-6`}
          >
            {time}
          </div>
        ))}
        {/* bars */}
        {times.map((time) => (
          <div
            key={time + "bar"}
            style={{
              gridColumn: "time / end",
              gridRow: time.replace(":", ""),
              borderTop: "1px solid #B1884C66",
              height: 0,
            }}
          />
        ))}
        {/* sessions */}
        {sessions.sessions.map((session) => {
          return (
            <SessionCard
              selectedRoom={selectedRoom}
              key={session.id}
              sessionID={session.id}
              openSessionID={openSessionID}
              isOpenByDefault={isOpenByDefault}
            />
          );
        })}
      </div>
    </div>
  );
}
