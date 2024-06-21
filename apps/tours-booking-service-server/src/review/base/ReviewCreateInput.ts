/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CustomerWhereUniqueInput } from "../../customer/base/CustomerWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { TourWhereUniqueInput } from "../../tour/base/TourWhereUniqueInput";

@InputType()
class ReviewCreateInput {
  @ApiProperty({
    required: false,
    type: () => CustomerWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CustomerWhereUniqueInput)
  @IsOptional()
  @Field(() => CustomerWhereUniqueInput, {
    nullable: true,
  })
  customer?: CustomerWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => TourWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TourWhereUniqueInput)
  @IsOptional()
  @Field(() => TourWhereUniqueInput, {
    nullable: true,
  })
  tour?: TourWhereUniqueInput | null;
}

export { ReviewCreateInput as ReviewCreateInput };
