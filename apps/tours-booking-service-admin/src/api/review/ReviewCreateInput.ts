import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { TourWhereUniqueInput } from "../tour/TourWhereUniqueInput";

export type ReviewCreateInput = {
  customer?: CustomerWhereUniqueInput | null;
  tour?: TourWhereUniqueInput | null;
};
