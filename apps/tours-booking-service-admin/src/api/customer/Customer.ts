import { Booking } from "../booking/Booking";
import { Review } from "../review/Review";

export type Customer = {
  bookings?: Array<Booking>;
  createdAt: Date;
  id: string;
  reviews?: Array<Review>;
  updatedAt: Date;
};
