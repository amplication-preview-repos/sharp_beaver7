import { BookingListRelationFilter } from "../booking/BookingListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { ReviewListRelationFilter } from "../review/ReviewListRelationFilter";

export type CustomerWhereInput = {
  bookings?: BookingListRelationFilter;
  id?: StringFilter;
  reviews?: ReviewListRelationFilter;
};
