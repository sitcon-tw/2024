"use client";

import TableOfContent from "@/components/TableOfContent";
import sessions from "@/public/sessions.json";

export default function Page() {
  function parseTime(time: Date) {
    return time.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    }).replace(/\:/g, '');
  }
  const times = sessions.sessions.map(session => session.start)
    .map(item => new Date(item))
    .sort();
  const rooms = sessions.rooms;
  const timeTableStyle = {
    gridTemplateColumns: "[time] auto" + rooms.map(room => `[${room.id}] 1fr`).join(' ') + " [end] auto",
    gridTemplateRows: "[room] auto" + times.map(time => `[${parseTime(time)}] auto`).join(' ') + " [end] auto",
  };
  console.log(timeTableStyle);
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
          <div key={parseTime(time)} style={{
            gridColumn:"time",
            gridRow: parseTime(time),
            transform: "translateY(-50%)",
          }} className="text-[#B1884C] mr-5">
            {parseTime(time).replace(/(\d{2})(\d{2})/, "$1:$2")}
          </div>
        ))}
        {/* sessions */}
        {sessions.sessions.map(session => {
          const start = new Date(session.start);
          const end = new Date(session.end);
          const startString = parseTime(start);
          const endString = parseTime(end);
          const broadcast = session.broadcast;

          let gridColumnString = "";

          if (broadcast != null) {
            const roomStartID : number = Math.min(...session.broadcast.map(x => sessions.rooms.map(x => x.id).indexOf(x)));
            const roomEndID : number = Math.max(...session.broadcast.map(x => sessions.rooms.map(x => x.id).indexOf(x)));
            const roomStart = sessions.rooms.map(x => x.id)[roomStartID] || 'time';
            const roomEnd = sessions.rooms.map(x => x.id)[roomEndID + 1] || 'end';
            gridColumnString = `${roomStart} / ${roomEnd}`;
          } else {
            gridColumnString = session.room;
          }

          function sessionTextColor() {
            return ["Ev"].includes(session.type) ? "text-[#B1884C]" : "text-[#385AAC]";
          }

          function sessionFontSize() {
            return ["Ev", "K", "L"].includes(session.type) ? "text-base" : "text-sm";
          }

          function sessionSpeakerFontSize() {
            return ["Ev", "K", "L"].includes(session.type) ? "text-sm" : "text-xs";
          }

          function sessionTextAlign() {
            return ["Ev", "K", "L"].includes(session.type) ? "text-center" : "text-left";
          }

          function sessionMarginBottom() {
            return ["Ev"].includes(session.type) ? "" : "pb-5";
          }

          function sessionTagsAlign() {
            return ["Ev", "K", "L"].includes(session.type) ? "justify-center" : "justify-start";
          }

          const extraTags = [];
          extraTags.push(sessions.session_types.find(x => x.id == session.type)?.zh.name);

          if (session.type == "Ev") {
            while (extraTags.length) {
              extraTags.pop();
            }
          }

          return (
            <div key={session.id} style={{
              gridColumn: gridColumnString,
              gridRowStart: startString,
              gridRowEnd: endString
            }} className="flex">
              <div className="flex-1 flex flex-col mx-2 my-1 bg-[#B1884C26] rounded-lg p-3 border-[#B1884C80] border justify-between">
                <div className={`flex flex-col gap-1 flex-1 ${sessionMarginBottom()}`}>
                  <p className={`font-bold ${sessionTextAlign()} ${sessionTextColor()} ${sessionFontSize()}`}>{session.zh.title}</p>
                  {session.speakers.length ? <p className={`text-[#385AAC] ${sessionTextAlign()} ${sessionSpeakerFontSize()}`}>{session.speakers.map(speaker => 
                    sessions.speakers.find(x => x.id == speaker)?.zh.name
                  ).join(" / ")}</p> : null}
                </div>
                <div className={`flex gap-1 flex-wrap ${sessionTagsAlign()}`}>
                  {session.tags.map(tag => sessions.tags.find(x => x.id == tag)?.zh.name).concat(extraTags).map(tag =>
                    <span key={tag} className="p-1 text-xs bg-[#385AAC1A] text-[#061740] rounded-lg px-1">#{
                      tag
                    }</span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
