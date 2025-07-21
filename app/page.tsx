import AboutSection from "./home/sections/AboutSection";
import ContactSection from "./home/sections/ContactSection";
import HeroSection from "./home/sections/HeroSection";
import ProjectsSection from "./home/sections/ProjectsSection";
import ServicesSection from "./home/sections/ServicesSection";

const projects = [
  {
    title: "Project 100",
    description: "An educational RPG that teaches programming through block-based puzzles.",
    image: "/res/Project100_Icon.svg",
    link: "projects/Project100",
  },
  {
    title: "KnowledgeSweeper",
    description: "Minesweeper but it has a twist, a quiz to keep your life",
    image: "/res/coverimage.png",
    link: "projects/KnowledgeSweeper",
  },
  {
    title: "Website Clone Redesign",
    description: "A website clone redesign for Senate of the Philippines - 19th Congress",
    image: "/res/icon/KLTL_Studios.svg",
    link: "/Clone-Redesign/index.html",
  },
];

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectsSection projects={projects} />
      <ServicesSection />
      <ContactSection />
    </>
  );
}
