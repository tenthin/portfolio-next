const Footer = () => {
  return (
    <footer
      className="
        mt-20
        border-t border-[var(--border)]
        bg-[var(--surface)]
        transition-colors
      "
    >
      <div
        className="
          w-4/5
          m-auto
          py-8
          flex
          flex-col
          md:flex-row
          items-center
          justify-between
          gap-4
        "
      >
        {/* Left */}
        <p className="text-[var(--text-secondary)] text-sm">
          © {new Date().getFullYear()} Tenzin Thinley.
          All rights reserved.
        </p>

        {/* Right Icons */}
        <div className="flex gap-5 text-xl">
          <a
            href="https://github.com/tenthin"
            target="_blank"
            className="text-[var(--text-primary)] hover:text-[var(--cta)] transition"
          >
            <i className="fa-brands fa-github"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/tenzinthinley01/"
            target="_blank"
            className="text-[var(--text-primary)] hover:text-[var(--cta)] transition"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;