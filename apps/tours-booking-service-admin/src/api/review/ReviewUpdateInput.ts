import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { TourWhereUniqueInput } from "../tour/TourWhereUniqueInput";

export type ReviewUpdateInput = {
  customer?: CustomerWhereUniqueInput | null;
  tour?: TourWhereUniqueInput | null;
};
