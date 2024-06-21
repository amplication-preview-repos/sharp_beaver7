import { BookingWhereUniqueInput } from "../booking/BookingWhereUniqueInput";

export type PaymentCreateInput = {
  booking?: BookingWhereUniqueInput | null;
};
