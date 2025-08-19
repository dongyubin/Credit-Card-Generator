"use client";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { unparse } from 'papaparse';
import { useEffect, useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { create } from 'xmlbuilder2';

const downloadBlob = (blob: Blob, filename: string) => {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
};

const exportJSON = (data: any[]) => {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  downloadBlob(blob, 'test-cards.json');
};

const exportCSV = (data: any[]) => {
  const csv = unparse(data);
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  downloadBlob(blob, 'test-cards.csv');
};

const exportXML = (data: any[]) => {
  const root = create({ version: '1.0' })
    .ele('cards')
    .att('generated', new Date().toISOString());
  data.forEach((c, i) => {
    root.ele('card', { id: i + 1 })
      .ele('number').txt(c.number).up()
      .ele('name').txt(c.name).up()
      .ele('expiry').txt(c.expiryDate).up()
      .ele('cvv').txt(c.ccv).up()
      .ele('type').txt(c.type).up();
  });
  const xml = root.end({ prettyPrint: true });
  const blob = new Blob([xml], { type: 'application/xml' });
  downloadBlob(blob, 'test-cards.xml');
};

const cardPrefixes: { [key: string]: string } = {
  'Visa': '4',
  'MasterCard': '5',
  'American Express': '3',
  'Discover': '6',
  'JCB': '3',
  'RuPay': '6',
  'China Union Pay': '6',
  'Diners Club International': '3',
  'Maestro': '6',
};

const randomNames = [
  "John Doe", "Jane Smith", "Alice Johnson", "Robert Brown",
  "Michael Davis", "Emily Wilson", "Daniel Moore", "Sophia White"
];

const generateRandomNumber = (length: number): string => {
  let result = '';
  for (let i = 0; i < length; i++) {
    result += Math.floor(Math.random() * 10).toString();
  }
  return result;
}

const generateCreditCardNumber = (cardType: string): string => {
  const prefix = cardPrefixes[cardType];
  const length = cardType === 'American Express' ? 15 : 16;
  const middle = generateRandomNumber(length - 1);
  const cardNumber = prefix + middle;
  return cardNumber;
}

const generateName = (): string => {
  return randomNames[Math.floor(Math.random() * randomNames.length)];
}

const generateCCVCode = (cardType: string): string => {
  const length = cardType === 'American Express' ? 4 : 3;
  return generateRandomNumber(length);
}

const generateExpiryDate = (): string => {
  const now = new Date();
  const futureYear = now.getFullYear() + (Math.floor(Math.random() * 5) + 1);
  const futureMonth = (Math.floor(Math.random() * 12) + 1).toString().padStart(2, '0');
  return `${futureMonth}/${futureYear.toString().slice(-2)}`;
}

const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text);
  toast.success("Copied!", {
    icon: "✂️",
  });
}

const CreditCard = ({ id, locale }: { id: string; locale: any; }) => {
  const [creditCardDetails, setCreditCardDetails] = useState<any[]>([]);
  const [selectedCardType, setSelectedCardType] = useState<string>('Visa');
  const [batchSize, setBatchSize] = useState<number>(1);

  useEffect(() => {
    const allCardTypesDetails = Object.keys(cardPrefixes).map(cardType => ({
      number: generateCreditCardNumber(cardType),
      name: generateName(),
      ccv: generateCCVCode(cardType),
      type: cardType,
      expiryDate: generateExpiryDate(),
    }));
    setCreditCardDetails(allCardTypesDetails);
  }, []);

  const handleGenerate = () => {
    const newCardDetails = Array.from({ length: batchSize }, () => ({
      number: generateCreditCardNumber(selectedCardType),
      name: generateName(),
      ccv: generateCCVCode(selectedCardType),
      type: selectedCardType,
      expiryDate: generateExpiryDate(),
    }));
    setCreditCardDetails(newCardDetails);
  };

  return (
    <section className="flex flex-col justify-center max-w-[88%] items-center py-32 gap-12">
      <Toaster position="top-center" reverseOrder={false} />
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
        {creditCardDetails.length > 0 && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
              {creditCardDetails.map((detail, index) => (
                <div key={index} className="relative bg-gradient-to-r from-purple-500 to-indigo-500 p-6 rounded-lg shadow-xl text-left text-white">
                  <div className="absolute top-2 right-2 text-xs text-gray-200">{detail.type}</div>
                  <div
                    className="mb-2 cursor-pointer"
                    onClick={() => copyToClipboard(detail.number)}
                    title="Click to copy"
                  >
                    <p className="font-mono text-lg">Card Number: {detail.number}</p>
                  </div>
                  <div
                    className="mb-2 cursor-pointer"
                    onClick={() => copyToClipboard(detail.name)}
                    title="Click to copy"
                  >
                    <p className="font-mono text-lg">Name: {detail.name}</p>
                  </div>
                  <div
                    className="mb-2 cursor-pointer"
                    onClick={() => copyToClipboard(detail.expiryDate)}
                    title="Click to copy"
                  >
                    <p className="font-mono text-lg">Good Thru: {detail.expiryDate}</p>
                  </div>
                  <div
                    className="cursor-pointer"
                    onClick={() => copyToClipboard(detail.ccv)}
                    title="Click to copy"
                  >
                    <p className="font-mono text-lg">CVV/CVV2: {detail.ccv}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              <Button onClick={() => exportJSON(creditCardDetails)} variant="outline">
                Export JSON
              </Button>
              <Button onClick={() => exportCSV(creditCardDetails)} variant="outline">
                Export CSV
              </Button>
              <Button onClick={() => exportXML(creditCardDetails)} variant="outline">
                Export XML
              </Button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default CreditCard;