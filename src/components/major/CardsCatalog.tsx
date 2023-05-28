"use client";
import React from "react";
import { ICard } from "@/types/ICard";
import Link from "next/link";
import HttpGet from "../api/HttpGet";
import RoomCard from "../minor/RoomCard";
import img from "../../../public/testPics/img.svg";

const CardsCatalog: React.FC = () => {
  const {
    data: roomsData,
    isError,
    isLoading,
  } = HttpGet("https://rent.creatochka.cooldev.pro/api/renter/rooms");

  if (isLoading) {
    return <h1>ISLOADING</h1>;
  }
  if (isError) {
    return <h1>ERROR</h1>;
  }

  return (
    <section className="ml-[30px]">
      {roomsData?.data.data.map((item: ICard) => (
        <Link href={`/catalog/${item.id}`} key={item.id}>
          <RoomCard
            cardImg={img}
            rating={0}
            numOfFeedbacks={item.reviewsCount}
            title={item.name}
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
        </Link>
      ))}
    </section>
  );
};

export default CardsCatalog;
