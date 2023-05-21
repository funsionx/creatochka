import { IButtons } from "@/types/IButtons";
import React from "react";

const MediumButton: React.FC<IButtons> = ({ twStyles, children, onClick, type }) => {
  return (
    <button
      className={"rounded-[8px] px-[14px] py-[12px] " + twStyles}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

const LargeButton: React.FC<IButtons> = ({
  twStyles,
  children,
  onClick,
  type,
}) => {
  return (
    <button
      className={"rounded-[12px] px-[20px] py-[22px] " + twStyles}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export { MediumButton, LargeButton };
