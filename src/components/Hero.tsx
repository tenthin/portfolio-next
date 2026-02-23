import Image from "next/image";

const Hero = () => {
  return (
    <section className="min-h-[80vh] flex items-center px-6">
      <div
        className="
    w-[80%]
    mx-auto
    flex
    flex-col-reverse
    lg:flex-row
    items-center
    gap-10 lg:gap-16
  "
      >
        {/* Left content */}
        <div className="flex-1 text-center md:text-left">
          <p className="text-2xl md:text-3xl text-[var(--text-secondary)]">
            Hi!
          </p>

          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--text-primary)]">
            I’m Tenzin Thinley
          </h1>

          <p className="text-xl md:text-3xl mt-5 text-[var(--text-secondary)]">
            Frontend developer based in Toronto, Canada.
          </p>

          <p className="text-xl md:text-3xl text-[var(--text-secondary)]">
            I build real, working products with JavaScript and React, focusing
            on clean logic and continuous learning.
          </p>

          <div className="mt-8 flex justify-center items-center md:justify-start gap-4">
            {/* View Projects */}
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg
              bg-[var(--cta)]
              text-white
              hover:opacity-90
              transition"
            >
              View Projects
            </a>

            {/* Resume */}
            <a
              href="/TenzinThinley_FrontendDevelopment_Resume.pdf"
              download
              className="px-6 py-3 rounded-lg
              border
              border-[var(--border)]
              text-[var(--text-primary)]
              hover:bg-[var(--surface)]
              transition"
            >
              Download Resume
            </a>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/tenzinthinley01/"
                target="_blank"
              >
                <i className="fa-brands fa-linkedin text-4xl text-[#0a66c2]" />
              </a>

              <a href="https://github.com/tenthin" target="_blank">
                <i className="fa-brands fa-github text-4xl text-[var(--text-primary)]" />
              </a>
            </div>
          </div>
        </div>

        {/* Right image */}
        <div
          className="
  relative
  w-56 sm:w-72 lg:w-[400px]
  h-76 sm:h-92 lg:h-[700px]
"
        >
          <Image
            src="/headshot.png"
            alt="Tenzin Thinley"
            fill
            sizes="(max-width:768px) 100vw, 50vw"
            className="object-cover rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
