"use client";
import React, { FormEventHandler } from "react";
import { MulCategorySelect } from "@/components/minor/CategorySelect";
import { OnlyCategorySelect } from "@/components/minor/CategorySelect";
import { LargeButton } from "@/components/minor/Buttons";
import Subtract from "../../../public/icons/Subtract.svg";
import Image from "next/image";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "pop", label: "pop" },
  { value: "popl", label: "popl" },
];

const Search: React.FC = () => {
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    // httpPost("https://rent.creatochka.cooldev.pro/api/renter/registration", {
    //   fio: fio,
    //   email: email,
    //   pass: pass,
    //   phone: phone,
    // });
    // fetch("https://rent.creatochka.cooldev.pro/api/renter/registration")
    console.log(value.value, value2.value, mulValues);
  };
  const [value, setValue] = React.useState<(typeof options)[0]>(options[0]);
  const [value2, setValue2] = React.useState<(typeof options)[0]>(options[0]);
  const [mulValues, setMulValues] = React.useState<typeof options>([]);
  return (
    <main className="min-w-full rounded-[24px] bg-gray-5 p-[65px]">
      <h1 className="mb-[16px] max-w-[70%] text-left text-black-text">
        Аренда городских пространств для мероприятий в Москве
      </h1>
      <h5 className="mb-[40px] text-left text-gray-text">
        Арендуйте помещения для ваших занятий и мероприятий. В удобном месте. В
        удобное время.
      </h5>
      <form method="post" onSubmit={handleSubmit}>
        <div className="mb-[65px] rounded-[18px] bg-white p-[40px]">
          <div className="mx-[40px] mb-[24px] flex justify-around gap-[20px]">
            <MulCategorySelect
              options={options}
              twStyles={"min-w-[100%] min-h-[60px]"}
              categoryType={"Тип мероприятия"}
              blockStyles={"min-w-[30%] "}
              valueMulState={[mulValues, setMulValues]}
              placeholder={""}
            />
            <OnlyCategorySelect
              options={options}
              twStyles={"min-w-[100%] h-[60px]"}
              categoryType={"Расположение"}
              blockStyles={"min-w-[30%]"}
              valueState={[value, setValue]}
              placeholder={""}
            />
            <OnlyCategorySelect
              options={options}
              twStyles={"min-w-[100%] h-[60px]"}
              blockStyles={"min-w-[30%]"}
              categoryType={"Дата аренды"}
              valueState={[value2, setValue2]}
              placeholder={""}
            />
          </div>
          <div className="flex justify-end gap-[20px]">
            <LargeButton
              type="button"
              twStyles="bg-blue-secondary text-blue-primary flex gap-[9px]"
            >
              <Image src={Subtract} alt={"pic"} />
              Показать на карте
            </LargeButton>
            <LargeButton type="submit" twStyles="bg-blue-primary text-white">
              Подобрать помещение
            </LargeButton>
          </div>
        </div>
      </form>
    </main>
  );
};

export default Search;
