import { ReactNode } from "react";

export interface IButtons {
  twStyles: string;
  children: ReactNode;
  onClick?: () => void
  eventHandler?: () => void
  // React.MouseEventHandler<HTMLButtonElement> | undefined
}
