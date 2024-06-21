import { SortOrder } from "../../util/SortOrder";

export type PaymentOrderByInput = {
  bookingId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
