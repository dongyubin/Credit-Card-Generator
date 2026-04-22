"use client";

import { STRIPE_SUCCESS_TEST_CARDS } from "@/config/stripeTestCards";
import { Button } from "@/components/ui/button";
import { ExternalLink, Copy } from "lucide-react";
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

const StripeTestCards = ({ locale }: { locale: any }) => {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-16 md:py-20">
      <div className="flex flex-col gap-4 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold">{locale.title}</h2>
        <p className="text-lg text-default-600">{locale.description}</p>
        <p className="rounded-xl border border-primary/20 bg-primary/5 px-4 py-3 text-sm text-default-700">
          {locale.helperText}
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
        {STRIPE_SUCCESS_TEST_CARDS.map((card) => (
          <article
            key={card.brand}
            className="rounded-2xl border border-default-200 bg-background p-6 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                  {card.brand}
                </p>
                <p className="mt-3 font-mono text-xl font-semibold tracking-[0.12em] text-foreground">
                  {formatCardNumber(card.brand, card.number)}
                </p>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => copyToClipboard(card.number)}
              >
                <Copy className="mr-2 h-4 w-4" />
                {locale.copyLabel}
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
          </article>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <Button asChild variant="outline">
          <a
            href={STRIPE_SUCCESS_TEST_CARDS[0].docsUrl}
            target="_blank"
            rel="noreferrer"
          >
            {locale.sourceLabel}
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </div>
    </section>
  );
};

export default StripeTestCards;
