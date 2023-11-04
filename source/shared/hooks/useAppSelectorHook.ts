import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "@/appsrc/store";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
