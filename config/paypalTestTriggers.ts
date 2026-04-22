export interface PayPalTestTriggerItem {
  code: string;
  label: string;
  responseCode: string;
  codeDescription: string;
  description: string;
  outcome: string;
  docsUrl: string;
}

const PAYPAL_CARD_TESTING_DOCS_URL =
  "https://developer.paypal.com/tools/sandbox/card-testing/";

export const PAYPAL_TEST_TRIGGERS: PayPalTestTriggerItem[] = [
  {
    code: "CCREJECT-REFUSED",
    label: "Card refused",
    responseCode: "0500",
    codeDescription: "DO_NOT_HONOR",
    description:
      "Enter this exact trigger in the cardholder name field to simulate a refused card.",
    outcome:
      "Use it to verify that your checkout properly handles a generic refusal from the processor.",
    docsUrl: PAYPAL_CARD_TESTING_DOCS_URL,
  },
  {
    code: "CCREJECT-SF",
    label: "Fraudulent card",
    responseCode: "9500",
    codeDescription: "SUSPECTED_FRAUD",
    description:
      "Use this trigger when you want PayPal sandbox to return a suspected fraud decline.",
    outcome:
      "Useful for testing fraud messaging and non-retry guidance in your payment UI.",
    docsUrl: PAYPAL_CARD_TESTING_DOCS_URL,
  },
  {
    code: "CCREJECT-EC",
    label: "Card expired",
    responseCode: "5400",
    codeDescription: "EXPIRED_CARD",
    description:
      "Simulates an expired card rejection even when the entered expiration date is valid.",
    outcome:
      "Use it to check your expired-card error path and the decline state in the checkout flow.",
    docsUrl: PAYPAL_CARD_TESTING_DOCS_URL,
  },
  {
    code: "CCREJECT-IRC",
    label: "Luhn check fails",
    responseCode: "5180",
    codeDescription: "INVALID_OR_RESTRICTED_CARD",
    description:
      "Returns a failure that mimics an invalid or restricted card validation result.",
    outcome:
      "Helpful for testing invalid-card handling without changing the test card number itself.",
    docsUrl: PAYPAL_CARD_TESTING_DOCS_URL,
  },
  {
    code: "CCREJECT-IF",
    label: "Insufficient funds",
    responseCode: "5120",
    codeDescription: "INSUFFICIENT_FUNDS",
    description:
      "Forces a payment decline caused by insufficient funds on the card account.",
    outcome:
      "Use it to confirm that your UI handles balance-related declines and retry messaging.",
    docsUrl: PAYPAL_CARD_TESTING_DOCS_URL,
  },
  {
    code: "CCREJECT-LS",
    label: "Card lost or stolen",
    responseCode: "9520",
    codeDescription: "LOST_OR_STOLEN",
    description:
      "Returns a decline that simulates a lost or stolen card being blocked by the issuer.",
    outcome:
      "Useful for testing harder-stop declines where the customer should not retry the same card.",
    docsUrl: PAYPAL_CARD_TESTING_DOCS_URL,
  },
  {
    code: "CCREJECT-IA",
    label: "Card not valid",
    responseCode: "1330",
    codeDescription: "INVALID_ACCOUNT",
    description:
      "Simulates an invalid account response from the processor while using a sandbox Visa number.",
    outcome:
      "Use it to verify how your app surfaces invalid-account or invalid-card errors.",
    docsUrl: PAYPAL_CARD_TESTING_DOCS_URL,
  },
  {
    code: "CCREJECT-BANK_ERROR",
    label: "Card is declined",
    responseCode: "5100",
    codeDescription: "GENERIC_DECLINE",
    description:
      "Triggers a generic decline response from the processor for broader failure-path testing.",
    outcome:
      "Good for validating generic decline copy when no more specific issuer detail is available.",
    docsUrl: PAYPAL_CARD_TESTING_DOCS_URL,
  },
  {
    code: "CCREJECT-CVV_F",
    label: "CVC check fails",
    responseCode: "00N7",
    codeDescription: "CVV2_FAILURE_POSSIBLE_RETRY_WITH_CVV",
    description:
      "Simulates a CVV-specific failure while keeping the rest of the card details valid.",
    outcome:
      "Use it to test CVV retry states and messaging in your card form experience.",
    docsUrl: PAYPAL_CARD_TESTING_DOCS_URL,
  },
];
