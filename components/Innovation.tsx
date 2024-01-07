import React from "react";
import InnovationItem from "./micros/InnovationItem";

const Innovation = () => {
  const innovationItemsArr = [
    {
      id: 1,
      title: "Instant Connection and AI-Powered Precision",
      imageUrl: "",
      descriptions: [
        "Swift Customer Support: Bridge the gap between your business and customers with instant responses, ensuring no query goes unanswered.",
        "AI Marvels at Your Service: Harness the power of AI to swiftly analyze issues, providing accurate and efficient resolutions for your customers.",
      ],
    },
    {
      id: 2,
      title: "Multimedia Magic for Enhanced Communication",
      imageUrl: "",
      reverse: true,
      descriptions: [
        "Engaging Experiences: Elevate customer engagement with multimedia magic. Share videos, links, and personalized responses to make communication clearer and more effective.",
        "Visual Impact: Capture attention with impactful visuals, conveying messages in a way that resonates with your customers.",
      ],
    },
    {
      id: 3,
      title: "Technical Excellence and Language Harmony",
      imageUrl: "",
      descriptions: [
        "Efficient Technical Escalation: Identify high-technical issues and seamlessly escalate them to your technical team, providing detailed information for efficient resolution.",
        "Diverse Language Support: Speak your customer's language – choose from Igbo, Yoruba, Hausa, or English, reflecting the rich linguistic diversity of Nigeria.",
      ],
    },
  ];
  return (
    <section className="w-full mx-auto bg-[#FFFFFF] min-h-[100vh] pb-16 px-8 md:px-16 lg:px-24">
      <h1 className="text-[30px] leading-[45px] w-full lg:w-[70%] lg:mx-auto text-left lg:text-center lg:text-[50px] lg:leading-[65px] text-[#2F2F2F] font-bold mb-2 lg:mb-4">
        Elevate your business and redefine your customer support
      </h1>
      <p className="text-[14px] leading-[24px] text-[#7D8D96] lg:text-[18px] lg:leading-[35px] text-left lg:text-center mb-4 lg:mb-8">
        From Rapid Response Engines to Multilingual Prowess - Explore the
        Innovation Within!
      </p>

      <section className="flex space-y-12 flex-col">
        {innovationItemsArr.map((innovationItem) => (
          <InnovationItem {...innovationItem} key={innovationItem.id} />
        ))}
      </section>
    </section>
  );
};

export default Innovation;
