"use client";
import FieldsRebuilder from "@/components/api/FieldsRebuilder";
import HttpGet from "@/components/api/HttpGet";
import httpPost from "@/components/api/HttpPost";
import { LargeButton } from "@/components/minor/Buttons";
import { MulCategorySelect } from "@/components/minor/CategorySelect";
import CustomInput from "@/components/minor/CustomInput";
import DateInput from "@/components/minor/DateInput";
import { OptionsT } from "@/types/CategorySelectT";
import React, { FormEventHandler, useState } from "react";

const CatalogSearch: React.FC = () => {
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    console.log(JSON.stringify(data));
  };

  const handleDeleteAll = () => {
    setTypeOfRoom([]);
    setDate("");
    setDistrict([]);
    setRegion([]);
    setComfort([]);
    setMetro([]);
    setEquipment([]);
    setServices([]);
    setRules([]);
    setAvailability([]);
    setTypeOfEvent([]);
    setMinsquare("");
    setMaxsquare("");
    setMinpeople("");
    setMaxpeople("");
    setMincost("");
    setMaxcost("");
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
  const { data: metroData } = HttpGet(
    "https://rent.creatochka.cooldev.pro/api/renter/options/metro"
  );

  console.log(metroData)

  const options = eventsData?.data.data.map(
    (item: { name: string; id: string }) => ({
      label: item.name,
      value: item.id,
    })
  );

  const [typeOfRoom, setTypeOfRoom] = useState<OptionsT>([]);
  const [date, setDate] = useState("");
  const [district, setDistrict] = useState<OptionsT>([]);
  const [metro, setMetro] = useState<OptionsT>([]);
  const [region, setRegion] = useState<OptionsT>([]);
  const [comfort, setComfort] = useState<OptionsT>([]);
  const [equipment, setEquipment] = useState<OptionsT>([]);
  const [services, setServices] = useState<OptionsT>([]);
  const [rules, setRules] = useState<OptionsT>([]);
  const [availability, setAvailability] = useState<OptionsT>([]);
  const [typeOfEvent, setTypeOfEvent] = useState<OptionsT>([]);

  const [minsquare, setMinsquare] = useState("");
  const [maxsquare, setMaxsquare] = useState("");

  const [mincost, setMincost] = useState("");
  const [maxcost, setMaxcost] = useState("");

  const [minpeople, setMinpeople] = useState("");
  const [maxpeople, setMaxpeople] = useState("");

  const data = {
    typeOfRoom: typeOfRoom.map((val) => val.value),
    district: district.map((val) => val.value),
    metro: metro.map((val) => val.value),
    date: date,
    mincost: mincost,
    maxcost: maxcost,
    minarea: minsquare,
    maxarea: maxsquare,
    minpeople: minpeople,
    maxpeople: maxpeople,
    facilities: comfort.map((val) => val.value),
    equipment: equipment.map((val) => val.value),
    services: services.map((val) => val.value),
    rules: rules.map((val) => val.value),
    typeOfEvent: typeOfEvent.map((val) => val.value),
  };

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
    <aside className="max-w-[370px] rounded-[18px] bg-white px-[20px] py-[30px]">
      <form onSubmit={handleSubmit} className="space-y-[20px]">
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
          options={FieldsRebuilder(eventsData)}
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
              placeholder={"От"}
              twStyles={"w-[150px]"}
            />
            <div className="mx-[10px] h-0 w-[10px] border border-black-text" />
            <CustomInput
              type={""}
              label={""}
              valueState={[maxcost, setMaxcost]}
              trimmed={false}
              placeholder={"До"}
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
              placeholder={"От"}
              twStyles={"w-[150px]"}
            />
            <div className="mx-[10px] h-0 w-[10px] border border-black-text" />
            <CustomInput
              type={""}
              label={""}
              valueState={[maxsquare, setMaxsquare]}
              trimmed={false}
              placeholder={"До"}
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
              placeholder={"От"}
              twStyles={"w-[150px]"}
            />
            <div className="mx-[10px] h-0 w-[10px] border border-black-text" />
            <CustomInput
              type={""}
              label={""}
              valueState={[maxpeople, setMaxpeople]}
              trimmed={false}
              placeholder={"До"}
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
        <button onClick={handleDeleteAll} className="text-red" type="button">
          Сбросить все фильтры
        </button>
        <LargeButton
          twStyles={"bg-blue-primary text-white min-w-full"}
          type="submit"
        >
          Подобрать помещение
        </LargeButton>
      </form>
    </aside>
  );
};
export default CatalogSearch;
