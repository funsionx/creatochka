export interface ICard {
  id: string;
  name: string;
  nearestMetro: {
    stationValue: string;
    lineValue: string;
    color: string;
    distance: number;
    timeTo: number;
    railwayStation: boolean;
  };
  square: number;
  maximumGuests: number;
  parking: string;
  reviewsCount: number;
  images: any[];
}
