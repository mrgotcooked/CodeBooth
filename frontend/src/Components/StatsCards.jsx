import {
  TrophyIcon,
  UsersIcon,
  TrendingUpIcon,
  SparklesIcon,
} from "lucide-react";

function StatsCards({ activeSessionsCount, recentSessionsCount }) {
  const readiness = Math.min(
    Math.round((recentSessionsCount / 20) * 100),
    100
  );

  const cards = [
    {
      title: "Live Sessions",
      value: activeSessionsCount,
      subtitle:
        activeSessionsCount > 0
          ? "Developers are collaborating right now"
          : "Waiting for challengers",
      icon: UsersIcon,
      gradient: "from-primary to-secondary",
      isProgress: false,
    },
    {
      title: "Sessions Completed",
      value: recentSessionsCount,
      subtitle:
        recentSessionsCount > 0
          ? "Keep building momentum"
          : "Your journey starts here",
      icon: TrophyIcon,
      gradient: "from-secondary to-accent",
      isProgress: false,
    },
    {
      title: "Interview Readiness",
      value: `${readiness}%`,
      subtitle:
        readiness >= 80
          ? "You're interview ready!"
          : readiness >= 50
          ? "Making strong progress"
          : "Keep practicing consistently",
      icon: TrendingUpIcon,
      gradient: "from-accent to-primary",
      isProgress: true,
    },
  ];

  return (
    <div className="lg:col-span-1 flex flex-col gap-6">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="
              relative
              overflow-hidden
              rounded-3xl
              border
              border-base-content/10
              bg-base-100/60
              backdrop-blur-xl
              shadow-xl
              hover:shadow-2xl
              transition-all
              duration-300
              hover:-translate-y-1
            "
          >
            {/* Glow */}
            <div
              className={`
                absolute
                top-0
                right-0
                h-32
                w-32
                rounded-full
                blur-3xl
                opacity-20
                bg-gradient-to-br
                ${card.gradient}
              `}
            />

            <div className="relative p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-5">
                <div
                  className={`
                    size-14
                    rounded-2xl
                    bg-gradient-to-br
                    ${card.gradient}
                    flex
                    items-center
                    justify-center
                    shadow-lg
                  `}
                >
                  <Icon className="size-7 text-white" />
                </div>

                <SparklesIcon className="size-5 text-primary/60" />
              </div>

              {/* Title */}
              <h3 className="text-sm uppercase tracking-wider text-base-content/60 mb-2">
                {card.title}
              </h3>

              {/* Value */}
              <p className="text-5xl font-black mb-2">
                {card.value}
              </p>

              {/* Progress Section */}
              {card.isProgress && (
                <div className="mb-4">
                  <progress
                    className="progress progress-primary w-full"
                    value={readiness}
                    max="100"
                  />

                  <div className="flex justify-between mt-2 text-xs text-base-content/60">
                    <span>{recentSessionsCount}/20 sessions</span>
                    <span>{100 - readiness}% remaining</span>
                  </div>
                </div>
              )}

              {/* Subtitle */}
              <p className="text-sm text-base-content/60">
                {card.subtitle}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default StatsCards;