"use client";
import httpPost from "@/components/api/HttpPost";
import { MulCategorySelect } from "@/components/minor/CategorySelect";
import CustomInput from "@/components/minor/CustomInput";
import DateInput from "@/components/minor/DateInput";
import React, { FormEventHandler, use, useState } from "react";
import { ActionMeta, InputActionMeta } from "react-select";
import Select from "react-select/dist/declarations/src/Select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "pop", label: "pop" },
  { value: "popl", label: "popl" },
];

const CatalogSearch: React.FC = () => {
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    // await httpPost(
    //   "https://rent.creatochka.cooldev.pro/api/owner/registration",
    //   data
    // );
    console.log(JSON.stringify(data))
  };
  
  const [typeOfRoom, setTypeOfRoom] = useState<typeof options>([]);
  const [date, setDate] = useState("");
  const [district, setDistrict] = useState<typeof options>([]);
  const [metro, setMetro] = useState<typeof options>([]);
  const [region, setRegion] = useState<typeof options>([]);
  const [comfort, setComfort] = useState<typeof options>([]);
  const [equipment, setEquipment] = useState<typeof options>([]);
  const [services, setServices] = useState<typeof options>([]);
  const [rules, setRules] = useState<typeof options>([]);
  const [availability, setAvailability] = useState<typeof options>([]);
  const [typeOfEvent, setTypeOfEvent] = useState<typeof options>([]);

  const [minsquare, setMinsquare] = useState("");
  const [maxsquare, setMaxsquare] = useState("");

  const [mincost, setMincost] = useState("")
  const [maxcost, setMaxcost] = useState("")

  const [minpeople, setMinpeople] = useState("");
  const [maxpeople, setMaxpeople] = useState("");

  const data = {
    typeOfRoom: typeOfRoom,
    district: district,
    metro: metro,
    date: date,

  }

  return (
    <aside className="max-w-[370px] space-y-[20px] rounded-[18px] bg-white px-[20px] py-[30px]">
      <MulCategorySelect
        options={options}
        twStyles={"rounded-[12px] hover:bg-gray-5"}
        blockStyles={""}
        categoryType={"Тип помещения"}
        valueMulState={[typeOfRoom, setTypeOfRoom]}
        isBoldCategory={true}
        placeholder={"Вcе типы"}
      />
      <MulCategorySelect
        options={options}
        twStyles={""}
        blockStyles={""}
        categoryType={"Район"}
        valueMulState={[district, setDistrict]}
        isBoldCategory={true}
        placeholder={"Все"}
      />
      <MulCategorySelect
        options={options}
        twStyles={""}
        blockStyles={""}
        categoryType={"Метро"}
        valueMulState={[metro, setMetro]}
        isBoldCategory={true}
        placeholder={"Любое"}
      />

      <DateInput valueState={[date, setDate]} />
      <h3>Время аренды часы</h3>
      <div>
        <p>Стоимость ₽/час</p>
        <div className="flex items-center">
          <CustomInput
            type={""}
            label={""}
            valueState={[mincost, setMincost]}
            trimmed={false}
            placeholder={""}
            twStyles={"w-[150px]"}
          />
          <div className="mx-[10px] h-0 w-[10px] border border-black-text" />
          <CustomInput
            type={""}
            label={""}
            valueState={[maxcost, setMaxcost]}
            trimmed={false}
            placeholder={""}
            twStyles={"w-[150px]"}
          />
        </div>
      </div>
      <div>
        <p>Площадь м²</p>
        <div className="flex items-center">
          <CustomInput
            type={""}
            label={""}
            valueState={[minsquare, setMinsquare]}
            trimmed={false}
            placeholder={""}
            twStyles={"w-[150px]"}
          />
          <div className="mx-[10px] h-0 w-[10px] border border-black-text" />
          <CustomInput
            type={""}
            label={""}
            valueState={[maxsquare, setMaxsquare]}
            trimmed={false}
            placeholder={""}
            twStyles={"w-[150px]"}
          />
        </div>
      </div>
      <div>
        <p>Вместимость человек</p>
        <div className="flex items-center">
          <CustomInput
            type={""}
            label={""}
            valueState={[minpeople, setMinpeople]}
            trimmed={false}
            placeholder={""}
            twStyles={"w-[150px]"}
          />
          <div className="mx-[10px] h-0 w-[10px] border border-black-text" />
          <CustomInput
            type={""}
            label={""}
            valueState={[maxpeople, setMaxpeople]}
            trimmed={false}
            placeholder={""}
            twStyles={"w-[150px]"}
          />
        </div>
      </div>
      <MulCategorySelect
        options={options}
        twStyles={""}
        blockStyles={""}
        categoryType={"Округ"}
        valueMulState={[region, setRegion]}
        isBoldCategory={true}
        placeholder={"Любой"}
      />
      <h3>Удалённость от метро</h3>
      <MulCategorySelect
        options={options}
        twStyles={""}
        blockStyles={""}
        categoryType={"Удобства"}
        valueMulState={[comfort, setComfort]}
        isBoldCategory={true}
        placeholder={"Любые"}
      />
      <MulCategorySelect
        options={options}
        twStyles={""}
        blockStyles={""}
        categoryType={"Оборудование"}
        valueMulState={[equipment, setEquipment]}
        isBoldCategory={true}
        placeholder={"Любое"}
      />
      <MulCategorySelect
        options={options}
        twStyles={""}
        blockStyles={""}
        categoryType={"Услуги"}
        valueMulState={[services, setServices]}
        isBoldCategory={true}
        placeholder={"Любые"}
      />
      <MulCategorySelect
        options={options}
        twStyles={""}
        blockStyles={""}
        categoryType={"Правила"}
        valueMulState={[rules, setRules]}
        isBoldCategory={true}
        placeholder={"Любые"}
      />
      <MulCategorySelect
        options={options}
        twStyles={""}
        blockStyles={""}
        categoryType={"Доступность"}
        valueMulState={[availability, setAvailability]}
        isBoldCategory={true}
        placeholder={"Любые"}
      />
      <MulCategorySelect
        options={options}
        twStyles={""}
        blockStyles={""}
        categoryType={"Тип мероприятия"}
        valueMulState={[typeOfEvent, setTypeOfEvent]}
        isBoldCategory={true}
        placeholder={"Любой"}
      />
    </aside>
  );
};

export default CatalogSearch;
