"use client";

import { Button } from "@/components/ui/button";
import { StripeTestCardItem } from "@/config/stripeTestCards";
import { Copy, ExternalLink } from "lucide-react";
import { useState } from "react";
import { toast } from "react-hot-toast";

const formatCardNumber = (brand: string, number: string) => {
  if (brand === "American Express" && number.length === 15) {
    return `${number.slice(0, 4)} ${number.slice(4, 10)} ${number.slice(10)}`;
  }

  return number.replace(/(\d{4})(?=\d)/g, "$1 ").trim();
};

const copyToClipboard = async (number: string) => {
  await navigator.clipboard.writeText(number);
  toast.success("Stripe test card copied", {
    icon: "✂️",
  });
};

const StripeTestCards = ({
  id,
  cards,
  locale,
  providerLabel,
}: {
  id?: string;
  cards: StripeTestCardItem[];
  locale: any;
  providerLabel: string;
}) => {
  const [copiedStates, setCopiedStates] = useState<{ [key: string]: boolean }>({});

  const handleCopy = async (number: string) => {
    await copyToClipboard(number);
    setCopiedStates((prev) => ({ ...prev, [number]: true }));
    setTimeout(() => {
      setCopiedStates((prev) => ({ ...prev, [number]: false }));
    }, 2000);
  };

  return (
    <article
      id={id}
      className="rounded-2xl border border-default-200 bg-background p-6 shadow-sm transition-shadow hover:shadow-md scroll-mt-24"
    >
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
            {providerLabel}
          </h3>
          <Button asChild size="sm" variant="outline">
            <a href={cards[0]?.docsUrl} target="_blank" rel="noreferrer">
              {locale.sourceLabel}
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>

        <p className="text-sm text-default-600">{locale.description}</p>
        <p className="rounded-xl border border-primary/20 bg-primary/5 px-4 py-3 text-sm text-default-700">
          {locale.helperText}
        </p>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {cards.map((card) => {
          const title = card.label || card.brand;
          return (
            <div
              key={`${card.brand}-${card.number}`}
              className="rounded-2xl border border-default-200 bg-background p-5 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <p className="text-sm font-medium uppercase tracking-[0.16em] text-primary">
                    {title}
                  </p>
                  <p className="mt-3 font-mono text-lg md:text-xl font-semibold tracking-[0.12em] text-foreground break-words">
                    {formatCardNumber(card.brand, card.number)}
                  </p>
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => handleCopy(card.number)}
                  className="shrink-0"
                >
                  <Copy className="mr-2 h-4 w-4" />
                  {copiedStates[card.number] ? locale.copiedLabel : locale.copyLabel}
                </Button>
              </div>

              <p className="mt-4 text-sm leading-6 text-default-600">
                {card.description}
              </p>

              <div className="mt-5 grid gap-3 rounded-xl bg-default-100/70 p-4 text-sm text-default-700">
                <p>
                  <span className="font-semibold text-foreground">CVC:</span>{" "}
                  {card.cvcRule}
                </p>
                <p>
                  <span className="font-semibold text-foreground">Date:</span>{" "}
                  {card.dateRule}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </article>
  );
};

export default StripeTestCards;
