"use client";

import { useState } from "react";
import sessions from "@/public/sessions.json";
import SessionCard from "@/components/website/SessionCard";
import useMediaQuery from "@/hooks/use-media-query";
import { useParams } from "next/navigation";

export default function Page({ openSessionID, isOpenByDefault }: { openSessionID? : string, isOpenByDefault?: boolean}) {
    function parseTime(time: Date) {
      return time.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
    }
    const [selectedRoom, setSelectedRoom] = useState("R1");
    const { isMobile } = useMediaQuery();
    const params = useParams<{ id: string }>()
    const times = sessions.sessions
      .filter(
        (session) =>
          !isMobile ||
          session.room == selectedRoom ||
          (session.broadcast &&
            session.broadcast.some((item) => item.includes(selectedRoom))),
      )
      .map((session) => session.start)
      .map((item) => new Date(item))
      .sort()
      .map((item) => parseTime(item))
      .filter((item, index, self) => self.indexOf(item) === index);
    const rooms = sessions.rooms;
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
        <h1 className="container mb-4 text-2xl font-bold md:text-4xl" id="page-title">
          年會議程表
        </h1>
        {isMobile && (
          <div className="mb-6 flex flex-wrap justify-around text-[#B1884C]" style={{
            boxShadow: "0 4px 2px -2px #B1884C40",
          }}>
            {rooms.map((room) => (
              <button
                key={room.id}
                onClick={() => setSelectedRoom(room.id)}
                className={`border-b-2 px-4 transition font-bold ${
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
  
        <div className="grid container" style={timeTableStyle}>
          {/* rooms */}
          {rooms
            .filter(() => !isMobile)
            .map((room) => (
              <div
                key={room.id}
                style={{ gridColumn: room.id, gridRow: "room / end" }}
                className="p-3 text-center text-xl font-bold text-[#B1884C]"
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
              className={`text-[#B1884C] mr-1 md:mr-10 bg-[#F8F3E8] pr-2 md:pr-6 z-10`}
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
                zIndex: 1,
                height: 0,
              }}
            ></div>
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
  