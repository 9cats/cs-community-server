import fs from "fs";
import { communityData } from "./constant";
import { CS } from "./types";
import mapTranslationsData from "./data/mapTranslations.json"

export const community = Object.fromEntries(
  Object.entries(communityData).map(([key, val]) => [
    key,
    new CS.Community(val),
  ])
) as Record<CS.Community.Name, CS.Community>;

export const mapTranslations = mapTranslationsData
