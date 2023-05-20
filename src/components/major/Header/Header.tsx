'use client'
import React from "react";

import Image from "next/image";
import Link from "next/link";

import heart from "../../../../public/icons/Heart.svg";
import msg from "../../../../public/icons/Message circle.svg";
import loc from "../../../../public/icons/Location.svg";
import { useRouter } from "next/navigation";

const Header: React.FC = () => {
  const router = useRouter();
  return (
    <header className="m-auto mb-7 flex max-w-[1300px] justify-between px-[65px]">
      <nav className="flex items-center gap-5">
        <Link href={"/"}>
          <h1>КРЕАТОЧКА TECT</h1>
        </Link>
        <Link href={"/location"} className="flex">
          <Image src={loc} alt={""} />
          Москва
        </Link>
        <Link href={"/location"}>Найти помещение</Link>
        <Link href={"/location"}>О сервисе</Link>
        <Link href={"/location"}>Статьи</Link>
      </nav>
      <nav className="flex items-center gap-5">
        <Image src={heart} alt={"like button"} />
        <Image src={msg} alt={"message circle"} />
        <button>Добавить площадку</button>
        <button onClick={() => router.push("/auth")}>Войти</button>
      </nav>
    </header>
  );
};

export default Header;
