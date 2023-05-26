"use client";
import React from "react";
import { NextPage } from "next";
import CatalogSearch from "@/components/major/Forms/CatalogSearch";
import RoomCard from "@/components/minor/RoomCard";
import img from "../../../public/testPics/img.svg";
import HttpGet from "@/components/api/HttpGet";

const tags = {
  peopleQuantity: 50,
  area: 140,
  parking: "Парковка отсутствует",
};
const Catalog: NextPage = () => {
  
  return (
    <>
      <h1>Аренда помещений в Москве</h1>
      <main className="flex">
        <CatalogSearch />
        <section className="ml-[30px]">
          <RoomCard
            cardImg={img}
            rating={0}
            numOfFeedbacks={0}
            title={""}
            metroStation={""}
            timeToTravel={0}
            tags={tags}
            price={"asd"}
            isHorizontal={true}
          />
          <RoomCard
            cardImg={img}
            rating={0}
            numOfFeedbacks={0}
            title={""}
            metroStation={""}
            timeToTravel={0}
            tags={tags}
            price={"asd"}
            isHorizontal={true}
          />
          <RoomCard
            cardImg={img}
            rating={0}
            numOfFeedbacks={0}
            title={""}
            metroStation={""}
            timeToTravel={0}
            tags={tags}
            price={"asd"}
            isHorizontal={true}
          />
          <RoomCard
            cardImg={img}
            rating={0}
            numOfFeedbacks={0}
            title={""}
            metroStation={""}
            timeToTravel={0}
            tags={tags}
            price={"asd"}
            isHorizontal={true}
          />
          <RoomCard
            cardImg={img}
            rating={0}
            numOfFeedbacks={0}
            title={""}
            metroStation={""}
            timeToTravel={0}
            tags={tags}
            price={"asd"}
            isHorizontal={true}
          />
        </section>
      </main>
    </>
  );
};

export default Catalog;
