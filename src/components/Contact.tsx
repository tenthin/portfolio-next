const Contact = () => {
  return (
    <section
      id="contact"
      className="
        min-h-[60vh]
        flex flex-col
        justify-center
        items-center
        text-center
        px-6
      "
    >
      {/* Title */}
      <h1 className="
  text-4xl md:text-6xl
  w-full lg:w-auto
  text-center
  p-6
">
        Contact
      </h1>

      {/* Subtitle */}
      <p className="mt-6 max-w-xl text-lg text-[var(--text-secondary)]">
        Interested in working together or have a question?
        Feel free to reach out — I’m always open to discussing
        new opportunities.
      </p>

      {/* Contact Card */}
      <div
        className="
        mt-10
        bg-[var(--surface)]
        border border-[var(--border)]
        rounded-2xl
        p-8
        shadow-lg
        transition-colors
      "
      >
        <p className="text-xl text-[var(--text-primary)]">
          Email me at
        </p>

        <a
          href="mailto:tenthinten@gmail.com"
          className="
            block
            mt-3
            text-2xl
            font-semibold
            text-[var(--cta)]
            hover:underline
          "
        >
          tenthinten@gmail.com
        </a>
      </div>
    </section>
  );
};

export default Contact;