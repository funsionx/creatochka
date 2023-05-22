interface Tag {
  peopleQuantity: number;
  area: number;
  parking: string;
}

export interface IRoomCard {
  cardImg: string;
  rating: number;
  numOfFeedbacks: number;
  title: string;
  metroStation: string;
  timeToTravel: number;
  tags: Tag;
  price: string;
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

