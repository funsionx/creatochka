import HttpGet from "@/components/api/HttpGet";
import axios from "axios";
import img from "../../../../public/testPics/img.svg";
import Image from "next/image";
import hide from "../../../public/icons/Hide.svg";
import star from "../../../../public/icons/Star.svg";
import walkingMan from "../../../../public/icons/ico man.svg";
import iconYes from "../../../../public/icons/icon - yes.svg";
import iconNo from "../../../../public/icons/icon - no.svg";
import { Adapter } from "@/components/util/rebuilders/AvailabilityRebuilder";

async function getRoom(id: string) {
  return await axios.get(
    `https://rent.creatochka.cooldev.pro/api/renter/rooms?id=${id}&full_info=true`
  );
}

export async function generateStaticParams() {
  const rooms = await axios.get(
    "https://rent.creatochka.cooldev.pro/api/renter/rooms"
  );

  return rooms?.data.data.map((room: any) => ({
    id: room.id,
  }));
}
{
  /* <RoomCard
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
          /> */
}

const Randomizer = (pic1: any, pic2: any) => {
  return Math.random() * 10 > 5 ? (
    <Image src={pic1} alt="pic" />
  ) : (
    <Image src={pic2} alt={"pic"} />
  );
};
export default async function Room({ params }: { params: { id: string } }) {
  const roomData = (await getRoom(params.id)).data.data;
  const title = roomData[0].name;
  const reviewsCount = roomData[0].reviewsCount;
  const maximumGuests = roomData[0].maximumGuests;
  const square = roomData[0].square;
  const parking = roomData[0].parking;
  const eventTypes: string[] = roomData[0].eventTypes;
  const rules: string[] = roomData[0].rules;
  const availablity: string[] = roomData[0].accessibility;
  const metros = roomData[0].metros;

  return (
    <>
      <h1>{title}</h1>
      <main className="flex min-w-full gap-[30px]">
        <section className="min-w-[770px]">
          <Image src={img} alt={"pic"} width={770} />
          <div className="mt-[20px] flex items-center justify-between rounded-[12px] bg-gray-5 px-[20px] py-[16px]">
            <div className="flex ">
              <Image src={star} alt={"pic"} />
              <h6 className="ml-[7px] mr-[4px]">
                {Math.ceil(Math.random() * 5)}
              </h6>
              <h6 className=" text-gray-2">{reviewsCount} отзыва</h6>
            </div>

            <div className="flex gap-[12px] ">
              <div className="rounded-[10px] bg-blue-secondary px-[12px] py-[10px] text-[#0044CC]">
                {square} м²
              </div>
              <div className="rounded-[10px] bg-blue-secondary px-[12px] py-[10px] text-[#0044CC]">
                до {maximumGuests} человек
              </div>
              <div className="rounded-[10px] bg-blue-secondary px-[12px] py-[10px] text-[#0044CC]">
                {parking === "PAID_PARKING"
                  ? "Платная парковка"
                  : "Платная парковка"}
              </div>
            </div>
          </div>
        </section>
        <section className="flex max-h-[700px] min-w-[33%] items-center justify-center rounded-xl bg-gray-1 text-white">
          Календарь
        </section>
      </main>

      <section>
        {metros.map((m: any) => {
          <div className="flex h-20">
            <span
              style={{ backgroundColor: "#" + m.color }}
              className="w-2px h-2px"
            />
            <h6>{m.stationValue}</h6>
            <Image src={walkingMan} alt={"pic"} />
            <h6 className="text-gray-2">{m.timeTo}</h6>
          </div>;
        })}
      </section>

      <div className="my-[32px] h-0 w-[770px] border"></div>

      <h5 className="mb-[20px] font-bold text-black">
        Типы проводимых мероприятий
      </h5>
      <div className="flex flex-wrap">
        {eventTypes.map((e, i) => (
          <h6
            className="mb-[12px] mr-[12px] w-fit rounded-[10px] border-2 border-gray-3 px-[12px] py-[10px] font-medium"
            key={i}
          >
            {e}
          </h6>
        ))}
      </div>
      <h5 className="mb-[20px] font-bold text-black">Правила</h5>
      <div className="flex flex-wrap">
        {rules.map((e, i) => (
          <>
            <div className="grid grid-cols-2 justify-between ">
              <div
                className="mb-[12px] flex w-[100%] items-center justify-between gap-[12px]"
                key={i}
              >
                {Randomizer(iconYes, iconNo)}
                <h6 className=" w-fit font-medium">{e}</h6>
              </div>
            </div>
          </>
        ))}
      </div>
      <h5 className="mb-[20px] font-bold text-black">Доступность</h5>
      <div className="flex flex-wrap">
        {availablity.map((e, i) => (
          <>
            <div
              className="mb-[12px] flex w-[100%] items-center gap-[12px]"
              key={i}
            >
              <Image src={iconYes} alt={"pic"} />
              <h6 className=" w-fit font-medium">{Adapter(e)}</h6>
            </div>
          </>
        ))}
      </div>
    </>
  );
}
