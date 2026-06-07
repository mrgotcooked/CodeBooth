import { useUser } from "@clerk/clerk-react";
import {
  ArrowRightIcon,
  SparklesIcon,
  ZapIcon,
  TrophyIcon,
  CodeIcon,
} from "lucide-react";

function WelcomeSection({ onCreateSession }) {
  const { user } = useUser();

  return (
    <div className="relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 h-72 w-72 rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-secondary/20 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="rounded-3xl border border-base-content/10 bg-base-100/50 backdrop-blur-xl p-8 lg:p-12 shadow-2xl">

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">

            {/* Left */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-5">
                <div>
                  <h1 className="text-4xl lg:text-6xl font-black">
                    Welcome back,
                    <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                      {" "}
                      {user?.firstName || "Coder"}
                    </span>
                  </h1>
                </div>
              </div>

              <p className="text-lg text-base-content/70 max-w-2xl mb-8">
                Create interview rooms, challenge developers,
                and sharpen your problem-solving skills.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl">

                <div className="rounded-2xl border border-base-content/10 bg-base-200/40 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <CodeIcon className="size-4 text-primary" />
                    <span className="text-sm text-base-content/60">
                      Practice
                    </span>
                  </div>

                  <p className="text-2xl font-black">∞</p>
                </div>

                <div className="rounded-2xl border border-base-content/10 bg-base-200/40 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <ZapIcon className="size-4 text-secondary" />
                    <span className="text-sm text-base-content/60">
                      Live Rooms
                    </span>
                  </div>

                  <p className="text-2xl font-black">24/7</p>
                </div>

                <div className="rounded-2xl border border-base-content/10 bg-base-200/40 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <TrophyIcon className="size-4 text-accent" />
                    <span className="text-sm text-base-content/60">
                      Goal
                    </span>
                  </div>

                  <p className="text-2xl font-black">Top 1%</p>
                </div>

              </div>
            </div>

            {/* Right */}
            <div>
              <button
                onClick={onCreateSession}
                className="
                  group
                  px-8
                  py-5
                  rounded-2xl
                  bg-gradient-to-r
                  from-primary
                  via-secondary
                  to-accent
                  text-white
                  font-bold
                  shadow-xl
                  hover:scale-105
                  transition-all
                  duration-300
                "
              >
                <div className="flex items-center gap-3">
                  <ZapIcon className="size-6" />
                  <span>Create Session</span>

                  <ArrowRightIcon
                    className="
                      size-5
                      group-hover:translate-x-1
                      transition-transform
                    "
                  />
                </div>
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomeSection;