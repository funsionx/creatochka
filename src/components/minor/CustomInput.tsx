"use client";
import { ICustomInput } from "@/types/ICustomInput";
import React, {
  ChangeEvent,
  ChangeEventHandler,
  useEffect,
  useState,
} from "react";
import { FC } from "react";

//init state - setIsBlurred(false) + setIsClicked(false) + textType("password")
//onClick - setIsBlurred(true) + setIsClicked(true) + textType("text")

const CustomInput: FC<ICustomInput> = (props) => {
  const { type, label, valueState, trimmed, placeholder } = props;
  //eslint-disable-next-line react-hooks/rules-of-hooks
  const [initValue, handleValueChange] = valueState || useState("");

  const [textType, setTextType] = useState("");
  const [showButton, setShowButton] = useState(false);
  const [showLabel, setShowLabel] = useState(false);

  const value = trimmed ? initValue.trim() : initValue;

  const handleChange: ChangeEventHandler<HTMLInputElement> = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    handleValueChange(e.target.value);
  };

  const handleFocus = () => {
    setShowLabel(!showLabel)
  }

  const blur = () => {
    setShowButton(true);
    setTextType("password");
  };

  const unBlur = () => {
    setShowButton(false);
    setTextType("text");
  };

  useEffect(() => {
    setTextType("password");
    setShowButton(true);
  }, []);

  return type !== "password" ? (
    <div className="max-w-fit">
      <label htmlFor={label} className="flex flex-col">
        {showLabel ? <p>{label}</p> : null}
        <input
          className="bg-red-500"
          value={value}
          type={type}
          onChange={handleChange}
          placeholder={placeholder}
          onFocus={handleFocus}
        />
      </label>
    </div>
  ) : (
    <div className="flex border border-blue-300">
      <label htmlFor="password">
        <p>Введите пароль</p>
        <input
          className="bg-red-500"
          value={value}
          type={textType}
          onChange={handleChange}
        />
      </label>
      {showButton ? (
        <button onClick={unBlur} type="button">
          Показать
        </button>
      ) : (
        <button onClick={blur} type="button">
          Скрыть
        </button>
      )}
    </div>
  );
};

export default CustomInput;