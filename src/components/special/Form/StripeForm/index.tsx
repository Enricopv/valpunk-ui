import Grid from "@material-ui/core/Grid";
import * as React from "react";
import {
  CardCVCElement,
  CardExpiryElement,
  CardNumberElement,
  Elements,
  injectStripe,
  PostalCodeElement,
  StripeProvider
} from "react-stripe-elements-universal";
import "./StripeForm.css";

interface Props {
  stripe?: any;
  stripePublicKey?: string;
}

interface State {
  token?: string;
  error?: StripeError;
}

interface StripeError {
  code: string;
  message: string;
  type: string;
}

const StripeBase = ({ stripePublicKey }: { stripePublicKey?: string }) => {
  return (
    <StripeProvider
      apiKey={stripePublicKey || "pk_test_jMIY8KQvJKlOkWvYBVMdhAmz"}
    >
      <Elements>
        <InjectedStripeForm />
      </Elements>
    </StripeProvider>
  );
};

export default StripeBase;

const StripeForm = ({ stripe }: Props) => {
  const handleSubmit = (ev: any) => {
    ev.preventDefault();

    stripe.createSource().then((payload: any) => {
      if (payload.error) {
      } else {
        console.log("source", payload.token.id);
      }
    });
  };

  const inputProps = {
    className: "stripeInput",
    onBlur: () => {
      console.log("[blur]");
    },
    onChange: (data: any) => {
      console.log(data);
    },
    onFocus: () => {
      console.log("[focus]");
    },
    onReady: () => {
      console.log("[ready]");
    },
    style: {
      base: {
        fontSize: "14px",
        color: "#424770",
        letterSpacing: "0.025em",
        fontFamily: "Source Code Pro, monospace",
        "::placeholder": {
          color: "#aab7c4"
        }
      },
      invalid: {
        color: "#9e2146"
      }
    }
  };

  return (
    <Grid
      container
      style={{
        padding: 10,
        backgroundColor: "#F5F9FC",
        boxShadow: "1px 1px 3px rgba(0,0,0,0.4)"
      }}
      className="Checkout"
    >
      <form onSubmit={handleSubmit} style={{ width: "100%", marginTop: 25 }}>
        <label className="stripeLabel">
          Card number
          <CardNumberElement {...inputProps} />
        </label>
        <label className="stripeLabel">
          Expiration date
          <CardExpiryElement {...inputProps} />
        </label>
        <label className="stripeLabel">
          CVC
          <CardCVCElement {...inputProps} />
        </label>
        <label className="stripeLabel">
          Postal code
          <PostalCodeElement {...inputProps} />
        </label>
        <button className="stripeButton">Verify</button>
      </form>
      <div
        style={{
          color: "#6971DE",
          fontWeight: "bold",
          textAlign: "center",
          width: "100%"
        }}
      >
        Powered By Stripe
      </div>
    </Grid>
  );
};

const InjectedStripeForm = injectStripe(StripeForm);
