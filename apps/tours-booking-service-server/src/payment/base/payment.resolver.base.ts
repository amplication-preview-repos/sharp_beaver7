/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Payment } from "./Payment";
import { PaymentCountArgs } from "./PaymentCountArgs";
import { PaymentFindManyArgs } from "./PaymentFindManyArgs";
import { PaymentFindUniqueArgs } from "./PaymentFindUniqueArgs";
import { CreatePaymentArgs } from "./CreatePaymentArgs";
import { UpdatePaymentArgs } from "./UpdatePaymentArgs";
import { DeletePaymentArgs } from "./DeletePaymentArgs";
import { Booking } from "../../booking/base/Booking";
import { PaymentCreateInput } from "./PaymentCreateInput";
import { PaymentService } from "../payment.service";
@graphql.Resolver(() => Payment)
export class PaymentResolverBase {
  constructor(protected readonly service: PaymentService) {}

  async _paymentsMeta(
    @graphql.Args() args: PaymentCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Payment])
  async payments(
    @graphql.Args() args: PaymentFindManyArgs
  ): Promise<Payment[]> {
    return this.service.payments(args);
  }

  @graphql.Query(() => Payment, { nullable: true })
  async payment(
    @graphql.Args() args: PaymentFindUniqueArgs
  ): Promise<Payment | null> {
    const result = await this.service.payment(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Payment)
  async createPayment(
    @graphql.Args() args: CreatePaymentArgs
  ): Promise<Payment> {
    return await this.service.createPayment({
      ...args,
      data: {
        ...args.data,

        booking: args.data.booking
          ? {
              connect: args.data.booking,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Payment)
  async updatePayment(
    @graphql.Args() args: UpdatePaymentArgs
  ): Promise<Payment | null> {
    try {
      return await this.service.updatePayment({
        ...args,
        data: {
          ...args.data,

          booking: args.data.booking
            ? {
                connect: args.data.booking,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Payment)
  async deletePayment(
    @graphql.Args() args: DeletePaymentArgs
  ): Promise<Payment | null> {
    try {
      return await this.service.deletePayment(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Booking, {
    nullable: true,
    name: "booking",
  })
  async getBooking(@graphql.Parent() parent: Payment): Promise<Booking | null> {
    const result = await this.service.getBooking(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.Query(() => String)
  async CreatePaymentV1(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.CreatePaymentV1(args);
  }

  @graphql.Mutation(() => Payment)
  async CreatePaymentV1_1234(
    @graphql.Args()
    args: PaymentCreateInput
  ): Promise<Payment> {
    return this.service.CreatePaymentV1_1234(args);
  }
}
