import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { CustomerTitle } from "../customer/CustomerTitle";
import { TourTitle } from "../tour/TourTitle";

export const ReviewCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="customer.id"
          reference="Customer"
          label="Customer"
        >
          <SelectInput optionText={CustomerTitle} />
        </ReferenceInput>
        <ReferenceInput source="tour.id" reference="Tour" label="Tour">
          <SelectInput optionText={TourTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
