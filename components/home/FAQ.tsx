"use client";
import { ALL_FAQS } from "@/config/faqs";
import { Accordion, AccordionItem } from "@nextui-org/react";
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
      <Accordion
        fullWidth
        keepContentMounted
        className="gap-4 w-full max-w-4xl"
        itemClasses={{
          base: "px-4 md:px-6 !bg-default-100 !shadow-none hover:!bg-default-200/50 rounded-lg",
          title: "font-medium text-base md:text-lg",
          trigger: "py-4 md:py-6",
          content: "pt-0 pb-6 text-base text-default-500 whitespace-pre-wrap",
        }}
        items={FAQS}
        selectionMode="multiple"
        variant="splitted"
        onSelectionChange={triggerResizeEvent}
      >
        {FAQS?.map((item) => (
          <AccordionItem
            key={item.title}
            indicator={({ isOpen }) => (
              isOpen ? <MinusIcon className="text-primary" /> : <PlusIcon className="text-primary" />
            )}
            title={item.title}
          >
            <div className="prose prose-default max-w-none">
              {item.content}
            </div>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default FAQ;
