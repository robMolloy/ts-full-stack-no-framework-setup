import * as fs from "fs/promises";

type param1 = Parameters<typeof fs.readFile>[0];

export const readFile = async (fileName: param1) => {
  return (await fs.readFile(fileName)).toString();
};
