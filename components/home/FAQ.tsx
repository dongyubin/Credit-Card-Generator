"use client";
import { ALL_FAQS } from "@/config/faqs";
import * as Accordion from "@radix-ui/react-accordion";
import { MinusIcon, PlusIcon } from "lucide-react";

// update rough notation highlight
function triggerResizeEvent() {
  const event = new Event("resize");
  window.dispatchEvent(event);
}

const FAQ = ({
  id,
  locale,
  langName,
}: {
  id: string;
  locale: any;
  langName: string;
}) => {
  const FAQS = ALL_FAQS[`FAQS_${langName.toUpperCase()}`];

  return (
    <section
      id={id}
      className="flex flex-col justify-center w-full max-w-[90%] md:max-w-[80%] lg:max-w-[70%] mx-auto items-center py-16 md:py-20 gap-12"
    >
      <div className="flex flex-col text-center gap-6">
        <h2 className="text-center text-3xl md:text-4xl font-bold">
          {locale.title}
        </h2>
        <p className="text-large text-default-500 max-w-2xl mx-auto">
          {locale.description}
        </p>
      </div>
      <Accordion.Root
        type="multiple"
        className="w-full max-w-4xl gap-4"
        onValueChange={triggerResizeEvent}
      >
        {FAQS?.map((item) => (
          <Accordion.Item
            key={item.title}
            value={item.title}
            className="border border-gray-200 bg-gray-50 hover:bg-gray-100/50 rounded-lg transition-colors"
          >
            <Accordion.Header>
              <Accordion.Trigger className="flex w-full items-center justify-between px-4 md:px-6 py-4 md:py-6 text-left font-medium text-base md:text-lg focus:outline-none data-[state=open]:text-blue-600">
                <span>{item.title}</span>
                <span className="ml-1">
                  <PlusIcon className="h-5 w-5" />
                </span>
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="px-4 md:px-6 pb-6 text-base text-gray-600 data-[state=open]:animate-accordionDown">
              <div className="prose prose-sm max-w-none">
                {item.content}
              </div>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </section>
  );
};

export default FAQ;
