export const FAQS_EN = [
  {
    title: "What is a Credit Card Generator?",
    content:
      "A credit-card generator creates fake, structurally-valid card numbers using official IIN ranges and the Luhn checksum. These numbers are safe for testing payment forms, gateway integrations, and fraud-detection logic, but they are not linked to real accounts or funds."
  },
  {
    title: "Who uses this tool?",
    content:
      "Software engineers, QA testers, product managers, educators, and security researchers. Typical scenarios include:\n• Payment-gateway sandbox testing\n• Form-validation regression suites\n• Load-test data seeding\n• Classroom demonstrations of the Luhn algorithm"
  },
  {
    title: "Is it legal?",
    content:
      "Yes—when used for legitimate development, education, or compliance testing. Any attempt at real-world fraud is illegal and against our terms."
  },
  {
    title: "Can I use these numbers for real purchases?",
    content:
      "No. The numbers will fail issuer-side authorization and cannot be used for actual transactions or subscriptions."
  },
  {
    title: "Do you store the generated data?",
    content:
      "No. All generation happens client-side; nothing is sent to our servers, so we have no record of the numbers you create."
  },
  {
    title: "What formats can I export?",
    content:
      "After generation you can download the full set as JSON, CSV, or XML with a single click—ideal for CI pipelines or importing into test databases."
  },
  {
    title: "How many cards can I generate at once?",
    content:
      "The web UI supports up to 1 000 cards per request. Need more? Loop the export file in your automation script or contact us for an API key."
  },
  {
    title: "Are CVV and expiry dates included?",
    content:
      "Yes. Each card comes with a randomly generated, format-correct CVV/CVC and a future expiry date to satisfy most validation rules."
  },
  {
    title: "Can I choose a specific BIN or issuer?",
    content:
      "Absolutely. Use the advanced filter to select any major network (Visa, MasterCard, Amex, Discover, JCB, Diners, UnionPay, RuPay, Maestro) or enter a custom 6-digit BIN."
  },
  {
    title: "What if my test requires real-time card balances?",
    content:
      "Generated cards have no backend account, so balances and transaction history are unavailable. For full end-to-end flows, combine our tool with a sandbox payment provider such as Stripe’s test mode."
  },
  {
    title: "Do I need to create an account or sign in?",
    content:
      "No login, registration, or API key is required. Open the page and start generating immediately—just like BrowserStack’s free tools section."
  },
  {
    title: "Which card networks are supported?",
    content:
      "Visa, MasterCard, American Express, Discover, JCB, Diners Club International, China UnionPay, RuPay, and Maestro—covering the same range BrowserStack lists for cross-network compatibility testing."
  },
  {
    title: "Can I pick custom expiry dates or CVV rules?",
    content:
      "Yes. Use the advanced filters to set a fixed expiry year, a rolling month window, or CVV length rules (3-digit vs 4-digit Amex) so your test data matches exact edge-case scenarios—similar to BrowserStack’s upcoming customizable-card feature."
  },
  {
    title: "Is this tool completely web-based?",
    content:
      "Absolutely. There’s nothing to install, no browser extension, and it works on Windows, macOS, Linux, iOS, and Android browsers—mirroring BrowserStack’s cross-platform approach."
  },
  {
    title: "Does the generator include cardholder names and addresses?",
    content:
      "Each card is paired with a realistic random name. Full billing addresses are not provided; if you need them for AVS testing, combine our output with any mock-address generator, similar to BrowserStack’s guidance on supplemental test data."
  },
  {
    title: "How can I automate or script these numbers in CI/CD?",
    content:
      "Download the generated set as JSON, CSV, or XML and feed it directly into Postman collections, Cypress fixtures, or GitHub Actions workflows—exactly the same workflow BrowserStack recommends for integrating test-card data into automated pipelines."
  }
];

export const FAQS_ZH = [
  {
    title: "什么是信用卡生成器？",
    content: `信用卡生成器是一种工具，用于生成有效的信用卡号码，供编程、教育和代码开发领域的测试和开发使用。

    需要注意的是，这些信用卡号码不是真实的，不能用于实际购买。然而，它们可以用于测试支付处理系统或开发用途。

    请记住：信用卡生成器不会生成具有真实资金的信用卡号码，也不属于任何持卡人。持卡人的姓名、地址、资金、CVV/CVC、安全码、有效期和 PIN 码都是随机生成的。

    如果您需要用于实际购买的真实信用卡号码，我们建议您使用银行或信用卡公司等信誉良好的金融机构并申请信用卡。不发行真实的信用卡号码。

    在提交您的信用卡申请之前，请彻底了解最佳信用卡优惠，包括余额转移、现金返还和奖励计划。`
  },
  {
    title: "生成的信用卡号码可以用于真实交易吗？",
    content:
      "不，生成的信用卡号码主要用于测试需求，而不是用于真实交易。",
  },
  {
    title: "生成的信用卡号码是否安全用于敏感交易？",
    content:
      "虽然我们优先考虑隐私，但我们不建议将这些信用卡号码用于敏感交易。它们主要用于测试目的。",
  },
  {
    title: "生成信用卡号码需要多长时间？",
    content:
      "信用卡号码是即时生成的。只需点击一次，您就可以获得多个独特的信用卡号码。",
  },
  {
    title: "是否可以在以后重新生成相同的信用卡编号集？",
    content:
      "生成器每次都会创建一组新的唯一信用卡号码。目前，重新生成以前的号码集是不可行的。",
  },
  {
    title: "使用此工具是否有任何费用？",
    content:
      "不，信用卡生成器完全免费，可用于生成测试所需的虚拟信用卡号码。",
  },
];

export const FAQS_JA = [
  {
    title: "生成されたクレジットカード番号は実際の取引に使用できますか？",
    content:
      "いいえ、生成されたクレジットカード番号は主にテストのために使用され、実際の取引には使用されません。",
  },
  {
    title: "生成されたクレジットカード番号は、センシティブな取引に安全ですか？",
    content:
      "私たちはプライバシーを優先しますが、これらのクレジットカード番号をセンシティブな取引に使用することはお勧めしません。それらは主にテストの目的で設計されています。",
  },
  {
    title: "クレジットカード番号を生成するのにどれくらい時間がかかりますか？",
    content:
      "クレジットカード番号は即座に生成されます。ワンクリックで、複数のユニークなクレジットカード番号が得られます。",
  },
  {
    title: "同じクレジットカード番号セットを後で再生成することはできますか？",
    content:
      "生成器は毎回新しいユニークなクレジットカード番号のセットを作成します。現在、以前のセットを再生成することはできません。",
  },
  {
    title: "このツールの使用には費用がかかりますか？",
    content:
      "いいえ、クレジットカード生成器は完全に無料で、テストに必要なダミーのクレジットカード番号を生成するために使用できます。",
  },
];


export const FAQS_AR = [
  {
    title: "هل يمكن استخدام أرقام بطاقات الائتمان التي تم إنشاؤها في المعاملات الحقيقية؟",
    content:
      "لا، الأرقام التي يتم إنشاؤها لبطاقات الائتمان مخصصة بشكل رئيسي للاحتياجات التجريبية وليست للمعاملات الحقيقية.",
  },
  {
    title: "هل الأرقام التي تم إنشاؤها لبطاقات الائتمان آمنة للاستخدام في المعاملات الحساسة؟",
    content:
      "نحن نعطي الأولوية للخصوصية، لكننا لا نوصي باستخدام هذه الأرقام في المعاملات الحساسة. هي مصممة بشكل رئيسي لأغراض الاختبار.",
  },
  {
    title: "كم من الوقت يستغرق إنشاء أرقام بطاقات الائتمان؟",
    content:
      "يتم إنشاء الأرقام على الفور. بنقرة واحدة فقط يمكنك الحصول على عدة أرقام فريدة.",
  },
  {
    title: "هل يمكن إعادة إنشاء نفس مجموعة أرقام بطاقات الائتمان في وقت لاحق؟",
    content:
      "يقوم المولد بإنشاء مجموعة جديدة من الأرقام الفريدة في كل مرة. حاليًا، إعادة إنشاء مجموعة سابقة غير ممكنة.",
  },
  {
    title: "هل هناك أي تكاليف مرتبطة باستخدام هذه الأداة؟",
    content:
      "لا، مولد بطاقات الائتمان مجاني تمامًا للاستخدام لتوليد أرقام بطاقات ائتمان وهمية لتلبية احتياجات الاختبار الخاصة بك.",
  },
];

export const FAQS_ES = [
  {
    title: "¿Se pueden utilizar los números de tarjetas de crédito generados para transacciones reales?",
    content:
      "No, los números de tarjetas de crédito generados están destinados principalmente a necesidades de prueba y no a transacciones reales.",
  },
  {
    title: "¿Es seguro usar los números de tarjetas de crédito generados para transacciones sensibles?",
    content:
      "Aunque damos prioridad a la privacidad, no recomendamos usar estos números de tarjetas de crédito para transacciones sensibles. Están diseñados principalmente para fines de prueba.",
  },
  {
    title: "¿Cuánto tiempo se tarda en generar los números de tarjetas de crédito?",
    content:
      "Los números de tarjetas de crédito se generan instantáneamente. Solo un clic y tienes múltiples números de tarjetas de crédito únicos.",
  },
  {
    title: "¿Es posible regenerar el mismo conjunto de números de tarjetas de crédito más tarde?",
    content:
      "El generador crea un nuevo conjunto de números de tarjetas de crédito únicos cada vez. Actualmente, no es posible regenerar un conjunto anterior.",
  },
  {
    title: "¿Hay algún costo asociado con el uso de esta herramienta?",
    content:
      "No, el Generador de Tarjetas de Crédito es completamente gratuito para generar números de tarjetas de crédito falsos para tus necesidades de prueba.",
  },
];

export const FAQS_RU = [
  {
    title: "Можно ли использовать сгенерированные номера кредитных карт для реальных транзакций?",
    content:
      "Нет, сгенерированные номера кредитных карт предназначены в основном для тестовых нужд и не для реальных транзакций.",
  },
  {
    title: "Безопасно ли использовать сгенерированные номера кредитных карт для чувствительных транзакций?",
    content:
      "Мы уделяем приоритетное внимание конфиденциальности, однако не рекомендуем использовать эти номера кредитных карт для чувствительных транзакций. Они предназначены в основном для тестирования.",
  },
  {
    title: "Сколько времени занимает генерация номеров кредитных карт?",
    content:
      "Номера кредитных карт генерируются мгновенно. Всего один клик, и у вас есть несколько уникальных номеров кредитных карт.",
  },
  {
    title: "Можно ли позднее регенерировать ту же группу номеров кредитных карт?",
    content:
      "Генератор создает новый набор уникальных номеров кредитных карт каждый раз. В настоящее время регенерация предыдущего набора невозможна.",
  },
  {
    title: "Есть ли какие-либо расходы, связанные с использованием этого инструмента?",
    content:
      "Нет, генератор кредитных карт полностью бесплатен для использования для генерации фиктивных номеров кредитных карт для ваших тестовых нужд.",
  },
];

interface FAQSCollection {
  [key: `FAQS_${string}`]: {
    title: string;
    content: string;
  }[];
}
export const ALL_FAQS: FAQSCollection = {
  FAQS_EN,
  FAQS_ZH,
  FAQS_JA,
  FAQS_AR,
  FAQS_ES,
  FAQS_RU,
}