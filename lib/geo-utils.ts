/**
 * Simple continent derivation from coordinates.
 * Uses rough bounding boxes — sufficient for conversational stats.
 */
export function getContinentFromCoords(coordinates: [number, number]): string {
  const [lon, lat] = coordinates;

  // Africa
  if (lat >= -35 && lat <= 37 && lon >= -18 && lon <= 52) return "Africa";

  // Europe
  if (lat >= 35 && lat <= 72 && lon >= -25 && lon <= 45) return "Europe";

  // Asia (broad)
  if (lat >= -10 && lat <= 72 && lon >= 45 && lon <= 180) return "Asia";
  if (lat >= 0 && lat <= 55 && lon >= 60 && lon <= 150) return "Asia";

  // South America
  if (lat >= -56 && lat <= 13 && lon >= -82 && lon <= -34) return "South America";

  // North America
  if (lat >= 13 && lat <= 84 && lon >= -170 && lon <= -50) return "North America";

  // Oceania
  if (lat >= -50 && lat <= 0 && lon >= 100 && lon <= 180) return "Oceania";

  // Middle East overlap — refine from Africa/Europe/Asia
  if (lat >= 12 && lat <= 42 && lon >= 25 && lon <= 63) return "Middle East";

  return "Unknown";
}
