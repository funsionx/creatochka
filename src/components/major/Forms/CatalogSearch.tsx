"use client";
import AvailabilityRebuilder from "@/components/util/rebuilders/AvailabilityRebuilder";
import FieldsRebuilder from "@/components/util/rebuilders/FieldsRebuilder";
import HttpGet from "@/components/api/HttpGet";
import httpPost from "@/components/api/HttpPost";
import MetroRebuilder from "@/components/util/rebuilders/MetroRebuilder";
import { LargeButton } from "@/components/minor/Buttons";
import { MulCategorySelect } from "@/components/minor/CategorySelect";
import CustomInput from "@/components/minor/CustomInput";
import DateInput from "@/components/minor/DateInput";
import { OptionsT } from "@/types/CategorySelectT";
import React, { FormEventHandler, useState } from "react";
import { components } from "react-select";
// Define custom option for color-coded circle with label and station name
const ColorCircleOption = (props: any) => {
  const [isZhd, setIsZhd] = useState(false);
  return (
    <components.Option {...props}>
      <div className="flex items-center">
        <span
          className="mr-2 h-2 w-2 rounded-full"
          style={{ backgroundColor: "#" + props.data.color }}
        />
        <div className="station-name">{props.data.label}</div>
        {/* <div className="line-name">{props.data.lineValue}</div> */}
      </div>
    </components.Option>
  );
};
const CatalogSearch: React.FC = () => {
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    console.log(JSON.stringify(data));
  };

  const handleDeleteAll = () => {
    setTypeOfRoom([]);
    setDate("");
    setComfort([]);
    setMetro([]);
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

  const { data: eventsData } = HttpGet(
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
    "https://rent.creatochka.cooldev.pro/api/renter/options/event-types"
  );
  const { data: availabilityData } = HttpGet(
    "https://rent.creatochka.cooldev.pro/api/renter/options/availability-types"
  );

  const {
    data: metroData,
    isError,
    isLoading,
  } = HttpGet("https://rent.creatochka.cooldev.pro/api/renter/options/metro");

  // console.log(metroData);

  const options = metroData?.data?.data?.map((item: any) => ({
    label: item.stationValue,
    value: item.stationId,
    color: item.color,
    lineValue: item.lineValue,
    railwayStation: item.railwayStation,
  }));

  const [typeOfRoom, setTypeOfRoom] = useState<OptionsT>([]);
  const [date, setDate] = useState("");
  const [metro, setMetro] = useState<OptionsT>([]);
  const [comfort, setComfort] = useState<OptionsT>([]);
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
    // district: district.map((val) => val.value),
    metro: metro.map((val) => val.value),
    date: date,
    mincost: mincost,
    maxcost: maxcost,
    minarea: minsquare,
    maxarea: maxsquare,
    minpeople: minpeople,
    maxpeople: maxpeople,
    facilities: comfort.map((val) => val.value),
    // equipment: equipment.map((val) => val.value),
    // services: services.map((val) => val.value),
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
    <aside className="h-fit max-w-[370px] rounded-[18px] bg-white px-[20px] py-[30px]">
      <form onSubmit={handleSubmit} className="space-y-[20px]">
        <MulCategorySelect
          options={FieldsRebuilder(typeofRoomData)}
          twStyles={"rounded-[12px] hover:bg-gray-5"}
          categoryType={"Тип помещения"}
          valueMulState={[typeOfRoom, setTypeOfRoom]}
          isBoldCategory={true}
          placeholder={"Вcе типы"}
        />

        <MulCategorySelect
          options={MetroRebuilder(metroData)}
          twStyles={""}
          categoryType={"Метро"}
          valueMulState={[metro, setMetro]}
          isBoldCategory={true}
          placeholder={"Любое"}
          componentsData={{ Option: ColorCircleOption }}
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
        <h3>Удалённость от метро</h3>
        <MulCategorySelect
          options={FieldsRebuilder(facilitiesData)}
          twStyles={""}
          categoryType={"Удобства"}
          valueMulState={[comfort, setComfort]}
          isBoldCategory={true}
          placeholder={"Любые"}
        />
        <MulCategorySelect
          options={FieldsRebuilder(rulesData)}
          twStyles={""}
          categoryType={"Правила"}
          valueMulState={[rules, setRules]}
          isBoldCategory={true}
          placeholder={"Любые"}
        />
        <MulCategorySelect
          options={AvailabilityRebuilder(availabilityData)}
          twStyles={""}
          categoryType={"Доступность"}
          valueMulState={[availability, setAvailability]}
          isBoldCategory={true}
          placeholder={"Любые"}
        />
        <MulCategorySelect
          options={FieldsRebuilder(typeofEventData)}
          twStyles={""}
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
