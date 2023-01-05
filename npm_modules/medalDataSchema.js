"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.medalDataSchema = exports.CSVMedalDataSchemaKeys = exports.CSVMedalDataSchemaValues = void 0;
const zod_1 = __importDefault(require("zod"));
exports.CSVMedalDataSchemaValues = zod_1.default.array(zod_1.default.tuple([
    zod_1.default.string(),
    zod_1.default.string(),
    zod_1.default.string(),
    zod_1.default.string(),
    zod_1.default.string(),
    zod_1.default.string(),
    zod_1.default.string(),
    zod_1.default.string(),
    zod_1.default.string(),
]));
exports.CSVMedalDataSchemaKeys = zod_1.default.tuple([
    zod_1.default.literal("Year"),
    zod_1.default.literal("City"),
    zod_1.default.literal("Sport"),
    zod_1.default.literal("Discipline"),
    zod_1.default.literal("Athlete"),
    zod_1.default.literal("Country"),
    zod_1.default.literal("Gender"),
    zod_1.default.literal("Event"),
    zod_1.default.literal("Medal"),
]);
exports.medalDataSchema = zod_1.default.array(zod_1.default.object({
    Year: zod_1.default.string(),
    City: zod_1.default.string(),
    Sport: zod_1.default.string(),
    Discipline: zod_1.default.string(),
    Athlete: zod_1.default.string(),
    Country: zod_1.default.string(),
    Gender: zod_1.default.string(),
    Event: zod_1.default.string(),
    Medal: zod_1.default.string(),
}));
