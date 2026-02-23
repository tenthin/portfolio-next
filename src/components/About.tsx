const About = () => {
  return (
    <section
      id="aboutme"
      className="
    max-w-[80%]
    mx-auto
 
    py-20
    flex
    flex-col
    lg:flex-row
    gap-8
    items-center
  "
    >
      {/* Title */}
      <h1
        className="
  text-4xl md:text-6xl
  w-full lg:w-auto
  text-center

  p-6
"
      >
        About Me
      </h1>

      {/* Content */}
      <p
        className="
        mt-4 text-xl flex-[1.4]
        text-[var(--text-secondary)]
        border border-[var(--border)]
        p-4
        bg-[var(--bg)]
        transition-colors
      "
      >
        I’m a frontend developer focused on building clean, functional, and
        user-friendly web applications using JavaScript and React. I enjoy
        turning ideas into working products and learning by building real-world
        projects, from UI design to API integration.
        <br />
        <br />
        Currently, I’m focused on growing as a frontend developer by shipping
        projects, improving my problem-solving skills, and preparing for
        entry-level opportunities where I can learn, contribute, and grow with a
        team.
      </p>
    </section>
  );
};

export default About;
