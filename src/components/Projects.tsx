"use client";

import { useState } from "react";
import Card from "@/components/ui/Card";

type Project = {
  id: number;
  title: string;
  difficulty: string;
  img?: string;
  github: string;
  livesite: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Expense Tracker",
    difficulty: "Easy",
    github: "https://github.com/tenthin/expenseTracker",
    livesite: "https://expensetrack01.netlify.app/",
    img: "/expensetracker.png",
  },
  {
    id: 2,
    title: "Weather App",
    difficulty: "Medium",
    img: "/weatherapp.png",
    github: "https://github.com/tenthin/WeatherApp",
    livesite: "https://weather-forecast-app01.netlify.app/",
  },
  {
    id: 3,
    title: "Youtube Analyzer",
    difficulty: "Difficult",
    img: "/youtubeanalyzer.png",
    github: "https://github.com/tenthin/youtube-analyzer",
    livesite: "https://youtube-analyzer-01.netlify.app/",
  },
];

const Projects = () => {
  const [filter, setFilter] = useState<string>("all");

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((p) => p.difficulty === filter);

  return (
    <section
      id="projects"
      className="pb-20 w-4/5 m-auto scroll-mt-28"
    >
      {/* Header */}
      <div className="flex items-center gap-4">

        <h1 className="
  text-4xl md:text-6xl
  w-full lg:w-auto
  text-center

  p-6
">
          Projects
        </h1>

        <p
          className="
          mt-4 text-xl flex-[1.4]
          text-[var(--text-secondary)]
          border border-[var(--border)]
          bg-[var(--bg)]
          p-4
          transition-colors
        "
        />
      </div>

      {/* Filter */}
      <div className="flex justify-end items-center mt-6">
        <span className="mr-2 text-[var(--text-secondary)]">
          Filter:
        </span>

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="
            border border-[var(--border)]
            bg-[var(--surface)]
            text-[var(--text-primary)]
            px-4 py-2
            rounded-lg
            transition-colors
          "
        >
          <option value="all">All</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Difficult">Difficult</option>
        </select>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
        {filteredProjects.map((project) => (
          <Card
            key={project.id}
            title={project.title}
            img={project.img ?? ""}
            difficulty={project.difficulty}
            github={project.github}
            livesite={project.livesite}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;