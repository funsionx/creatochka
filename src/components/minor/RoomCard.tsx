"use client";
import React from "react";
import { IRoomCard } from "@/types/IRoomCard";
import Image from "next/image";
import hide from "../../../public/icons/Hide.svg";
import star from "../../../public/icons/Star.svg";
import walkingMan from "../../../public/icons/ico man.svg";

const RoomCard: React.FC<IRoomCard> = (props) => {
  const {
    cardImg,
    rating,
    numOfFeedbacks,
    title,
    metroStation,
    timeToTravel,
    tags,
    price,
    isHorizontal,
  } = props;

  const [isShowPrice, setIsShowPrice] = React.useState(false);

  return (
    <section
      className={
        "max-w-fit rounded-[24px] p-[20px] shadow-lg shadow-slate-300/70 " +
        (isHorizontal ? "flex gap-[18px]" : "")
      }
    >
      <Image src={cardImg} alt={"pic"} width={isHorizontal ? 370 : 530} />
      <div>
        <div className="mt-[18px] flex items-center justify-between">
          {!isShowPrice ? (
            <button
              onClick={() => setIsShowPrice(!isShowPrice)}
              className="flex items-center"
            >
              <Image src={hide} alt={"pic"} />
              <h6 className="ml-[6px] text-gray-text">цена аренды</h6>
            </button>
          ) : (
            <h6 className="font-bold">{price}</h6>
          )}
          <div className="flex items-center">
            <Image src={star} alt={"pic"} />
            <h6 className="mr-[4px]">{rating}</h6>
            <p>
              {numOfFeedbacks}{" "}
              {numOfFeedbacks === 2 || 3 || 4
                ? "отзывa"
                : numOfFeedbacks === 1
                ? "отзыв"
                : "отзывов"}
            </p>
          </div>
        </div>
        <h5 className="font-bold text-blue-primary">{title}</h5>
        <div className="mb-[12px] flex gap-[7px]">
          <h6>{metroStation}</h6>
          <Image src={walkingMan} alt={"pic"} />
          <h6>{timeToTravel} мин</h6>
        </div>
        <div className="flex">
          {Object.values(tags).map((tag: number | string, id) => (
            <div
              key={id}
              className="mr-[12px] rounded-[10px] bg-[#F5F5F5] px-[12px] py-[10px]"
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomCard;
