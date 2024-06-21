import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { PaymentListRelationFilter } from "../payment/PaymentListRelationFilter";
import { TourWhereUniqueInput } from "../tour/TourWhereUniqueInput";

export type BookingWhereInput = {
  customer?: CustomerWhereUniqueInput;
  id?: StringFilter;
  payments?: PaymentListRelationFilter;
  tour?: TourWhereUniqueInput;
};
