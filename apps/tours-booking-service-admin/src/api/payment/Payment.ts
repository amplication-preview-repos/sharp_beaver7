import { Booking } from "../booking/Booking";

export type Payment = {
  booking?: Booking | null;
  createdAt: Date;
  id: string;
  updatedAt: Date;
};
