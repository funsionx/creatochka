import React from "react";
import Link from "next/link";

const SuggestionLine: React.FC = () => {
  return (
    <div className="mb-[30px] flex gap-[30px] px-[65px]">
      <Link href={"/*"}>Арт-пространства</Link>
      <Link href={"/*"}>Конференц-залы</Link>
      <Link href={"/*"}>Концертные залы</Link>
      <Link href={"/*"}>Выставочные залы</Link>
      <Link href={"/*"}>Мастерские</Link>
      <Link href={"/*"}>Фотостудии</Link>
      <Link href={"/*"}>Коворкинг</Link>
    </div>
  );
};

export default SuggestionLine;
