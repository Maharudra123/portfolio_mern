import { HoverEffect } from "./ui/card-hover-effect";

import codeMate from "../assets/images/codeMate.png";
import aiFriendApp from "../assets/images/aiFriendApp.png";
import hospital from "../assets/images/hospital.png";
import crop from "../assets/images/crop.png";
import {
  IconBrandNodejs,
  IconBrandReact,
  IconBrandMongodb,
  IconBrandTailwind,
  IconBrandFirebase,
  IconBrandFramerMotion,
  IconApi,
  IconBrain,
  IconBrandBootstrap,
  IconPlant,
  IconDatabase,
  IconCalendar,
  IconBrandPython,
} from "@tabler/icons-react";

export default function Projects() {
  return (
    <div
      id="projects"
      className="max-w-5xl mx-auto px-8 flex flex-col justify-center items-center"
    >
      <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-white to-indigo-300">
        What I've Built
      </h1>
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "CodeMate",
    description:
      "Full-stack developer matchmaking platform where developers connect, swipe, and chat based on coding interests and skills with real-time messaging and premium features.",
    link: "https://code-mate-frontend-alpha.vercel.app/landing", // Your existing live demo link
    imageUrl: codeMate,
    tech: [
      IconBrandReact,
      IconBrandTailwind,
      IconBrandMongodb,
      IconBrandNodejs,
    ],
  },
  {
    title: "AI Friend Virtual Assistant",
    description:
      "Chatbot-style web app integrating Google Gemini Pro for conversational responses with sentiment analysis and external APIs for weather, news, and factual information.",
    link: "https://emotional-based-ai-chatbot.onrender.com/", // Add your live demo link here
    imageUrl: aiFriendApp, // You'll need to import this image
    tech: [
      IconBrandPython, // Flask
      IconApi, // For Gemini Pro API
      IconBrain, // For Hugging Face
      IconBrandBootstrap,
    ],
  },

  {
    title: "Hospital Management System",
    description:
      "Comprehensive appointment booking system with doctor search functionality and real-time slot booking, built with MySQL backend and responsive Bootstrap frontend.",
    link: "https://github.com/Maharudra123/Hospital-Management-System", // Add your live demo link if available
    imageUrl: hospital, // You'll need to import this image
    tech: [
      IconBrandPython, // Flask
      IconDatabase, // MySQL
      IconBrandBootstrap,
      IconCalendar, // For appointment booking
    ],
  },
  {
    title: "Crop Recommendation System",
    description:
      "ML-powered web application that recommends optimal crops based on soil parameters (pH, nitrogen) and weather conditions (temperature, rainfall) for farmers.",
    link: "https://github.com/Maharudra123/Crop-recommendation-system", // Add your live demo link if available
    imageUrl: crop, // You'll need to import this image
    tech: [
      IconBrandPython, // Flask
      IconBrandBootstrap,
      IconPlant, // For crop recommendation theme
    ],
  },
];
