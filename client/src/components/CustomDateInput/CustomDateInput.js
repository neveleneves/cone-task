import React from "react";
import { useGetValues } from "../../hooks/getDateTimeValues.hook";

import s from "./CustomDateInput.module.scss";

export const CustomDateInput = () => {
  const { dateTimeValue, onChangeDateTime, onSubmitToParse } = useGetValues();

  return (
    <section className={`${s.content} ${s.content__wrapper}`}>
      <div className={s.content__body}>
        <h1 className={s.content__title}>Custom Date Input</h1>
        <form onSubmit={onSubmitToParse} className={s.content__form}>
          <input
            name="dateTime"
            onChange={onChangeDateTime}
            value={dateTimeValue}
            placeholder="Введите данные"
            type="text"
            className={s.content__input}
          ></input>
        </form>
      </div>
    </section>
  );
};
