"use client";
import FieldsRebuilder from "@/components/api/FieldsRebuilder";
import HttpGet from "@/components/api/HttpGet";
import httpPost from "@/components/api/HttpPost";
import { LargeButton } from "@/components/minor/Buttons";
import { MulCategorySelect } from "@/components/minor/CategorySelect";
import CustomInput from "@/components/minor/CustomInput";
import DateInput from "@/components/minor/DateInput";
import React, { FormEventHandler, useState } from "react";

async function getEvents() {
  const res = await fetch(
    `https://rent.creatochka.cooldev.pro/api/renter/options/event-types`
  );
  return res.json();
}

const CatalogSearch: React.FC = () => {
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
  };

  const {
    data: eventsData,
    isLoading,
    isError,
  } = HttpGet(
    "https://rent.creatochka.cooldev.pro/api/renter/options/event-types"
  );

  const { data: facilitiesData } = HttpGet(
    "https://rent.creatochka.cooldev.pro/api/renter/options/facilities"
  );
  const { data: rulesData } = HttpGet(
    "https://rent.creatochka.cooldev.pro/api/renter/options/rules"
  );
  const { data: typeofRoomData } = HttpGet(
    "https://rent.creatochka.cooldev.pro/api/renter/options/room-types"
  );
  const { data: typeofEventData } = HttpGet(
    "https://rent.creatochka.cooldev.pro/api/renter/options/room-types"
  );

  const options = eventsData?.data.data.map(
    (item: { name: string; id: string }) => ({
      label: item.name,
      value: item.id,
    })
  );

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

  const [mincost, setMincost] = useState("");
  const [maxcost, setMaxcost] = useState("");

  const [minpeople, setMinpeople] = useState("");
  const [maxpeople, setMaxpeople] = useState("");

  // const data = {
  //   typeOfRoom: typeOfRoom,
  //   district: district,
  //   metro: metro,
  //   date: date,
  // };
  if (isLoading) {
    return <h1>LOADING</h1>;
  }
  if (isError) {
    return <p>Failed to load.</p>;
  }
  if (!eventsData) {
    return <p>adsfsdf</p>;
  }
  return (
    <aside className="max-w-[370px] space-y-[20px] rounded-[18px] bg-white px-[20px] py-[30px]">
      <MulCategorySelect
        options={FieldsRebuilder(typeofRoomData)}
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
        options={FieldsRebuilder(facilitiesData)}
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
        options={FieldsRebuilder(rulesData)}
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
        options={FieldsRebuilder(typeofEventData)}
        twStyles={""}
        blockStyles={""}
        categoryType={"Тип мероприятия"}
        valueMulState={[typeOfEvent, setTypeOfEvent]}
        isBoldCategory={true}
        placeholder={"Любой"}
      />
      <LargeButton twStyles={"bg-blue-primary text-white min-w-full"}>
        Подобрать помещение
      </LargeButton>
    </aside>
  );
};
export default CatalogSearch;
