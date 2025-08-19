// 工作原理模块
export const HOW_IT_WORKS_EN = [
  {
    title: "What is a Credit Card Generator?",
    content:
      "A credit card generator is an online utility that produces **valid-looking, but completely fake** card numbers by following the official Issuer Identification Number (IIN) tables and the Luhn checksum algorithm. These dummy numbers are indispensable for developers and QA teams who need to test **payment gateways**, **checkout forms**, and **fraud-detection rules** without exposing real financial data. They are **not linked to live accounts**, have **no monetary value**, and **cannot be used for actual purchases**."
  },
  {
    title: "How do I create test credit card numbers with the Credit Card Generator?",
    content:
      "Using our credit card generator is a four-step process:\n\n1. **Choose Quantity** – Generate anywhere from one to one thousand cards in a single batch.\n2. **Select Network** – Pick Visa, MasterCard, American Express, Discover, JCB, China UnionPay, Diners Club International, RuPay, or Maestro.\n3. **Pick Output Format** – Download your data as JSON, CSV, or XML for direct ingestion into Postman, Cypress, JMeter, or any CI pipeline.\n4. **Click Generate** – The tool instantly creates cards with realistic numbers, random CVVs, and future expiry dates. No sign-up, no cost, and nothing to install."
  },
  {
    title: "Who needs a Credit Card Generator?",
    content:
      "• **Software engineers** validating new payment integrations  \n• **QA testers** building regression suites for checkout flows  \n• **Security researchers** simulating fraud patterns  \n• **Educators** teaching the Luhn algorithm or PCI-DSS concepts  \n• **Product managers** running live demos without exposing real cardholder data"
  },
  {
    title: "Does the Credit Card Generator also provide personal data like names or addresses?",
    content:
      "Each card comes with a **randomly generated cardholder name** and a **format-correct CVV and expiry date**. For **billing address simulation**, pair the exported card list with our built-in **random address generator**, which produces realistic street, city, state, ZIP, and country combinations that match the card’s issuing region. This combo gives you **end-to-end test data** without any real-world footprint."
  },
  {
    title: "Are the generated numbers safe and legal to use?",
    content:
      "Yes. The numbers are **algorithmically valid** but **financially inactive**. They comply with PCI-DSS guidelines for **non-production test data** and are expressly **not usable for real transactions**. Any attempt to use them for fraud violates our terms and may be illegal."
  },
  {
    title: "Can I automate this Credit Card Generator in my CI/CD pipeline?",
    content:
      "Absolutely. After generation, download the **JSON, CSV, or XML** file and commit it to your repository or feed it directly to your **automated test suite**. Because the entire tool is web-based, you can also trigger it headlessly via simple fetch calls, making nightly integration tests effortless."
  },
  {
    title: "What are common use cases for the Credit Card Generator and Random Address Generator together?",
    content:
      "• **End-to-end checkout testing** – Cards plus matching addresses validate full payment flows.  \n• **Geo-location compliance** – Generate region-specific addresses alongside local card BINs.  \n• **AVS (Address Verification System) checks** – Pair random addresses with corresponding ZIP codes to test AVS acceptance and rejection paths.  \n• **Load testing** – Import thousands of card + address pairs to simulate realistic customer traffic."
  },
  {
    title: "Do the cards have configurable expiry dates or CVV rules?",
    content:
      "Advanced filters let you lock expiry years, set rolling month windows, or choose **3-digit CVV** vs **4-digit Amex CVV**. This precision ensures your test cases cover **edge scenarios** such as expired-card declines or CVV-length validation errors."
  },
  {
    title: "Is there a usage limit or hidden cost?",
    content:
      "No. The credit card generator is **100 % free**, **unlimited**, and requires **no registration**. Generate as many batches as your project demands, 24/7."
  },
  {
    title: "Upcoming enhancements to the Credit Card Generator",
    content:
      "• **Custom BIN ranges** – target specific issuing banks  \n• **Multi-currency simulation** – generate cards flagged for USD, EUR, GBP, JPY, etc.  \n• **Dynamic CVV & token support** – for 3-D Secure and network-token testing  \n• **Webhook integration** – auto-push new numbers to your Slack or CI dashboard  \nStay tuned—updates roll out without downtime and remain free for all users."
  }
];



interface InfoSectionCollection {
  [key: `HOW_IT_WORKS_${string}`]: {
    title: string;
    content: string;
  }[];
}

export const ALL_INFO_SECTIONS: InfoSectionCollection = {
  HOW_IT_WORKS_EN,
  // Add other languages here
};