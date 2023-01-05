import z from "zod";
import { CSVMedalDataSchemaValues, CSVMedalDataSchemaKeys } from "./";

export type TCSVMedalDataSchemaValues = z.infer<
  typeof CSVMedalDataSchemaValues
>;
export type TCSVMedalDataSchemaKeys = z.infer<typeof CSVMedalDataSchemaKeys>;
export type TCSVMedalDataSchemaKey = TCSVMedalDataSchemaKeys[number];

// redeclare with more intuitiveNames
export type TMedalDataKeys = TCSVMedalDataSchemaKeys;
export type TMedalDataKey = TCSVMedalDataSchemaKeys[number];

export type TMedalData = {
  [key in TCSVMedalDataSchemaKey]: string;
}[];
