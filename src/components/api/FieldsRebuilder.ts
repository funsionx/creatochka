import { AxiosResponse } from "axios";

const FieldsRebuilder = (data: AxiosResponse<any, any> | undefined) => {
  return data?.data?.data.map((item: { name: string; id: string }) => ({
    label: item.name,
    value: item.id,
  }));
};

export default FieldsRebuilder;
