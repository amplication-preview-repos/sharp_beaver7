import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { TourWhereUniqueInput } from "../tour/TourWhereUniqueInput";

export type ReviewWhereInput = {
  customer?: CustomerWhereUniqueInput;
  id?: StringFilter;
  tour?: TourWhereUniqueInput;
};
