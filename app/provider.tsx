import { StoreProvider } from "@/appsrc/providers";
import { FC, ReactNode } from "react";
type Props = { children: ReactNode };

export const AppProvider: FC<Props> = ({ children }) => {
  return <StoreProvider>{children}</StoreProvider>;
};
