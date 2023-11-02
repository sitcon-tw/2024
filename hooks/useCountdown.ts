import { useState, useEffect } from "react";
import { useInterval } from "usehooks-ts";
export default function useCountdown() {
  const [deadline] = useState(new Date("2024-01-20T23:59:00+08:00"));
  const [days, setDays] = useState("00");
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");

  function updateCountdown() {
    let diff = (deadline.getTime() - Date.now()) / 1000;

    if (diff > 0) {
      setSeconds(("0" + Math.floor(diff % 60)).slice(-2));
      diff /= 60;
      setMinutes(("0" + Math.floor(diff % 60)).slice(-2));
      diff /= 60;
      setHours(("0" + Math.floor(diff % 24)).slice(-2));
      diff /= 24;
      setDays(("0" + Math.floor(diff)).slice(-2));
    }
  }
  useInterval(() => {
    updateCountdown();
  }, 1000);
  useEffect(() => {
    updateCountdown();
  }, []);

  return {
    days,
    hours,
    minutes,
    seconds,
  };
}
