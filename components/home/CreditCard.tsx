"use client";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from 'react';
import { toast } from "react-hot-toast";
const cardPrefixes: { [key: string]: string } = {
  'Visa': '4',
  'MasterCard': '5',
  'American Express': '3',
  'Discover': '6',
  'JCB': '3',
  'RuPay': '6',
  'China Union Pay': '6',
  'Diners Club International': '3',
  'Diners Club': '3', // 保留旧的Diners Club，为了兼容性
  'Maestro': '6'
};

const generateRandomNumber = (length: number): string => {
  let result = '';
  for (let i = 0; i < length; i++) {
    result += Math.floor(Math.random() * 10).toString();
  }
  return result;
}

const generateCreditCardNumber = (cardType: string): string => {
  const prefix = cardPrefixes[cardType];
  const length = cardType === 'American Express' ? 15 : 16; // American Express has 15 digits
  const middle = generateRandomNumber(length - 1);
  const cardNumber = prefix + middle;
  return cardNumber;
}

const CreditCard = ({ id, locale }: { id: string; locale: any; }) => {
  const [creditCardNumbers, setCreditCardNumbers] = useState<string[]>([]);
  const [selectedCardType, setSelectedCardType] = useState<string>('Visa');
  const [batchSize, setBatchSize] = useState<number>(1);

  const handleGenerate = () => {
    const newCardNumbers = Array.from({ length: batchSize }, () => generateCreditCardNumber(selectedCardType));
    setCreditCardNumbers(newCardNumbers);
  };

  const handleCopy = () => {
    const cardNumbersText = creditCardNumbers.join('\n');
    navigator.clipboard.writeText(cardNumbersText);
    toast("Copied!", {
      icon: "✂️",
    });
  };

  return (
    <section className="flex flex-col justify-center max-w-[88%] items-center py-32 gap-12">
      <div className="flex flex-col text-center gap-4">
        <h2>{locale.title}</h2>
        <Select onValueChange={(value) => setSelectedCardType(value)}>
          <SelectTrigger>
            <SelectValue placeholder={selectedCardType} />
          </SelectTrigger>
          <SelectContent>
            {Object.keys(cardPrefixes).map((cardType) => (
              <SelectItem key={cardType} value={cardType}>
                {cardType}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <input
          type="number"
          value={batchSize}
          onChange={(e) => setBatchSize(Number(e.target.value))}
          min="1"
          placeholder="Number of Cards"
          className="border p-2 rounded"
        />
        <Button
          onClick={handleGenerate}
          variant="default"
          className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white"
          aria-label="Generate Credit Card Number"
        >
          {locale.generate_credit_card_number}
        </Button>
        {creditCardNumbers.length > 0 && (
          <div>
            <h3>Generated Credit Card Numbers:</h3>
            {creditCardNumbers.map((cardNumber, index) => (
              <div key={index}>{cardNumber}</div>
            ))}
            <Button onClick={handleCopy} className="mt-2">
              Copy All
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}

export default CreditCard;