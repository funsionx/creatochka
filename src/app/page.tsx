import Search from "@/components/major/Search";
import RoomCard from "@/components/minor/RoomCard";
import test from "../../public/testPics/img.svg";

const tags = {
  peopleQuantity: "до 50 человек",
  area: "140 м2",
  parking: "Парковка отсутствует",
};
export default function Home() {
  return (
    <>
      {/* <SuggestionLine /> */}
      <Search />
      <RoomCard
        cardImg={test}
        rating={4.7}
        numOfFeedbacks={2}
        title={"Камерный зал для выставок, лекций и кинопоказов"}
        metroStation={"Юго-Западная"}
        timeToTravel={7}
        tags={tags}
        price={"От 1000 руб/ч"}
      />
    </>
  );
}
