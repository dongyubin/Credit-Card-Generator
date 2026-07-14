# Free Credit Card Generator for Testing — Visa, Mastercard, Amex & More

[English](README.md) | [简体中文](README-zh.md)

A free, browser-based **fake credit card generator and payment test card reference** for developers, QA engineers, and students. Generate dummy card data for form testing, export test datasets as JSON, CSV, or XML, and find test card numbers for Stripe, PayPal, Braintree, and Mastercard sandbox environments.

**Live tool:** [creditcardgenerator.wangdu.site](https://creditcardgenerator.wangdu.site/)

> **Testing only:** Generated numbers and published test cards have no monetary value and cannot be used for real purchases, payments, account verification, or identity verification. Never enter real cardholder data into a test environment.

[![Free credit card generator and payment test cards](./public/og.png)](https://creditcardgenerator.wangdu.site/)

## Find the Right Testing Tool

| If you need to… | Use this feature |
| --- | --- |
| Populate a checkout form or staging database | Generate 1–1,000 dummy cards with a name, expiry date, and CVV/CVC |
| Test a successful Stripe card payment | Browse the Stripe test card collection |
| Simulate PayPal sandbox declines and processor responses | Use the PayPal test cards and trigger values |
| Test Braintree card-brand handling | Use the included Braintree test card examples |
| Test Mastercard Sandbox or MTF integrations | Browse 168 Mastercard records across 19 countries and regions |
| Import test data into development tools | Export the generated dataset as JSON, CSV, or XML |

## Features

- **Bulk dummy card generation:** create between 1 and 1,000 records per batch.
- **Nine card networks:** Visa, Mastercard, American Express, Discover, JCB, RuPay, China UnionPay, Diners Club International, and Maestro.
- **Complete mock records:** each generated item includes a card number, sample cardholder name, future expiry date, CVV/CVC, and network.
- **One-click copy and export:** copy individual values or download JSON, CSV, and XML files.
- **Payment provider test cards:** reference Stripe, PayPal, Braintree, and Mastercard test data without searching across multiple documentation sites.
- **PayPal sandbox triggers:** test refusal, fraud, validation, and processor-response scenarios.
- **Mastercard test card directory:** inspect consumer and commercial cards by country, plus funds-availability test cases.
- **Responsive and multilingual:** use the tool on desktop or mobile in English, Chinese, Japanese, Spanish, Russian, or Arabic.
- **No account required:** open the website and start generating test data.

## Dummy Generated Cards vs. Provider Test Cards

These two datasets serve different testing goals:

| Dataset | Best for | Important limitation |
| --- | --- | --- |
| Generated dummy cards | UI development, input formatting, mock data, demos, database schemas, and export workflows | They are random format-matching values and are not guaranteed to produce a specific payment-gateway response |
| Provider-published test cards | Stripe test mode, PayPal Sandbox, Braintree testing, and Mastercard Sandbox/MTF integrations | They work only in the provider's supported test environment and cannot complete real transactions |

For gateway integration tests, always use the relevant provider-published number and follow that provider's expiry date, CVV/CVC, account, and environment requirements.

## Available Payment Test Card References

### Stripe Test Cards

The Stripe section includes successful test payment cards for major brands and regional scenarios. Each entry shows the card number, CVC rule, expiry-date rule, intended scenario, and a copy action.

Source: [Stripe testing documentation](https://docs.stripe.com/testing)

### PayPal Sandbox Cards and Triggers

Use the PayPal section to test sandbox card flows and processor outcomes. Trigger values cover cases such as card refusal, suspected fraud, failed validation, invalid accounts, and retry guidance.

Source: [PayPal sandbox card testing documentation](https://developer.paypal.com/tools/sandbox/card-testing/)

### Braintree Test Cards

The Braintree section provides test examples for Visa, Discover, JCB, and Maestro card handling. Use them only in a Braintree test environment.

### Mastercard Test Cards

The Mastercard directory contains:

- 19 country and region groups;
- 168 source records, including the duplicate Vietnam commercial-card entries present in the official source;
- separate consumer and commercial card lists;
- funds-availability cases for immediate, next-business-day, and two-to-five-business-day outcomes;
- raw-number copying for Sandbox and MTF testing.

The Mastercard source does not publish expiry dates or CVV values for these records, so this project does not invent them.

Source: [Mastercard Developers test card numbers](https://developer.mastercard.com/mastercard-merchant-presented-qr/documentation/server-apis/test-card-numbers/)

## How to Generate Test Credit Card Data

1. Open the [free credit card generator](https://creditcardgenerator.wangdu.site/).
2. Select a card network.
3. Choose a quantity from 1 to 1,000.
4. Select **Generate**.
5. Copy a value or export the full batch as JSON, CSV, or XML.

Use generated data for mockups, form validation, automated test fixtures, and staging databases. Use the provider reference sections when you need a payment processor to return a documented sandbox result.

## Supported Languages

- [English](https://creditcardgenerator.wangdu.site/)
- [简体中文](https://creditcardgenerator.wangdu.site/zh)
- [日本語](https://creditcardgenerator.wangdu.site/ja)
- [Español](https://creditcardgenerator.wangdu.site/es)
- [Русский](https://creditcardgenerator.wangdu.site/ru)
- [العربية](https://creditcardgenerator.wangdu.site/ar)

## Local Development

### Requirements

- Node.js 18 or newer
- npm

### Install and Run

```bash
git clone https://github.com/dongyubin/Credit-Card-Generator.git
cd Credit-Card-Generator
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm run start
```

### Verification

```bash
node --test config/mastercardTestCards.test.mjs
npx tsc --noEmit
npm run lint
npm run build
```

## Technology Stack

- [Next.js 14](https://nextjs.org/)
- [React 18](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/)
- [Framer Motion](https://www.framer.com/motion/)

## Project Structure

```text
app/                         Next.js routes and layouts
components/home/             Generator and provider test-card interfaces
config/                      Site content and test-card datasets
config/mastercardTestCards.ts
locales/                     English, Chinese, Japanese, Spanish, Russian, and Arabic copy
public/                      Images, icons, robots.txt, and sitemap output
```

## Frequently Asked Questions

### Is this a real credit card generator?

No. The generator creates dummy data for software testing and demonstrations. It does not create bank accounts, credit, funds, or cards that work in real transactions.

### Can I use the generated numbers in Stripe or PayPal?

Use the dedicated Stripe or PayPal test cards shown on the site. Randomly generated values are useful for UI and data tests but are not guaranteed to be accepted by a payment provider's sandbox.

### Are the test card numbers safe to publish?

The provider test numbers are publicly documented for test environments. They are not linked to real cardholders. Do not combine them with real personal or financial information.

### Does the generator send card data to a payment processor?

No. The generator creates and exports its mock card records in the browser. Payment-provider test numbers are displayed as reference data; this project does not submit transactions on your behalf.

### Does this project provide a credit card generator API?

No public API is currently included. The web interface supports browser-based generation, copying, and JSON/CSV/XML downloads.

## Contributing

Bug reports, documentation fixes, translations, and carefully sourced test-card updates are welcome.

1. Fork the repository.
2. Create a feature branch.
3. Make and verify your changes.
4. Open a pull request with the source and testing details.

When updating provider test cards, preserve the original ordering and document the official source. Never add real payment card data.

## Responsible Use

This project is intended for software development, QA, education, and sandbox testing. You are responsible for following applicable laws, payment-provider terms, and security requirements. The maintainers do not support fraud, unauthorized transactions, carding, identity theft, or attempts to bypass payment controls.
