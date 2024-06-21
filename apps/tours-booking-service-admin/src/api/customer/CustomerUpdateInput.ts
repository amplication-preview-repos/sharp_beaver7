import { BookingUpdateManyWithoutCustomersInput } from "./BookingUpdateManyWithoutCustomersInput";
import { ReviewUpdateManyWithoutCustomersInput } from "./ReviewUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  bookings?: BookingUpdateManyWithoutCustomersInput;
  reviews?: ReviewUpdateManyWithoutCustomersInput;
};
