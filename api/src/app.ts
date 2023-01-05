import { TMedalDataKey, TMedalData } from "./../../npm_modules/medalDataType";
import { readFile } from "./helpers/readFile";
import express from "express";
import { json } from "body-parser";
import cors from "cors";
import { refineRawMedalData, sortMedalData } from "./helpers";

const fileName1 = "../raw-data/2004-2012.csv";
const fileName2 = "../raw-data/2004-2012-test-snippet.csv";
const fileName3 = "../raw-data/2004-2012-test-tiny-snippet.csv";
const fileName = fileName1;

let cachedRawData: undefined | string = undefined;

type TRequestQuery = {
  "/": {
    useSort?: "true";
    isSortAscending?: "true" | "false";
    sortKey?: TMedalDataKey;
  };
};

const createApp = () => {
  const app = express();
  app.use(json());
  app.use(cors());

  app.get("/", async (req, res) => {
    console.log("request to /");

    const rawData = !!cachedRawData ? cachedRawData : await readFile(fileName);
    if (!cachedRawData) cachedRawData = rawData;

    // likely a major source of inefficiency - cache similarly to cacheRawData to resolve
    const medalDataUnsorted = refineRawMedalData(rawData);

    const query = req.query as TRequestQuery["/"];

    /********* */
    // COULD CLEAR THIS UP WITH A getSortParamsFromRequestQuery FUNCTION
    const {
      useSort: useSortString = "true",
      isSortAscending: isSortAscendingString = "true",
      sortKey = "Year",
    } = query;

    const useSort = useSortString === "true";
    const isSortAscending = isSortAscendingString === "true";

    const sortParams = { isSortAscending, sortKey };
    /********* */

    const medalData = useSort
      ? sortMedalData(medalDataUnsorted, sortParams)
      : medalDataUnsorted;

    return res.send(medalData);
  });

  return app;
};

export default createApp;
