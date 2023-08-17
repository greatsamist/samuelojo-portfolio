import { SectionHeader } from "@/components/utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: "NetOne Talent",
    position: "Front end Developer",
    time: "2022 - 2023",
    location: "Atlanta",
    description:
      "I help Build a project that provides immediate on-demand access to comprehensively vetted contracting talent. Increased throughput of our primary services by 70%. Build new UI using React and SCSS. Also helped make it look prettier.",
    tech: ["Reach", "Javascript", "SCSS", "Git", "GitHub", "Figma", "RestAPI"],
  },
  {
    title: "Web3Bridge",
    position: "Software Engineer",
    time: "2020 - 2022",
    location: "Lagos",
    description:
      "I collaborated smoothly with designers and product managers, improving code integration and project workflows. I played a major role in building the company’s DAO and NFT smart contract using Solidity and integrated the smart contract with React using ether.js, This has raised over $100k value in NFT’s minted.",
    tech: ["React", "Node", "Javascript", "Typescript", "SCSS", "NextJS"],
  },
  {
    title: "Felfo Digital",
    position: "Software Engineer",
    time: "2019 - 2020",
    location: "Lagos",
    description:
      "I empowered small and medium enterprises (SMEs) to take advantage of the digital space. By utilizing the MERN stack, I created immersive and cutting-edge user interfaces that captivate audiences and drive impactful interactions. As a result, our services led to a remarkable 75% increase in clients' visibility and conversions, along with a substantial 40% growth in their revenue.",
    tech: ["Javascript", "CSS/SCSS", "React", "Node", "Storybook", "Jest"],
  },
];
