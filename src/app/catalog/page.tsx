"use client";
import React from "react";
import { NextPage } from "next";
import CatalogSearch from "@/components/major/Forms/CatalogSearch";
import RoomCard from "@/components/minor/RoomCard";
import img from "../../../public/testPics/img.svg";
import HttpGet from "@/components/api/HttpGet";
import { ICard } from "@/types/ICard";

const tags = {
  peopleQuantity: 50,
  area: 140,
  parking: "Парковка отсутствует",
};
const Catalog: NextPage = () => {
  const {
    data: roomsData,
    isError,
    isLoading,
  } = HttpGet("https://rent.creatochka.cooldev.pro/api/renter/rooms");
  console.log(roomsData);
  return (
    <>
      <h1>Аренда помещений в Москве</h1>
      <main className="flex">
        <CatalogSearch />
        <section className="ml-[30px]">
          {roomsData?.data.data.map((item: ICard) => (
            <RoomCard
              key={item.id}
              cardImg={img}
              rating={0}
              numOfFeedbacks={item.reviewsCount}
              title={item.name}
              // metroStation={
              //   item.nearestMetro
              //     ? item.nearestMetro?.stationValue
              //     : "Метро нет"
              // }
              timeToTravel={item.nearestMetro?.timeTo}
              tags={{
                peopleQuantity: item.maximumGuests,
                area: item.square,
                parking: item.parking,
              }}
              price={"Цена не указана"}
              isHorizontal={true}
              metro={item.nearestMetro}
            />
          ))}

          {/* <RoomCard
            cardImg={img}
            rating={0}
            numOfFeedbacks={0}
            title={""}
            metroStation={""}
            timeToTravel={0}
            tags={tags}
            price={"asd"}
            isHorizontal={true}
          /> */}
        </section>
      </main>
    </>
  );
};

export default Catalog;
