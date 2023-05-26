import { IDateInput } from "@/types/IDateInput";
import React, { ChangeEventHandler, useState } from "react";

const DateInput: React.FC<IDateInput> = (props) => {
  const { valueState } = props;
  //eslint-disable-next-line react-hooks/rules-of-hooks
  const [value, handleValueChange] = valueState || useState();
  const date = new Date();
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    handleValueChange(e.target.value);
  };
  const currentMonth = (): string => {
    const actualMonth = date.getMonth() + 1;
    if (actualMonth.toString().length === 2) {
      return actualMonth.toString();
    } else {
      return "0" + actualMonth.toString();
    }
  };

  const currentDay = (): string => {
    if (date.getDate().toString().length === 2) {
      return date.getDate().toString();
    } else {
      return "0" + date.getDate().toString();
    }
  };

  const currentDate =
    date.getFullYear() + "-" + currentMonth() + "-" + currentDay();
  return (
    <div>
      <p>Выберите дату доставки</p>
      <input
        type="date"
        lang="ru"
        defaultValue={currentDate}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default DateInput;
