import React from "react";
import CategorySelect from "@/components/minor/CategorySelect";
import { LargeButton } from "@/components/minor/Buttons";
import Subtract from "../../../public/icons/Subtract.svg";
import Image from "next/image";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
  { value: "vanilla", label: "Vanilla" },
  { value: "vanilla", label: "Vanilla" },
  { value: "vanilsa", label: "Vanilla" },
  { value: "vanilca", label: "Vanilla" },
  { value: "vanillxa", label: "Vanilla" },
  { value: "vanillax", label: "Vanilla" },
  { value: "vanillca", label: "Vanilla" },
  { value: "vanilla", label: "Vanilla" },
  { value: "vanilla", label: "Vanilla" },
  { value: "vanilla", label: "Vanilla" },
  { value: "vanilla", label: "Vanilla" },
  { value: "vanilla", label: "Vanilla" },
  { value: "vanilla", label: "Vanilla" },
  { value: "vanilla", label: "Vanilla" },
  { value: "vanilla", label: "Vanilla" },
];

const Search: React.FC = () => {
  return (
    <main className="min-w-full rounded-[24px] bg-gray-5 p-[65px]">
      <h1 className="mb-[16px] max-w-[70%] text-left text-black-text">
        Аренда городских пространств для мероприятий в Москве
      </h1>
      <h5 className="mb-[40px] text-left text-gray-text">
        Арендуйте помещения для ваших занятий и мероприятий. В удобном месте. В
        удобное время.
      </h5>
      <form method="post">
        <div className="mb-[65px] rounded-[18px] bg-white p-[40px]">
          <div className="mx-[40px] mb-[24px] flex justify-around gap-[20px]">
            <CategorySelect
              options={options}
              twStyles={"min-w-[100%] min-h-[60px]"}
              categoryType={"Тип мероприятия"}
              isMulti={true}
              blockStyles={"min-w-[30%] "}
            />
            <CategorySelect
              options={options}
              twStyles={"min-w-[100%] h-[60px]"}
              categoryType={"Расположение"}
              blockStyles={"min-w-[30%]"}
            />
            <CategorySelect
              options={options}
              twStyles={"min-w-[100%] h-[60px]"}
              categoryType={"Дата аренды"}
              blockStyles={"min-w-[30%]"}
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
