import React from "react";
import CategorySelect from "@/components/minor/Select/CategorySelect";

type Props = {};
const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const Search: React.FC = (props: Props) => {
  return (
    <main className="min-w-full rounded-[24px] bg-gray-500 p-[65px]">
      <h1 className="mb-[16px] text-center">
        Аренда городских пространств для мероприятий в Москве
      </h1>
      <h6 className="mb-[40px] text-center">
        Арендуйте помещения для ваших занятий и мероприятий. В удобном месте. В
        удобное время.
      </h6>
      <form method="post">
        <div className="mb-[65px] rounded-[18px] bg-white p-[40px]">
          <div className="mx-[40px] mb-[24px] flex justify-around gap-[20px]">
            <CategorySelect
              options={options}
              twStyle={"w-[360px] h-[60px]"}
              categoryType={"Тип мероприятия"}
            />
            <CategorySelect
              options={options}
              twStyle={"w-[360px] h-[60px]"}
              categoryType={"Расположение"}
            />
            <CategorySelect
              options={options}
              twStyle={"w-[360px] h-[60px]"}
              categoryType={"Дата аренды"}
            />
          </div>
          <div className="flex justify-end gap-[20px]">
            <button>Показать на карте</button>
            <button type="submit">Подобрать помещение</button>
          </div>
        </div>
      </form>
    </main>
  );
};

export default Search;
