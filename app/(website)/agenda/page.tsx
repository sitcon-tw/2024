"use client";

import { useState } from "react";
import sessions from "@/public/sessions.json";
import SessionCard from "@/components/website/SessionCard";

export default function Page() {
  function parseTime(time: Date) {
    return time.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    });
  }
  const times = sessions.sessions.map(session => session.start)
    .map(item => new Date(item))
    .sort()
    .map(item => parseTime(item))
    .filter((item, index, self) => self.indexOf(item) === index);
  const rooms = sessions.rooms;
  const timeTableStyle = {
    gridTemplateColumns: "[time] auto" + rooms.map(room => `[${room.id}] 1fr`).join(' ') + " [end] auto",
    gridTemplateRows: "[room] auto" + times.map(time => `[${time.replace(":", "")}] auto`).join(' ') + " [end] auto",
  };
  return (
    <div className="container">
      <h1 className="mb-4 text-2xl font-bold md:text-4xl" id="page-title">
        年會議程表
      </h1>
      <div className="grid" style={timeTableStyle}>
        {/* rooms */}
        {rooms.map(room => (
          <div key={room.id} style={{gridColumn: room.id, gridRow: "room / end"}} className="text-center font-bold text-[#B1884C] text-xl p-3">
            {room.id}
          </div>
        ))}
        {/* times */}
        {times.map(time => (
          <div key={time} style={{
            gridColumn:"time",
            gridRow: time.replace(":", ""),
            transform: "translateY(-50%)",
          }} className="text-[#B1884C] mr-5">
            {time}
          </div>
        ))}
        {/* sessions */}
        {sessions.sessions.map(session => {
          return (
            <SessionCard
              key={session.id}
              id={session.id}
            />
          )
        })}
      </div>
    </div>
  );
}
