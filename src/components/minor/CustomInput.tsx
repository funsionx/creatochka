"use client";
import { ICustomInput } from "@/types/ICustomInput";
import React, {
  ChangeEvent,
  ChangeEventHandler,
  useEffect,
  useState,
} from "react";
import { FC } from "react";

const CustomInput: FC<ICustomInput> = (props) => {
  const { type, label, valueState, trimmed, placeholder, twStyles } = props;
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
    setShowLabel(!showLabel);
  };

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
        <h5>{label}</h5>
        <input
          className={
            "h-[60px] rounded-[12px] bg-gray-5 hover:border-2 focus:border-blue-primary focus:bg-white " +
            twStyles
          }
          value={value}
          type={type}
          onChange={handleChange}
          placeholder={"  " + placeholder}
          onFocus={handleFocus}
        />
      </label>
    </div>
  ) : (
    <div className="flex items-center gap-1 rounded-[12px]">
      <label htmlFor="password">
        <p>Введите пароль</p>
        <input
          className="h-[60px] rounded-[12px] bg-gray-5 hover:border-2 focus:border-blue-primary focus:bg-white "
          value={value}
          type={textType}
          onChange={handleChange}
          placeholder={"  " + "Введите пароль"}
        />
      </label>
      {showButton ? (
        <button
          onClick={unBlur}
          type="button"
          className=" text-[14px] font-normal"
        >
          Показать
        </button>
      ) : (
        <button
          onClick={blur}
          type="button"
          className=" text-[14px] font-normal"
        >
          Скрыть
        </button>
      )}
    </div>
  );
};

export default CustomInput;
