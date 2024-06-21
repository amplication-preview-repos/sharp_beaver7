import { Customer } from "../customer/Customer";
import { Payment } from "../payment/Payment";
import { Tour } from "../tour/Tour";

export type Booking = {
  createdAt: Date;
  customer?: Customer | null;
  id: string;
  payments?: Array<Payment>;
  tour?: Tour | null;
  updatedAt: Date;
};
