import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { CenteredForStories } from "~/components/compositions";
import StripeForm from ".";
(storiesOf("Form", module) as any)
  .addDecorator(withInfo({ text: `Description!`, inline: true }))
  .add("Stripe Form", () => (
    <CenteredForStories>
      <StripeForm />
    </CenteredForStories>
  ));
