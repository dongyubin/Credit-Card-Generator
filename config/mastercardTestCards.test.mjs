import assert from "node:assert/strict";
import test from "node:test";

import {
  MASTERCARD_COUNTRY_TEST_CARDS,
  MASTERCARD_FUNDS_AVAILABILITY,
  MASTERCARD_TEST_CARDS_SOURCE_URL,
} from "./mastercardTestCards.ts";

test("Mastercard country cards match the official source snapshot", () => {
  const cardNumbers = MASTERCARD_COUNTRY_TEST_CARDS.flatMap((country) => [
    ...country.consumerCards,
    ...country.commercialCards,
  ]);
  const duplicateNumbers = cardNumbers.filter(
    (number, index) => cardNumbers.indexOf(number) !== index,
  );

  assert.equal(MASTERCARD_COUNTRY_TEST_CARDS.length, 19);
  assert.equal(cardNumbers.length, 168);
  assert.equal(new Set(cardNumbers).size, 166);
  assert.deepEqual(duplicateNumbers, [
    "5463070430000366",
    "5463070430000846",
  ]);
  assert.deepEqual(MASTERCARD_COUNTRY_TEST_CARDS[0], {
    country: "Bangladesh",
    consumerCards: ["5555500830030331", "5662760010000013"],
    commercialCards: [],
  });
  assert.equal(
    MASTERCARD_COUNTRY_TEST_CARDS.at(-1)?.country,
    "Vietnam",
  );
});

test("Mastercard funds availability table includes both cards and fallback", () => {
  assert.deepEqual(MASTERCARD_FUNDS_AVAILABILITY, [
    {
      cardNumber: "5000333641352301",
      availability: "nextBusinessDay",
    },
    {
      cardNumber: "5000361001156749",
      availability: "twoToFiveBusinessDays",
    },
    {
      label: "anyOtherPublishedCard",
      availability: "immediate",
    },
  ]);
});

test("Mastercard source URL points to the official documentation", () => {
  assert.equal(
    MASTERCARD_TEST_CARDS_SOURCE_URL,
    "https://developer.mastercard.com/mastercard-merchant-presented-qr/documentation/server-apis/test-card-numbers/",
  );
});
