import { useState } from "react";
import { useParseDate } from "./parseDateValue.hook";
import { useParseTime } from "./parseTimeValue.hook";

export const useGetValues = () => {
  const { dateValue, toParseDate } = useParseDate();
  const { timeValue, toParseTime } = useParseTime();
  const [dateTimeValue, setDateTimeValue] = useState("");

  const onChangeDateTime = (event) => {
    setDateTimeValue(event.target.value);
  };

  const onSubmitToParse = (event) => {
    event.preventDefault();
    toParseValues(dateTimeValue);
  };

  const toParseValues = (inputValue) => {
    if (inputValue.trim() !== "") {
      const correctInput = inputValue
        .trim()
        .split(" ")
        .filter((elem) => elem !== "");

      toParseDate(...correctInput.slice(0, 3));
      toParseTime(...correctInput.slice(3, 7));
    }
    toJoinValues();
  };

  const toJoinValues = () => {
    const dateFormat = `${dateValue.day}/${dateValue.month}/${dateValue.year}`;
    const timeFormat = `${timeValue.hours}:${timeValue.minutes}:${timeValue.seconds}`;

    setDateTimeValue(`${dateFormat} ${timeFormat}`);
  };

  return {
    dateTimeValue,
    onChangeDateTime,
    onSubmitToParse,
  };
};
