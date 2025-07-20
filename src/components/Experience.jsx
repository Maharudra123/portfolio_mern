import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function Experience() {
  const data = [
    {
      title: "2022",
      content: (
        <div id="experience">
          <p className="mb-2 text-sm font-medium text-white dark:text-neutral-100">
            Web Development Intern · VowTech Pvt. Ltd., Pune (Jul 2022 – Sep
            2022)
          </p>
          <ul className="list-disc pl-4 text-xs font-normal text-white md:text-sm dark:text-neutral-200">
            <li className="mb-2">
              Developed responsive web pages using HTML, Bootstrap, and
              JavaScript, ensuring cross-device compatibility and modern UI
              standards.
            </li>
            <li className="mb-2">
              Integrated MySQL backend systems with frontend components to
              create seamless data flow and dynamic user interactions.
            </li>
            <li className="mb-2">
              Enhanced form interactivity and user experience through JavaScript
              implementation and responsive design principles.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "2025",
      content: (
        <div>
          <p className="mb-2 text-sm font-medium text-white dark:text-neutral-100">
            AI Intern · InventPrime (Jan 2025 – Mar 2025)
          </p>
          <ul className="list-disc pl-4 text-xs font-normal text-white md:text-sm dark:text-neutral-200">
            <li className="mb-2">
              Developed "AI Friend" — a personal AI assistant leveraging Google
              Gemini Pro and Hugging Face Transformers for intelligent
              conversational experiences.
            </li>
            <li className="mb-2">
              Integrated multiple external APIs including OpenWeather for
              weather updates, News API for current headlines, and Wikipedia for
              factual information retrieval.
            </li>
            <li className="mb-2">
              Implemented advanced sentiment analysis using DistilBERT to
              provide emotionally aware and contextually appropriate responses.
            </li>
          </ul>

          <p className="mb-2 mt-4 text-sm font-medium text-white dark:text-neutral-100">
            MERN Stack Developer Intern · Leapot Technology (Jun 2025 – Present)
          </p>
          <ul className="list-disc pl-4 text-xs font-normal text-white md:text-sm dark:text-neutral-200">
            <li className="mb-2">
              Developing full-stack web applications using MongoDB, Express.js,
              React.js, and Node.js, focusing on scalable and maintainable code
              architecture.
            </li>
            <li className="mb-2">
              Building responsive user interfaces with React and modern CSS
              frameworks, ensuring optimal user experience across all devices.
            </li>
            <li className="mb-2">
              Implementing secure RESTful APIs and database solutions to support
              real-time data processing and user interactions.
            </li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
