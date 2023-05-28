interface Tag {
  peopleQuantity: number;
  area: number;
  parking: string;
}

export interface IRoomCard {
  cardImg: any;
  numOfFeedbacks: number;
  title: string;
  timeToTravel: number;
  tags: Tag;
  price: string;
  isHorizontal: boolean;
  metro: Metro;
}

export interface Metro {
  stationValue?: string;
  lineValue?: string;
  color?: string;
  distance?: number;
  timeTo?: number;
  railwayStation?: boolean;
}
// {
//   cardImg: string;
//   rating: number;
//   numOfFeedbacks: number;
//   title: string;
//   metroStation: string;
//   timeToTravel: number;
//   tags: {
//     peopleQuantity: number;
//     area: number;
//     parking: string;
//   }
//   price: string;
// }
