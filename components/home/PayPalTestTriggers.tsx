"use client";

import { Button } from "@/components/ui/button";
import { PayPalTestTriggerItem } from "@/config/paypalTestTriggers";
import { Copy, ExternalLink } from "lucide-react";
import { useState } from "react";
import { toast } from "react-hot-toast";

const copyToClipboard = async (text: string) => {
  await navigator.clipboard.writeText(text);
  toast.success("PayPal trigger copied", {
    icon: "✂️",
  });
};

const PayPalTestTriggers = ({
  items,
  locale,
}: {
  items: PayPalTestTriggerItem[];
  locale: any;
}) => {
  const [copiedStates, setCopiedStates] = useState<{ [key: string]: boolean }>({});

  const handleCopy = async (code: string) => {
    await copyToClipboard(code);
    setCopiedStates((prev) => ({ ...prev, [code]: true }));
    setTimeout(() => {
      setCopiedStates((prev) => ({ ...prev, [code]: false }));
    }, 2000);
  };

  return (
    <div className="mt-6 rounded-2xl border border-default-200 bg-background p-5 shadow-sm">
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between gap-3">
          <h4 className="text-sm font-medium uppercase tracking-[0.16em] text-primary">
            {locale.title}
          </h4>
          <Button asChild size="sm" variant="outline">
            <a href={items[0]?.docsUrl} target="_blank" rel="noreferrer">
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

      <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-2">
        {items.map((item) => (
          <div
            key={item.code}
            className="rounded-2xl border border-default-200 bg-background p-5 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <p className="text-sm font-medium uppercase tracking-[0.16em] text-primary">
                  {item.label}
                </p>
                <p className="mt-3 font-mono text-base md:text-lg font-semibold tracking-[0.08em] text-foreground break-words">
                  {item.code}
                </p>
              </div>
              <Button
                size="sm"
                variant="outline"
                onClick={() => handleCopy(item.code)}
                className="shrink-0"
              >
                <Copy className="mr-2 h-4 w-4" />
                {copiedStates[item.code] ? locale.copiedLabel : locale.copyLabel}
              </Button>
            </div>

            <p className="mt-4 text-sm leading-6 text-default-600">
              {item.description}
            </p>

            <p className="mt-4 text-sm leading-6 text-default-600">
              {item.outcome}
            </p>

            <div className="mt-5 grid gap-3 rounded-xl bg-default-100/70 p-4 text-sm text-default-700">
              <p>
                <span className="font-semibold text-foreground">Response code:</span>{" "}
                {item.responseCode}
              </p>
              <p>
                <span className="font-semibold text-foreground">Processor code:</span>{" "}
                {item.codeDescription}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PayPalTestTriggers;
