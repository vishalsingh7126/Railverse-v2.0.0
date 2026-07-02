import { z } from "zod";

export const pnrSchema = z
  .string()
  .trim()
  .regex(/^\d{10}$/, "PNR number must be exactly 10 digits");

export const trainNumberSchema = z
  .string()
  .trim()
  .regex(/^\d{5}$/, "Train number must be exactly 5 digits");

export const stationCodeSchema = z
  .string()
  .trim()
  .toUpperCase()
  .regex(/^[A-Z]{2,6}$/, "Station code must be between 2 and 6 uppercase letters");
