import { useState } from "react";

export const useParseTime = () => {
  const [timeValue, setTimeValue] = useState({
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const toParseTime = (
    hours = timeValue.hours,
    minutes = timeValue.minutes,
    seconds = timeValue.seconds
  ) => {
    console.log(hours, minutes, seconds);
  };

  return {
    timeValue,
    toParseTime,
  };
};
