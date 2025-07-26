import {
    type TypedUseSelectorHook,
    useDispatch,
    useSelector,
} from "react-redux";
import { type RootState, type AppDispatch } from "./store";

// Use throughout your app instead of plain useDispatch/useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
