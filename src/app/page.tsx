import Search from "@/components/major/Search";
import RoomCard from "@/components/minor/RoomCard";
import test from "../../public/testPics/img.svg";
import Footer from "@/components/major/Footer";

const tags = {
  peopleQuantity: 50,
  area: 140,
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
      <Footer />
    </>
  );
}
