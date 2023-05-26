export interface ICustomInput {
  type: string;
  label: string;
  valueState: [string, (s: string) => void];
  trimmed: boolean;
  placeholder: string;
  twStyles?: string
}
