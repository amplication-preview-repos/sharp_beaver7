import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { PaymentCreateNestedManyWithoutBookingsInput } from "./PaymentCreateNestedManyWithoutBookingsInput";
import { TourWhereUniqueInput } from "../tour/TourWhereUniqueInput";

export type BookingCreateInput = {
  customer?: CustomerWhereUniqueInput | null;
  payments?: PaymentCreateNestedManyWithoutBookingsInput;
  tour?: TourWhereUniqueInput | null;
};
