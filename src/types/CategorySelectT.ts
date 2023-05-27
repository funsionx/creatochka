type CategorySelectT = {
  options: { value: string; label: string }[];
  twStyles: string;
  blockStyles: string;
  categoryType: string;
  isBoldCategory?: boolean;
  placeholder: string;
  componentsData?: any
  valueState: [
    { value: string; label: string },
    (s: { value: string; label: string }) => void
  ];
  valueMulState: [
    { value: string; label: string }[],
    (s: { value: string; label: string }[]) => void
  ];
};

export type MulCategorySelectT = Omit<CategorySelectT, "valueState">;
export type OnlyCategorySelectT = Omit<CategorySelectT, "valueMulState">;
export type OptionsT = {
  value: string,
  label: string
}[]