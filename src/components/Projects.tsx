"use client";

import Card from "@/components/ui/Card";

type Project = {
  id: number;
  title: string;
  description: string;
  tech: string[];
  img?: string;
  github: string;
  livesite: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Expense Tracker",
    description:
      "A personal finance app to log income and expenses, track spending by category, and visualize monthly summaries.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/tenthin/expenseTracker",
    livesite: "https://expensetrack01.netlify.app/",
    img: "/expensetracker.png",
  },
  {
    id: 2,
    title: "Weather App",
    description:
      "Real-time weather forecasts by city using the OpenWeather API. Handles loading states, error messages, and dynamic UI updates.",
    tech: ["React", "TypeScript", "REST API", "Tailwind CSS"],
    img: "/weatherapp.png",
    github: "https://github.com/tenthin/WeatherApp",
    livesite: "https://weather-forecast-app01.netlify.app/",
  },
  {
    id: 3,
    title: "Youtube Analyzer",
    description:
      "Analyzes YouTube videos by fetching metadata, transcripts, and engagement data — then surfaces key insights using AI summarization.",
    tech: ["React", "TypeScript", "YouTube API", "AI Integration", "Next.js"],
    img: "/youtubeanalyzer.png",
    github: "https://github.com/tenthin/youtube-analyzer",
    livesite: "https://youtube-analyzer-01.netlify.app/",
  },
  {
    id: 4,
    title: "Portfolio Site",
    description:
      "This portfolio — built with Next.js App Router and TypeScript. Features dark/light theming, responsive layout, and optimized images.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Netlify"],
    img: "/portfolio.png",
    github: "https://github.com/tenthin/portfolio-next",
    livesite: "https://portfolionextjs-01.netlify.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="pb-20 w-4/5 m-auto scroll-mt-28">
      {/* Header */}
      <div className="flex items-center gap-4">
        <h1 className="text-4xl md:text-6xl w-full lg:w-auto text-center p-6">
          Projects
        </h1>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
        {projects.map((project) => (
          <Card
            key={project.id}
            title={project.title}
            description={project.description}
            tech={project.tech}
            img={project.img ?? ""}
            github={project.github}
            livesite={project.livesite}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;