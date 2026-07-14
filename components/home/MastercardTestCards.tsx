"use client";

import { Button } from "@/components/ui/button";
import {
  MASTERCARD_COUNTRY_TEST_CARDS,
  MASTERCARD_FUNDS_AVAILABILITY,
  MASTERCARD_TEST_CARDS_SOURCE_URL,
  MastercardFundsAvailabilityKey,
} from "@/config/mastercardTestCards";
import * as Accordion from "@radix-ui/react-accordion";
import { Check, ChevronDown, Copy, ExternalLink, Info } from "lucide-react";
import { useState } from "react";
import { toast } from "react-hot-toast";

const formatCardNumber = (cardNumber: string) =>
  cardNumber.replace(/(\d{4})(?=\d)/g, "$1 ").trim();

const replaceCount = (label: string, count: number) =>
  label.replace("{count}", String(count));

const MastercardTestCards = ({
  id,
  locale,
}: {
  id?: string;
  locale?: any;
}) => {
  const [copiedStates, setCopiedStates] = useState<Record<string, boolean>>({});

  const copyLabel = locale?.copyLabel || "Copy";
  const copiedLabel = locale?.copiedLabel || "Copied";

  const handleCopy = async (cardNumber: string, stateKey: string) => {
    try {
      await navigator.clipboard.writeText(cardNumber);
      toast.success(locale?.copySuccess || "Mastercard test card copied", {
        icon: "✂️",
      });
      setCopiedStates((previous) => ({ ...previous, [stateKey]: true }));
      window.setTimeout(() => {
        setCopiedStates((previous) => ({ ...previous, [stateKey]: false }));
      }, 2000);
    } catch {
      toast.error(locale?.copyError || "Unable to copy");
    }
  };

  const renderCopyButton = (cardNumber: string, stateKey: string) => {
    const copied = copiedStates[stateKey];

    return (
      <Button
        size="sm"
        variant="outline"
        onClick={() => handleCopy(cardNumber, stateKey)}
        aria-label={`${copyLabel} ${cardNumber}`}
        className="h-8 shrink-0 gap-1.5 px-2.5 text-xs"
      >
        {copied ? (
          <Check className="h-3.5 w-3.5" aria-hidden="true" />
        ) : (
          <Copy className="h-3.5 w-3.5" aria-hidden="true" />
        )}
        <span>{copied ? copiedLabel : copyLabel}</span>
      </Button>
    );
  };

  const renderCardList = (
    cardNumbers: string[],
    country: string,
    cardType: "consumer" | "commercial",
  ) => {
    if (cardNumbers.length === 0) {
      return (
        <p className="rounded-xl border border-dashed border-default-200 bg-background p-4 text-sm text-default-500">
          {locale?.noCards || "No cards listed"}
        </p>
      );
    }

    return (
      <ul className="space-y-2">
        {cardNumbers.map((cardNumber, index) => {
          const stateKey = `mastercard-${country}-${cardType}-${index}`;

          return (
            <li
              key={stateKey}
              className="flex min-w-0 items-center justify-between gap-3 rounded-xl border border-default-200 bg-background px-3 py-2.5"
            >
              <span
                dir="ltr"
                className="min-w-0 break-all font-mono text-sm font-semibold tracking-wide text-foreground sm:text-base"
              >
                {formatCardNumber(cardNumber)}
              </span>
              {renderCopyButton(cardNumber, stateKey)}
            </li>
          );
        })}
      </ul>
    );
  };

  const availabilityLabels: Record<MastercardFundsAvailabilityKey, string> = {
    nextBusinessDay: locale?.nextBusinessDay || "Next Business Day",
    twoToFiveBusinessDays:
      locale?.twoToFiveBusinessDays || "Two to Five Business Days",
    immediate: locale?.immediate || "Immediate",
  };

  return (
    <article
      id={id}
      className="scroll-mt-24 rounded-2xl border border-default-200 bg-background p-6 shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h3 className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
            {locale?.title || "Mastercard Test Cards"}
          </h3>
          <Button asChild size="sm" variant="outline" className="self-start">
            <a
              href={MASTERCARD_TEST_CARDS_SOURCE_URL}
              target="_blank"
              rel="noreferrer"
            >
              {locale?.sourceLabel || "Mastercard docs"}
              <ExternalLink className="ml-2 h-4 w-4" aria-hidden="true" />
            </a>
          </Button>
        </div>

        <p className="text-sm leading-6 text-default-600">
          {locale?.description ||
            "Official debit card numbers for the Mastercard Sandbox and MTF environments. The source does not provide expiry dates or CVV values."}
        </p>
        <p className="rounded-xl border border-primary/20 bg-primary/5 px-4 py-3 text-sm text-default-700">
          {locale?.helperText ||
            "Use only published test card numbers in Sandbox or MTF environments. Never use real consumer card numbers for testing."}
        </p>
      </div>

      <Accordion.Root type="multiple" className="mt-6 space-y-3">
        {MASTERCARD_COUNTRY_TEST_CARDS.map((countryCards) => (
          <Accordion.Item
            key={countryCards.country}
            value={countryCards.country}
            className="overflow-hidden rounded-xl border border-default-200 bg-default-100/40"
          >
            <Accordion.Header>
              <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 px-4 py-4 text-left transition-colors hover:bg-default-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset sm:px-5">
                <span className="font-semibold text-foreground">
                  {countryCards.country}
                </span>
                <span className="flex items-center gap-2">
                  <span className="hidden rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary sm:inline-flex">
                    {replaceCount(
                      locale?.consumerCount || "{count} consumer",
                      countryCards.consumerCards.length,
                    )}
                  </span>
                  <span className="hidden rounded-full bg-default-200 px-2.5 py-1 text-xs font-medium text-default-700 sm:inline-flex">
                    {replaceCount(
                      locale?.commercialCount || "{count} commercial",
                      countryCards.commercialCards.length,
                    )}
                  </span>
                  <ChevronDown
                    className="h-5 w-5 text-default-500 transition-transform duration-200 group-data-[state=open]:rotate-180"
                    aria-hidden="true"
                  />
                </span>
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="overflow-hidden border-t border-default-200 data-[state=closed]:animate-accordionUp data-[state=open]:animate-accordionDown">
              <div className="grid gap-6 p-4 md:grid-cols-2 sm:p-5">
                <div className="min-w-0 space-y-3">
                  <h4 className="text-sm font-semibold uppercase tracking-wide text-primary">
                    {locale?.consumerCards || "Consumer Card Numbers"}
                  </h4>
                  {renderCardList(
                    countryCards.consumerCards,
                    countryCards.country,
                    "consumer",
                  )}
                </div>
                <div className="min-w-0 space-y-3">
                  <h4 className="text-sm font-semibold uppercase tracking-wide text-primary">
                    {locale?.commercialCards || "Commercial Card Numbers"}
                  </h4>
                  {renderCardList(
                    countryCards.commercialCards,
                    countryCards.country,
                    "commercial",
                  )}
                </div>
              </div>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>

      <div className="mt-8 space-y-4">
        <h4 className="text-lg font-semibold text-foreground">
          {locale?.fundsTitle ||
            "Card Numbers for Different Funds Availability Options"}
        </h4>
        <div className="relative max-w-full overflow-x-auto rounded-xl border border-default-200">
          <table className="w-full min-w-[620px] border-collapse text-left text-sm">
            <thead className="bg-default-100 text-default-700">
              <tr>
                <th scope="col" className="px-4 py-3 font-semibold sm:px-5">
                  {locale?.cardNumber || "Card Number"}
                </th>
                <th scope="col" className="px-4 py-3 font-semibold sm:px-5">
                  {locale?.fundsAvailability || "Funds availability"}
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 text-right font-semibold sm:px-5"
                >
                  <span className="sr-only">{copyLabel}</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-default-200 bg-background">
              {MASTERCARD_FUNDS_AVAILABILITY.map((item, index) => {
                const stateKey = `mastercard-funds-${index}`;

                return (
                  <tr key={stateKey} className="align-middle">
                    <td className="px-4 py-3 sm:px-5">
                      {item.cardNumber ? (
                        <span
                          dir="ltr"
                          className="font-mono font-semibold tracking-wide text-foreground"
                        >
                          {formatCardNumber(item.cardNumber)}
                        </span>
                      ) : (
                        <span className="text-default-700">
                          {locale?.anyOtherPublishedCard ||
                            "Any other card number published on Mastercard Developers"}
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-default-600 sm:px-5">
                      {availabilityLabels[item.availability]}
                    </td>
                    <td className="px-4 py-3 text-right sm:px-5">
                      {item.cardNumber &&
                        renderCopyButton(item.cardNumber, stateKey)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-6 flex items-start gap-3 rounded-xl border border-default-200 bg-default-100/60 p-4 text-sm leading-6 text-default-700">
        <Info className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
        <p>
          {locale?.warning ||
            "These numbers are for Mastercard test environments only and cannot be used for real transactions."}
        </p>
      </div>
    </article>
  );
};

export default MastercardTestCards;
