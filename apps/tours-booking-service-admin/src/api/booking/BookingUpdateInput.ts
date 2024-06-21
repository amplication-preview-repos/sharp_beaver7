import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { PaymentUpdateManyWithoutBookingsInput } from "./PaymentUpdateManyWithoutBookingsInput";
import { TourWhereUniqueInput } from "../tour/TourWhereUniqueInput";

export type BookingUpdateInput = {
  customer?: CustomerWhereUniqueInput | null;
  payments?: PaymentUpdateManyWithoutBookingsInput;
  tour?: TourWhereUniqueInput | null;
};
