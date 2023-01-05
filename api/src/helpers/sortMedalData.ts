import { TMedalDataKey } from "./../../../npm_modules/medalDataType";
import { TMedalData } from "../../../npm_modules/medalDataType";

export const sortMedalData = (
  medalData: TMedalData,
  params: { isSortAscending: boolean; sortKey: TMedalDataKey }
) => {
  const { isSortAscending, sortKey } = params;

  return medalData.sort((line1, line2) => {
    if (isSortAscending) return line1[sortKey] < line2[sortKey] ? -1 : 1;
    return line1[sortKey] > line2[sortKey] ? -1 : 1;
  });
};
