export const mapSize = {
  6: "Small",
  8: "Medium",
  10: "Large",
} as const;

export const mapCargoType = {
  1: "Standard",
  2: "Express",
} as const;

export const cargoSizes = Object.entries(mapSize).map(([value, name]) => ({
  name,
  value,
}));

export const cargoTypes = Object.entries(mapCargoType).map(([value, name]) => ({
  name,
  value,
}));

export type CargoSize = keyof typeof mapSize;

export type CargoType = keyof typeof mapCargoType;
