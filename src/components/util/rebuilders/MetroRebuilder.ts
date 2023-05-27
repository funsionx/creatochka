import { AxiosResponse } from "axios";

const MetroRebuilder = (data: AxiosResponse<any, any> | undefined) => {
  return data?.data?.data.map((item: IMetro) => ({
    label: item.stationValue,
    value: item.stationId,
    color: item.color,
    lineValue: item.lineValue,
    railwayStation: item.railwayStation,
  }));
};

export default MetroRebuilder;

interface IMetro {
  stationValue: string;
  stationId: string;
  lineValue: string;
  color: string;
  railwayStation: false;
}
// "stationValue": "Преображенская площадь",
//             "stationId": "7d2f2267-3936-3d73-755e-ba3208da09fd",
//             "lineValue": "Сокольническая",
//             "color": "DB2128",
//             "railwayStation": false
