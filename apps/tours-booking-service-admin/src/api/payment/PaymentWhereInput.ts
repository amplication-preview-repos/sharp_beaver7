import { BookingWhereUniqueInput } from "../booking/BookingWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type PaymentWhereInput = {
  booking?: BookingWhereUniqueInput;
  id?: StringFilter;
};
