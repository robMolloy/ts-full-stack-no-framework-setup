import { TMedalDataKey, TMedalData } from "./";

export type TSortParams = {
  useSort: true;
  sortKey: TMedalDataKey;
  isSortAscending: boolean;
};
export type TMedalDataStore_Data = TMedalData | "LOADING" | "ERROR";

export type TMedalDataStore = {
  data: TMedalDataStore_Data;
  sortParams?: TSortParams;
  safeSetData: (payload: TMedalDataStore_Data) => void;
  handleSetData: (payload: unknown) => void;
  fetchData: () => void;
  fetchAndSetData: (p1?: TSortParams) => void;
};
