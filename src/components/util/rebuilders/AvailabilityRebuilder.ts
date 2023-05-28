import { AxiosResponse } from "axios";

const AvailabilityRebuilder = (data: AxiosResponse<any, any> | undefined) => {
  return data?.data.data.map((item: string) => ({
    value: item,
    label: Adapter(item),
  }));
};

export const Adapter = (item: string): string => {
  return item === "AdaptabilityForPeopleInAWheelchair"
    ? "Приспособленность для людей в кресле-коляске"
    : item === "AdaptabilityForPeopleWithVisualImpairment"
    ? "Приспособленность для людей с нарушением зрения"
    : item === "AdaptabilityForPeopleWithAViolationOfTheMusculoskeletalSystem"
    ? "Приспособленность для людей с нарушением опорно-двигательного аппарата"
    : "Приспособленность для людей с нарушением слуха";
};

// Приспособленность для людей в кресле-коляске
//         Приспособленность для людей с нарушением зрения
//         Приспособленность для людей с нарушением опорно-двигательного аппарата
//         Приспособленность для людей с нарушением слуха
export default AvailabilityRebuilder;
