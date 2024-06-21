import { BookingUpdateManyWithoutToursInput } from "./BookingUpdateManyWithoutToursInput";
import { ReviewUpdateManyWithoutToursInput } from "./ReviewUpdateManyWithoutToursInput";

export type TourUpdateInput = {
  bookings?: BookingUpdateManyWithoutToursInput;
  reviews?: ReviewUpdateManyWithoutToursInput;
};
