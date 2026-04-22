"use client";

import { Button } from "@/components/ui/button";
import { PAYPAL_TEST_TRIGGERS } from "@/config/paypalTestTriggers";
import { STRIPE_SUCCESS_TEST_CARDS } from "@/config/stripeTestCards";
import { Copy, ExternalLink } from "lucide-react";
import PayPalTestTriggers from "@/components/home/PayPalTestTriggers";
import StripeTestCards from "@/components/home/StripeTestCards";
import { useState } from "react";
import { toast } from "react-hot-toast";

interface TestCard {
  provider: string;
  docsUrl?: string;
  cards: {
    number: string;
    copyValue?: string;
    name: string;
    expiry: string;
    cvv: string;
    description?: string;
  }[];
}

const testCards: TestCard[] = [
  {
    provider: "PayPal Test Cards",
    cards: [
      {
        number: "4111 1111 1111 1111",
        name: "PayPal Test",
        expiry: "12/34",
        cvv: "123",
        description: "PayPal sandbox card"
      },
      {
        number: "4000 0000 0000 0000",
        name: "Declined PayPal",
        expiry: "12/34",
        cvv: "123",
        description: "Simulates declined transaction"
      }
    ]
  },
  {
    provider: "Braintree Test Cards",
    cards: [
      {
        number: "4111 1111 1111 1111",
        name: "Braintree Default",
        expiry: "12/25",
        cvv: "123",
        description: "Mastercard test card"
      },
      {
        number: "6011 1111 1111 1117",
        name: "Discover",
        expiry: "12/25",
        cvv: "123",
        description: "Discover test card"
      },
      {
        number: "3530 1111 1111 1113",
        name: "JCB",
        expiry: "12/25",
        cvv: "123",
        description: "JCB test card"
      },
      {
        number: "5105 1051 0510 5100",
        name: "Maestro",
        expiry: "12/25",
        cvv: "123",
        description: "Maestro test card"
      }
    ]
  }
];

const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text);
  toast.success("Copied!", {
    icon: "✂️",
  });
};

const TestCardsSection = ({
  id,
  locale,
  stripeLocale,
}: {
  id?: string;
  locale: any;
  stripeLocale?: any;
}) => {
  const [copiedStates, setCopiedStates] = useState<{[key: string]: boolean}>({});
  const providerGroups = testCards.map((providerGroup) => {
    if (providerGroup.provider === "PayPal Test Cards") {
      return {
        ...providerGroup,
        provider: locale.paypal_cards,
      };
    }

    return {
      ...providerGroup,
      provider: locale.braintree_cards,
    };
  });

  const handleCopy = (cardNumber: string, type: string) => {
    const key = `${cardNumber}-${type}`;
    copyToClipboard(type === "number" ? cardNumber : type);
    setCopiedStates(prev => ({ ...prev, [key]: true }));
    setTimeout(() => {
      setCopiedStates(prev => ({ ...prev, [key]: false }));
    }, 2000);
  };

  return (
    <section id={id} className="w-full max-w-6xl mx-auto px-4 py-16 md:py-20">
      <div className="flex flex-col gap-4 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          {locale.test_card_title}
        </h2>
        <p className="text-lg text-default-600">{locale.test_card_description}</p>
        <p className="rounded-xl border border-primary/20 bg-primary/5 px-4 py-3 text-sm text-default-700">
          {locale.test_card_notice}
        </p>
      </div>

      <nav className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Button asChild variant="outline" size="sm">
          <a href="#StripeTestCards">{locale.stripe_cards}</a>
        </Button>
        <Button asChild variant="outline" size="sm">
          <a href="#PayPalTestCards">{locale.paypal_cards}</a>
        </Button>
        <Button asChild variant="outline" size="sm">
          <a href="#BraintreeTestCards">{locale.braintree_cards}</a>
        </Button>
      </nav>

      <div className="mt-10 flex flex-col gap-6">
        <StripeTestCards
          id="StripeTestCards"
          cards={STRIPE_SUCCESS_TEST_CARDS}
          providerLabel={locale.stripe_cards}
          locale={{
            title: stripeLocale?.title || locale.stripe_cards,
            description:
              stripeLocale?.description ||
              locale.stripe_cards_description ||
              "Expanded Stripe success-test cards by brand, debit, prepaid, and card format.",
            helperText:
              stripeLocale?.helperText ||
              locale.stripe_cards_helper ||
              "Use these official Stripe card numbers in sandbox or test mode. They are for successful brand-based payment testing only.",
            copyLabel: stripeLocale?.copyLabel || locale.test_card_copy_button || "Copy",
            copiedLabel:
              stripeLocale?.copiedLabel || locale.test_card_copied_button || "Copied",
            sourceLabel: stripeLocale?.sourceLabel || locale.stripe_docs_label || "Stripe docs",
          }}
        />
        {providerGroups.map((providerGroup, providerIndex) => (
          <article
            key={providerIndex}
            id={providerGroup.provider === locale.paypal_cards ? "PayPalTestCards" : "BraintreeTestCards"}
            className="rounded-2xl border border-default-200 bg-background p-6 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                  {providerGroup.provider}
                </p>
              </div>
              <div className="flex items-center gap-2">
                {providerGroup.docsUrl && (
                  <Button asChild size="sm" variant="outline">
                    <a href={providerGroup.docsUrl} target="_blank" rel="noreferrer">
                      {locale.stripe_docs_label}
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                )}
              </div>
            </div>

            <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
              {providerGroup.cards.map((card, cardIndex) => (
                <div
                  key={cardIndex}
                  className="rounded-2xl border border-default-200 bg-background p-5 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <p className="text-sm font-medium uppercase tracking-[0.16em] text-primary">
                        {card.name}
                      </p>
                      <p className="mt-3 font-mono text-lg md:text-xl font-semibold tracking-[0.12em] text-foreground break-words">
                        {card.number}
                      </p>
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleCopy(card.copyValue ?? card.number, "number")}
                      className="shrink-0"
                    >
                      <Copy className="mr-2 h-4 w-4" />
                      {copiedStates[`${card.copyValue ?? card.number}-number`] ? (
                        <span>{locale.test_card_copied_button}</span>
                      ) : (
                        <span>{locale.test_card_copy_button}</span>
                      )}
                    </Button>
                  </div>

                  {card.description && (
                    <p className="mt-4 text-sm leading-6 text-default-600">
                      {card.description}
                    </p>
                  )}

                  <div className="mt-5 grid gap-3 rounded-xl bg-default-100/70 p-4 text-sm text-default-700">
                    <p>
                      <span className="font-semibold text-foreground">CVC:</span>{" "}
                      {card.cvv}
                    </p>
                    <p>
                      <span className="font-semibold text-foreground">Date:</span>{" "}
                      {card.expiry}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {providerGroup.provider === locale.paypal_cards && (
              <PayPalTestTriggers
                items={PAYPAL_TEST_TRIGGERS}
                locale={{
                  title:
                    locale.paypal_triggers_title || "PayPal Test Triggers",
                  description:
                    locale.paypal_triggers_description ||
                    "Use these sandbox trigger values to simulate rejected card payments in PayPal checkout flows.",
                  helperText:
                    locale.paypal_triggers_helper ||
                    "Enter the trigger in the cardholder name field while using a sandbox Visa card with a future date and any valid CVV.",
                  copyLabel: locale.test_card_copy_button || "Copy",
                  copiedLabel: locale.test_card_copied_button || "Copied",
                  sourceLabel: locale.paypal_triggers_source || "PayPal docs",
                }}
              />
            )}
          </article>
        ))}
      </div>
    </section>
  );
};

export default TestCardsSection;
