"use client";
import React from "react";

import Image from "next/image";
import Link from "next/link";

import heart from "../../../public/icons/Heart.svg";
import msg from "../../../public/icons/Message circle.svg";
import loc from "../../../public/icons/Location.svg";
import { useRouter } from "next/navigation";
import { MediumButton } from "@/components/minor/Buttons";
import AuthPopup from "../minor/AuthPopup";

const Header: React.FC = () => {
  const router = useRouter();
  return (
    <header className="m-auto mb-7 flex max-w-[1300px] justify-between px-[65px]">
      <nav className="flex items-center gap-5">
        <Link href={"/"}>
          <h2 className="text-blue-primary">КРЕАТОЧКА</h2>
        </Link>
        <Link
          href={"/location"}
          className="bg-gray-temp flex rounded-[24px] px-[14px] py-[10px]"
        >
          <Image src={loc} alt={"pic"} width={20} />
          <h6 className="ml-[8px]">Москва</h6>
        </Link>
        <Link href={"/catalog"}>Найти помещение</Link>
        <Link href={"/location"}>О сервисе</Link>
        <Link href={"/location"}>Статьи</Link>
      </nav>
      <nav className="flex items-center gap-5">
        <Image src={heart} alt={"like button"} />
        <Image src={msg} alt={"message circle"} />
        <MediumButton twStyles="text-white bg-green-secondary">
          Добавить площадку
        </MediumButton>

        <AuthPopup
          button={
            <MediumButton twStyles="text-blue-primary bg-blue-secondary">
              Войти
            </MediumButton>
          }
        />
      </nav>
    </header>
  );
};

export default Header;
