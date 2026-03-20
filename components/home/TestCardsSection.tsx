"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { toast } from "react-hot-toast";

interface TestCard {
  provider: string;
  cards: {
    number: string;
    name: string;
    expiry: string;
    cvv: string;
    description?: string;
  }[];
}

const testCards: TestCard[] = [
  {
    provider: "Stripe Test Cards",
    cards: [
      {
        number: "4242 4242 4242 4242",
        name: "Success Card",
        expiry: "04/30",
        cvv: "123",
        description: "This always succeeds"
      },
      {
        number: "4000 0000 0000 0002",
        name: "Declined Card",
        expiry: "04/30",
        cvv: "123",
        description: "This always declines"
      },
      {
        number: "4000 0000 0000 0003",
        name: "Requires Authentication",
        expiry: "04/30",
        cvv: "123",
        description: "3D Secure required"
      },
      {
        number: "4175 0000 0000 0000",
        name: "Charge Card",
        expiry: "04/30",
        cvv: "123",
        description: "Stripe charge card"
      }
    ]
  },
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

const TestCardsSection = ({ id, locale }: { id?: string; locale: any }) => {
  const [copiedStates, setCopiedStates] = useState<{[key: string]: boolean}>({});

  const handleCopy = (cardNumber: string, type: string) => {
    const key = `${cardNumber}-${type}`;
    copyToClipboard(type === "number" ? cardNumber : type);
    setCopiedStates(prev => ({ ...prev, [key]: true }));
    setTimeout(() => {
      setCopiedStates(prev => ({ ...prev, [key]: false }));
    }, 2000);
  };

  return (
    <section id={id} className="flex flex-col justify-center max-w-[88%] items-center py-20 gap-12">
      <div className="flex flex-col text-center gap-4 w-full">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
          {locale.test_card_title}
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">{locale.test_card_description}</p>
      </div>

      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testCards.map((providerGroup, providerIndex) => (
          <Card key={providerIndex} className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white rounded-xl">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-t-xl px-6 py-4 border-b border-gray-100">
              <CardTitle className="text-xl font-bold text-gray-800 flex items-center gap-2">
                <span className={`w-3 h-3 rounded-full ${
                  providerGroup.provider.includes('Stripe') ? 'bg-blue-500' :
                  providerGroup.provider.includes('PayPal') ? 'bg-blue-700' :
                  'bg-purple-500'
                }`}></span>
                {providerGroup.provider}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              {providerGroup.cards.map((card, cardIndex) => (
                <div key={cardIndex} className="bg-gray-50 p-5 rounded-xl hover:bg-gray-100 transition-colors duration-200 border border-gray-200">
                  <div className="flex justify-between items-start">
                    <div className="space-y-3 flex-1">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                          <span className="text-white font-bold text-xs">CC</span>
                        </div>
                        <p className="font-mono text-lg font-semibold text-gray-800 tracking-wide">
                          {card.number}
                        </p>
                      </div>
                      <div className="space-y-2 ml-13">
                        <p className="text-sm font-medium text-gray-700">{card.name}</p>
                        <div className="flex gap-4 text-xs">
                          <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium">
                            {card.expiry}
                          </span>
                          <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full font-medium">
                            {card.cvv}
                          </span>
                        </div>
                        <p className="text-xs text-gray-500 leading-relaxed">{card.description}</p>
                      </div>
                    </div>
                    <Button
                      size="sm"
                      variant="default"
                      onClick={() => handleCopy(card.number, "number")}
                      className="ml-4 px-4 py-2 text-sm font-medium bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
                    >
                      {copiedStates[`${card.number}-number`] ? (
                        <span className="flex items-center gap-1">
                          <span>✓</span>
                          <span>Copied</span>
                        </span>
                      ) : (
                        <span>Copy</span>
                      )}
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center text-sm text-gray-500 mt-8 p-4 bg-gray-50 rounded-lg max-w-2xl">
        <p className="flex items-center justify-center gap-2">
          <span className="text-gray-400">ℹ️</span>
          <span>These are official test cards from payment providers and will not work with real transactions.</span>
        </p>
      </div>
    </section>
  );
};

export default TestCardsSection;