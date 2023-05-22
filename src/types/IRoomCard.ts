interface Tag {
  peopleQuantity: string;
  area: string;
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
  price: string
}
