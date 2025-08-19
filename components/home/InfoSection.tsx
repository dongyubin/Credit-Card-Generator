"use client";
import { ALL_INFO_SECTIONS } from "@/config/infoSection";
import { CheckCircle } from "lucide-react";

const InfoSection = ({
  id,
  locale,
  langName,
}: {
  id: string;
  locale: any;
  langName: string;
}) => {
  const STEPS = ALL_INFO_SECTIONS[`HOW_IT_WORKS_${langName.toUpperCase()}`];

  /* 把 **文本** 替换为 <strong> 文本 </strong> */
  const renderContent = (text: string) =>
    text.split(/(\*\*.*?\*\*)/g).map((part, i) =>
      part.startsWith("**") && part.endsWith("**") ? (
        <strong key={i}>{part.slice(2, -2)}</strong>
      ) : (
        part
      )
    );

  return (
    <section id={id} className="w-full max-w-3xl mx-auto py-16 md:py-20">
      {/* 头部 */}
      <div className="flex flex-col text-center gap-4 mb-10">
        <h2 className="text-3xl md:text-4xl font-bold">
          {locale.title || "How the Credit Card Generator Works"}
        </h2>
        <p className="text-lg text-default-500">
          {locale.description ||
            "Follow these simple steps to create realistic test cards in seconds."}
        </p>
      </div>

      {/* 一行一个卡片 */}
      <div className="flex flex-col gap-6">
        {STEPS?.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-5 rounded-2xl bg-gradient-to-r from-primary-50/70 to-secondary-50/70 p-6 shadow-md"
          >
            <div className="flex-shrink-0 bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">
              {index + 1}
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-lg mb-1">
                <CheckCircle className="inline-block mr-2 text-primary" size={20} />
                {item.title}
              </h3>
              <p className="text-sm text-default-600 leading-relaxed">
                {renderContent(item.content)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InfoSection;