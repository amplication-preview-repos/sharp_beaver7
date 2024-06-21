import { BookingCreateNestedManyWithoutToursInput } from "./BookingCreateNestedManyWithoutToursInput";
import { ReviewCreateNestedManyWithoutToursInput } from "./ReviewCreateNestedManyWithoutToursInput";

export type TourCreateInput = {
  bookings?: BookingCreateNestedManyWithoutToursInput;
  reviews?: ReviewCreateNestedManyWithoutToursInput;
};
