import * as Papa from "papaparse";
import { CSVMedalDataSchemaValues,CSVMedalDataSchemaKeys,TMedalData  } from "../../../npm_modules";

export const refineRawMedalData = (rawData: string):TMedalData => {
  /**
   * this solution is rudimentary and doesn't deal with commas within strings (and other edge cases?)
   * 
   * const lines = rawData.split(/\n/g)
   * return lines.map((line) => line.split(','))
   */

  const parsedCSVData = Papa.parse(rawData.trim()).data;
  const [parsedCSVDataKeys,...parsedCSVDataValues] = parsedCSVData

  const validateKeys = CSVMedalDataSchemaKeys.safeParse(parsedCSVDataKeys)
  const validateValues = CSVMedalDataSchemaValues.safeParse(parsedCSVDataValues)
  
  const medalData:TMedalData = []
  if (validateKeys.success && validateValues.success) {
    const keys = validateKeys.data
    const values = validateValues.data
    values.forEach((line) => {
      medalData.push({
        [keys[0]]:line[0],
        [keys[1]]:line[1],
        [keys[2]]:line[2],
        [keys[3]]:line[3],
        [keys[4]]:line[4],
        [keys[5]]:line[5],
        [keys[6]]:line[6],
        [keys[7]]:line[7],
        [keys[8]]:line[8],
      })
    })
  }

  return medalData;
};
