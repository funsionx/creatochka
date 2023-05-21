export interface ICategorySelect {
  options: {
    value: string;
    label: string;
  }[];
  twStyles: string;
  blockStyles: string;
  categoryType: string;
  isMulti?: boolean
}
