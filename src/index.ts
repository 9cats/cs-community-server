import { CS } from "./types";
import communityData from "./data/communityData.json";
import mapTranslationsData from "./data/mapTranslations.json";

export const community = Object.fromEntries(
  Object.entries(
    communityData as Record<CS.Community.Name, CS.CommunityType>
  ).map(([key, val]) => [key, new CS.Community(val)])
) as Record<CS.Community.Name, CS.Community>;

export const mapTranslations = mapTranslationsData as Record<
  string,
  string | null
>;
