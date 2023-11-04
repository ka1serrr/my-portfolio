"use client";

import { store } from "@/appsrc/store";
import { FC, ReactNode } from "react";
import { Provider } from "react-redux";

type Props = { children: ReactNode };

export const StoreProvider: FC<Props> = (props) => {
  const { children } = props;
  return <Provider store={store}>{children}</Provider>;
};
