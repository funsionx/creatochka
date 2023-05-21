import { ReactNode } from "react";

export interface IButtons {
  twStyles: string;
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset"
  // React.MouseEventHandler<HTMLButtonElement> | undefined
}
