import { SortOrder } from "../../util/SortOrder";

export type BookingOrderByInput = {
  createdAt?: SortOrder;
  customerId?: SortOrder;
  id?: SortOrder;
  tourId?: SortOrder;
  updatedAt?: SortOrder;
};
