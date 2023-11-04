import { useDispatch } from "react-redux";
import { AppDispatch } from "@/appsrc/store";

export const useAppDispatch: () => AppDispatch = useDispatch;
