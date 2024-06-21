import { BookingWhereUniqueInput } from "../booking/BookingWhereUniqueInput";

export type PaymentUpdateInput = {
  booking?: BookingWhereUniqueInput | null;
};
