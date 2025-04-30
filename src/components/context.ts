import { useOutletContext } from "react-router-dom";
import { AppContext } from "./types";

export function useAppContext() {
  return useOutletContext<AppContext>();
}
