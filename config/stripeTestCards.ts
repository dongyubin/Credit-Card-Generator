export interface StripeTestCardItem {
  brand: string;
  number: string;
  cvcRule: string;
  dateRule: string;
  description: string;
  docsUrl: string;
}

const STRIPE_TESTING_DOCS_URL = "https://docs.stripe.com/testing";

export const STRIPE_SUCCESS_TEST_CARDS: StripeTestCardItem[] = [
  {
    brand: "Visa",
    number: "4242424242424242",
    cvcRule: "Any 3 digits",
    dateRule: "Any future date",
    description: "Use for a standard successful card payment in Stripe test mode.",
    docsUrl: STRIPE_TESTING_DOCS_URL,
  },
  {
    brand: "Mastercard",
    number: "5555555555554444",
    cvcRule: "Any 3 digits",
    dateRule: "Any future date",
    description: "Use to validate successful card flows for Mastercard in Stripe.",
    docsUrl: STRIPE_TESTING_DOCS_URL,
  },
  {
    brand: "American Express",
    number: "378282246310005",
    cvcRule: "Any 4 digits",
    dateRule: "Any future date",
    description: "Use to test Amex-specific form handling, including 4-digit CVC input.",
    docsUrl: STRIPE_TESTING_DOCS_URL,
  },
  {
    brand: "Discover",
    number: "6011111111111117",
    cvcRule: "Any 3 digits",
    dateRule: "Any future date",
    description: "Use to confirm Discover brand support in Stripe checkout flows.",
    docsUrl: STRIPE_TESTING_DOCS_URL,
  },
];
