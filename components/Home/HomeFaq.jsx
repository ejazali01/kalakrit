"use client";

import React from "react";
import HomeAccordion from "./HomeAccordion";

export const faqs = [
  {
    id: 1,
    question: "What is professional language translation?",
    answer:
      "Professional language translation involves the accurate conversion of text or content from one language to another by skilled linguists.",
  },
  {
    id: 2,
    question: "Why should I choose professional translation services?",
    answer:
      "Professional translators ensure accuracy, cultural sensitivity, and context preservation, which is essential for business and communication.",
  },
  {
    id: 3,
    question: "How do I request a translation service?",
    answer:
      "To request a translation, simply contact our team through our website, email, or phone. Provide details about the project, including the source and target languages and any specific requirements.",
  },
  {
    id: 4,
    question: "What languages do you offer translation services for?",
    answer:
      "We offer translation services for a wide range of languages, including major world languages and many less common ones.",
  },
  {
    id: 5,
    question: "Is my content kept confidential during translation?",
    answer:
      "Yes, we prioritize client confidentiality and maintain strict privacy measures throughout the translation process.",
  },
];

export default function HomeFaq() {
  return (
    <>
      <div className="bg-[#100f13] w-full">
        <div className=" p-4 py-20  flex flex-wrap gap-12 md:gap-0 w-full lg:w-11/12 m-auto ">
          <div className="w-full md:w-1/2   mb-4">
            <h1 className="w-3/4 text-[#ffffff] text-6xl font-light ">
              Frequently asked questions
            </h1>
          </div>

          <div className="w-full md:w-1/2">
            {faqs?.map((faq) => (
              <>
                <HomeAccordion key={faq.id} faq={faq} />
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
