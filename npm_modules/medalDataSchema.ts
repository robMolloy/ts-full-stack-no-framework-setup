import z from "zod";

export const CSVMedalDataSchemaValues = z.array(
  z.tuple([
    z.string(),
    z.string(),
    z.string(),
    z.string(),
    z.string(),
    z.string(),
    z.string(),
    z.string(),
    z.string(),
  ])
);

export const CSVMedalDataSchemaKeys = z.tuple([
  z.literal("Year"),
  z.literal("City"),
  z.literal("Sport"),
  z.literal("Discipline"),
  z.literal("Athlete"),
  z.literal("Country"),
  z.literal("Gender"),
  z.literal("Event"),
  z.literal("Medal"),
]);

export const medalDataSchema = z.array(
  z.object({
    Year: z.string(),
    City: z.string(),
    Sport: z.string(),
    Discipline: z.string(),
    Athlete: z.string(),
    Country: z.string(),
    Gender: z.string(),
    Event: z.string(),
    Medal: z.string(),
  })
);
