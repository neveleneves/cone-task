import { useState } from "react";

export const useParseDate = () => {
  //   const allMonth = [
  //     "January",
  //     "February",
  //     "March",
  //     "April",
  //     "May",
  //     "June",
  //     "July",
  //     "August",
  //     "September",
  //     "October",
  //     "November",
  //     "December",
  //   ];

  const [dateValue, setDateValue] = useState({
    day: "01",
    month: "January",
    year: "2021",
  });

  const parseDay = (day) => {
    if (+day >= 1 && +day <= 31) {
    }
    return dateValue.day;
  };

  const parseMonth = (month) => {};

  const parseYear = (year) => {};

  const toParseDate = (
    day = dateValue.day,
    month = dateValue.month,
    year = dateValue.year
  ) => {
    const parsedDayValue = parseDay(day);
  };

  return {
    dateValue,
    toParseDate,
  };
};
