import React from "react";
import { InfiniteScrollingTestimonials } from "./infinite-scrolling-testomnials";
import { TypewriterEffectSmooth } from "./type-writing-effect";

const sampleTestimonials = [
  {
    quote:
      "The course was well-structured and the instructors were highly knowledgeable. I gained valuable skills that have greatly helped my career.",
    name: "Jane Doe",
    title: "Software Engineer",
  },
  {
    quote:
      "I had an amazing experience with the program. The hands-on projects and real-world applications were extremely beneficial.",
    name: "John Smith",
    title: "Data Analyst",
  },
  {
    quote:
      "The learning environment was fantastic, and the support from the faculty was top-notch. I feel well-prepared for my future endeavors.",
    name: "Alice Johnson",
    title: "Project Manager",
  },
  {
    quote:
      "I highly recommend this program to anyone looking to advance their career. The resources and networking opportunities were exceptional.",
    name: "Bob Brown",
    title: "UX Designer",
  },
  {
    quote:
      "The program exceeded my expectations in every way. The practical knowledge and skills I acquired are invaluable.",
    name: "Emily Davis",
    title: "Marketing Specialist",
  },
  {
    quote:
      "I enjoyed every moment of the course. The instructors were very supportive, and the curriculum was comprehensive and engaging.",
    name: "Michael Wilson",
    title: "Financial Analyst",
  },
  {
    quote:
      "This program provided me with the tools and knowledge I needed to succeed. The projects were challenging and rewarding.",
    name: "Laura Martinez",
    title: "Product Manager",
  },
  {
    quote:
      "A transformative experience that has opened up new career opportunities for me. The quality of education was outstanding.",
    name: "James Lee",
    title: "Business Consultant",
  },
  {
    quote:
      "An excellent program with a perfect balance of theory and practice. The skills I gained have been directly applicable to my job.",
    name: "Sophia Taylor",
    title: "Web Developer",
  },
  {
    quote:
      "I am incredibly satisfied with the program. The instructors were knowledgeable, and the content was highly relevant to my field.",
    name: "David Anderson",
    title: "Graphic Designer",
  },
];

export const Testimonials: React.FC = () => {
  const words = [
    {
      text: "What",
    },
    {
      text: "Our",
    },
    {
      text: "Students",
      className: "text-rose-500 dark:text-blue-500",
    },
    {
      text: "Say.",
    },
  ];

  return (
    <div className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-center mb-8 mx-auto flex items-center justify-center w-full">
          <TypewriterEffectSmooth
            words={words}
            className="text-black"
            cursorClassName="bg-rose-500"
          />
        </h2>
        <InfiniteScrollingTestimonials
          items={sampleTestimonials}
          direction="left"
          speed="normal"
          pauseOnHover={true}
        />
      </div>
    </div>
  );
};

