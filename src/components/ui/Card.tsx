import Image from "next/image";

type CardProps = {
  title: string;
  difficulty: string;
  github: string;
  livesite: string;
  img: string;
};

const Card = ({ title, difficulty, github, livesite, img }: CardProps) => {
  return (
    <div
      className="
       bg-[var(--surface)]
      border border-[var(--border)]
      p-3 rounded-2xl
      hover:-translate-y-1
      hover:shadow-lg
      transition-all
    "
    >
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

      <h3 className="text-2xl font-semibold mb-2 text-[var(--text-primary)]">
        {title}
      </h3>

      <span className="text-sm capitalize text-[var(--text-secondary)]">
        Difficulty: {difficulty}
      </span>

      <div className="flex gap-4 justify-end mt-4">
        {/* GitHub */}
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="
            text-sm px-4 py-2
            border border-[var(--border)]
            rounded-lg
            text-[var(--text-primary)]
            hover:bg-[var(--surface)]
            transition
          "
        >
          GitHub
        </a>

        {/* Live Site */}
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
