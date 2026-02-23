"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";

const Navbar = () => {
  const [active, setActive] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const navLink = (id: string, label: string) => (
    <li>
      <a
        href={`#${id}`}
        className={`
          relative px-4 py-2 rounded-lg
          text-[var(--text-primary)]
          hover:bg-[var(--surface)]
          transition-colors

          after:absolute
          after:left-0
          after:-bottom-1
          after:h-[2px]
          after:w-full
          after:bg-[var(--cta)]
          after:origin-left
          after:transition-transform
          ${
            active === id
              ? "after:scale-x-100"
              : "after:scale-x-0"
          }
        `}
      >
        {label}
      </a>
    </li>
  );

  return (
    <nav className="sticky top-0 z-50 bg-[var(--bg)]">
      <div className="max-w-[80%] mx-auto px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">

        <h1 className="text-3xl md:text-5xl text-[var(--text-primary)]">
          tenzin.dev
        </h1>

        <ul className="flex flex-wrap justify-center md:justify-end gap-3 md:gap-6 text-sm md:text-xl items-center">
          {navLink("projects", "Projects")}
          {navLink("aboutme", "About Me")}
          {navLink("contact", "Contact")}
          <ThemeToggle />
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;