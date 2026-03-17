import Image from "next/image";

type CardProps = {
  title: string;
  description: string;
  tech: string[];
  github: string;
  livesite: string;
  img: string;
};

const Card = ({
  title,
  description,
  tech,
  github,
  livesite,
  img,
}: CardProps) => {
  return (
    <div
      className="
        flex flex-col
        bg-[var(--surface)]
        border border-[var(--border)]
        p-3 rounded-2xl
        hover:-translate-y-1
        hover:shadow-lg
        transition-all
      "
    >
      {/* Image */}
      {img && (
        <div className="relative w-full h-48 mb-4 overflow-hidden rounded-xl">
          <Image
            src={img}
            alt={title}
            fill
            sizes="(max-width:768px) 100vw, 33vw"
            className="object-cover"
          />
        </div>
      )}

      {/* Title */}
      <h3 className="text-2xl font-semibold mb-2 text-[var(--text-primary)]">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm text-[var(--text-secondary)] mb-3 leading-relaxed">
        {description}
      </p>

      {/* Tech Stack Pills */}
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((t) => (
          <span
            key={t}
            className="
              text-xs px-2 py-1
              rounded-full
              border border-[var(--border)]
              text-[var(--text-secondary)]
              bg-[var(--bg)]
            "
          >
            {t}
          </span>
        ))}
      </div>

      {/* Spacer pushes buttons to bottom */}
      <div className="flex-1" />

      {/* Buttons */}
      <div className="flex gap-4 justify-end mt-2">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="
            text-sm px-4 py-2
            border border-[var(--border)]
            rounded-lg
            text-[var(--text-primary)]
            hover:bg-[var(--bg)]
            transition
          "
        >
          GitHub
        </a>

        <a
          href={livesite}
          target="_blank"
          rel="noopener noreferrer"
          className="
            text-sm px-4 py-2
            bg-[var(--cta)]
            text-white
            rounded-lg
            hover:opacity-90
            transition
          "
        >
          Live Site
        </a>
      </div>
    </div>
  );
};

export default Card;
