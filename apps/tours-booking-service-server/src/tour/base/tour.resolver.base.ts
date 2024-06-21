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
import { Tour } from "./Tour";
import { TourCountArgs } from "./TourCountArgs";
import { TourFindManyArgs } from "./TourFindManyArgs";
import { TourFindUniqueArgs } from "./TourFindUniqueArgs";
import { CreateTourArgs } from "./CreateTourArgs";
import { UpdateTourArgs } from "./UpdateTourArgs";
import { DeleteTourArgs } from "./DeleteTourArgs";
import { BookingFindManyArgs } from "../../booking/base/BookingFindManyArgs";
import { Booking } from "../../booking/base/Booking";
import { ReviewFindManyArgs } from "../../review/base/ReviewFindManyArgs";
import { Review } from "../../review/base/Review";
import { TourCreateInput } from "./TourCreateInput";
import { TourService } from "../tour.service";
@graphql.Resolver(() => Tour)
export class TourResolverBase {
  constructor(protected readonly service: TourService) {}

  async _toursMeta(
    @graphql.Args() args: TourCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Tour])
  async tours(@graphql.Args() args: TourFindManyArgs): Promise<Tour[]> {
    return this.service.tours(args);
  }

  @graphql.Query(() => Tour, { nullable: true })
  async tour(@graphql.Args() args: TourFindUniqueArgs): Promise<Tour | null> {
    const result = await this.service.tour(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Tour)
  async createTour(@graphql.Args() args: CreateTourArgs): Promise<Tour> {
    return await this.service.createTour({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Tour)
  async updateTour(@graphql.Args() args: UpdateTourArgs): Promise<Tour | null> {
    try {
      return await this.service.updateTour({
        ...args,
        data: args.data,
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

  @graphql.Mutation(() => Tour)
  async deleteTour(@graphql.Args() args: DeleteTourArgs): Promise<Tour | null> {
    try {
      return await this.service.deleteTour(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Booking], { name: "bookings" })
  async findBookings(
    @graphql.Parent() parent: Tour,
    @graphql.Args() args: BookingFindManyArgs
  ): Promise<Booking[]> {
    const results = await this.service.findBookings(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [Review], { name: "reviews" })
  async findReviews(
    @graphql.Parent() parent: Tour,
    @graphql.Args() args: ReviewFindManyArgs
  ): Promise<Review[]> {
    const results = await this.service.findReviews(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.Query(() => String)
  async CreateTourV1(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.CreateTourV1(args);
  }

  @graphql.Mutation(() => Tour)
  async CreateTourV1_1234(
    @graphql.Args()
    args: TourCreateInput
  ): Promise<Tour> {
    return this.service.CreateTourV1_1234(args);
  }
}
