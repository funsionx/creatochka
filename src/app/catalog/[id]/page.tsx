import HttpGet from "@/components/api/HttpGet";
import axios from "axios";

async function getRoom(id: string) {
  return await axios.get(
    `https://rent.creatochka.cooldev.pro/api/renter/rooms?id=${id}`
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

export default async function Room({ params }: { params: { id: string } }) {
  // const { data: room } = HttpGet(
  //   `https://rent.creatochka.cooldev.pro/api/renter/rooms?id=${params.id}`
  // )
  const roomData = (await getRoom(params.id)).data.data
  // // Initiate both requests in parallel
  // const roomData = getRoom(id);
  // // Wait for the promises to resolve
  // const [room] = await Promise.all([roomData]);
  return (
    <>
      <h1>{roomData.name}</h1>
      <h1>{roomData.id}</h1>
      {/* <Albums list={albums}></Albums> */}
    </>
  );
}
