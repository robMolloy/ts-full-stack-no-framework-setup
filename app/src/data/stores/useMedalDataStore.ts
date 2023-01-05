import axios from "axios";
import create from "zustand";
import { medalDataSchema, TMedalDataStore } from "../";

export const useMedalDataStore = create<TMedalDataStore>((set, get) => ({
  data: "LOADING",
  sortParams: undefined,
  safeSetData: (payload) => {
    set({ data: payload });
  },
  handleSetData: (payload: unknown) => {
    const parseResult = medalDataSchema.safeParse(payload);
    const data = parseResult.success ? parseResult.data : "ERROR";
    console.log(/*LL*/ 11, "parseResult", parseResult);

    get().safeSetData(data);
  },
  fetchData: async () => {
    const sortParams = get().sortParams;

    const isSortAscending = sortParams?.isSortAscending ? "true" : "false";
    const urlBase = "http://localhost:3004/";
    const urlParameters = sortParams?.useSort
      ? `?useSort=true&isSortAscending=${isSortAscending}&sortKey=${sortParams.sortKey}`
      : "";

    const response = await axios(`${urlBase}${urlParameters}`);
    return response.data;
  },
  fetchAndSetData: async (p1) => {
    set({ sortParams: p1, data: "LOADING" });
    const data = await get().fetchData();

    get().handleSetData(data);
  },
}));
