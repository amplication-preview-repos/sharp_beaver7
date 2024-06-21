import { Tour as TTour } from "../api/tour/Tour";

export const TOUR_TITLE_FIELD = "id";

export const TourTitle = (record: TTour): string => {
  return record.id?.toString() || String(record.id);
};
