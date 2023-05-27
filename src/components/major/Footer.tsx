import React from "react";
import IconButton from "../minor/IconButton";
import Image from "next/image";
import vk from "../../../public/icons/VK_black.svg";
import wa from "../../../public/icons/WA.svg";
import logo from "../../../public/icons/K..svg";
import tg from "../../../public/icons/Telegram_black.svg";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="min-w-full rounded-[24px] bg-gray-5 p-[65px]">
      <section className="mb-[30px] flex justify-between">
        <div className="flex">
          <Image src={logo} alt={"pic"} />
          <div className="ml-[56px] grid grid-cols-2">
            <Link href={"/catalog"}>
              <h6>Каталог помещений</h6>
            </Link>
            <h6>Креативные кластеры</h6>
            <h6>О сервисе</h6>
            <h6>Владельцам площадок</h6>
          </div>
        </div>

        <div className="flex">
          <div className="mr-[30px]">
            <h5>+7 (999) 999 99-99</h5>
            <a href="mailto:info@sitedomen.com">
              <h6>info@sitedomen.com</h6>
            </a>
          </div>
          <div className="flex gap-[15px] rounded-[12px] bg-white px-[20px] py-[14px]">
            <IconButton href={"https://vk.ru"} img={vk} />
            <IconButton href={"https://whatsapp.com"} img={wa} />
            <IconButton href={"https://t.me.com"} img={tg} />
          </div>
        </div>
      </section>

      <div className="mb-[12px] min-w-full border" />

      <section className="flex justify-between">
        <p>© 2023 kreatochka.ru</p>
        <div className="flex gap-[16px]">
          <p>Политика конфиденциальности</p>
          <p>Публичная оферта</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
