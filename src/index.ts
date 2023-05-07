import fs from "fs";
import { communityData } from "@constant";
import { CS } from "@type";

export const community = Object.fromEntries(
  Object.entries(communityData).map(([key, val]) => [
    key,
    new CS.Community(val),
  ])
) as Record<CS.Community.Name, CS.Community>;

export const mapTranslations = JSON.parse(
  fs.readFileSync(`${__dirname}/map.json`).toString()
) as Record<string, string | null>;
