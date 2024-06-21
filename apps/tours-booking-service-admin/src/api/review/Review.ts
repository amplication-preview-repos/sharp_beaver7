import { Customer } from "../customer/Customer";
import { Tour } from "../tour/Tour";

export type Review = {
  createdAt: Date;
  customer?: Customer | null;
  id: string;
  tour?: Tour | null;
  updatedAt: Date;
};
