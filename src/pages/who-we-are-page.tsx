import { TypewriterEffectSmooth } from "@/components/general/type-writing-effect";

export const WhoWeArePage = () => {
  const words = [
    {
      text: "Who",
    },
    {
      text: "We",
    },
    {
      text: "Are.",
      className: "text-rose-500 dark:text-blue-500",
    },
  ];

  return (
    <div className="min-h-screen p-6 space-y-12">
      <div className="text-center flex items-center justify-center w-full">
        <TypewriterEffectSmooth
          words={words}
          className="text-black"
          cursorClassName="bg-rose-500"
        />
      </div>
      <div className="max-w-4xl mx-auto text-gray-700 leading-relaxed text-lg md:text-xl">
        <p className="mb-6">
          <span className="font-bold text-rose-500">Alliance College (AC)</span>
          is a higher education institution located in Arba Minch town, Southern
          Ethiopia. Established in 2019 by visionary university instructors, AC
          provides quality education to underserved populations, including those
          in remote areas and prisons. Its innovative approach, Enhanced Blended
          Education Service (EBEs), combines in-person teaching with online
          platforms, bringing education to rural and inaccessible areas.
        </p>
        <p className="mb-6">
          AC offers a variety of programs, including postgraduate,
          undergraduate, and TVET courses, with over 3,000 students across three
          campuses. Its mission extends beyond academics, offering digital
          literacy and entrepreneurship training to equip individuals with the
          skills to thrive in the modern world. With an eye on the future, AC
          seeks international collaborations to expand its reach and impact.
        </p>
        <p className="mb-6">
          The college invites partnerships with institutions like Shandong
          University to collaborate on research, faculty exchanges, curriculum
          development, and more. Together, these efforts aim to address
          educational disparities and create meaningful opportunities for
          underserved communities.
        </p>
      </div>
    </div>
  );
};
