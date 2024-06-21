import { BookingListRelationFilter } from "../booking/BookingListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { ReviewListRelationFilter } from "../review/ReviewListRelationFilter";

export type TourWhereInput = {
  bookings?: BookingListRelationFilter;
  id?: StringFilter;
  reviews?: ReviewListRelationFilter;
};
