import {
  Code2,
  Clock,
  Users,
  Trophy,
  Loader,
  Sparkles,
} from "lucide-react";
import { getDifficultyBadgeClass } from "../lib/utils";
import { formatDistanceToNow } from "date-fns";

function RecentSessions({ sessions, isLoading }) {
  return (
    <div
      className="
        mt-8
        rounded-3xl
        border
        border-base-content/10
        bg-base-100/60
        backdrop-blur-xl
        shadow-xl
      "
    >
      <div className="p-6">
        {/* HEADER */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="size-12 rounded-2xl bg-gradient-to-br from-accent via-secondary to-primary flex items-center justify-center shadow-lg">
              <Clock className="size-6 text-white" />
            </div>

            <div>
              <h2 className="text-3xl font-black">
                Session History
              </h2>

              <p className="text-sm text-base-content/60">
                Track your coding battles and progress
              </p>
            </div>
          </div>

        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {isLoading ? (
            <div className="col-span-full flex items-center justify-center py-20">
              <Loader className="size-10 animate-spin text-primary" />
            </div>
          ) : sessions.length > 0 ? (
            sessions.map((session) => (
              <div
                key={session._id}
                className="
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-base-content/10
                  bg-base-200/40
                  backdrop-blur-md
                  hover:border-primary/40
                  hover:-translate-y-1
                  hover:shadow-xl
                  transition-all
                  duration-300
                "
              >
                {/* Glow */}
                <div
                  className={`
                    absolute
                    top-0
                    right-0
                    h-24
                    w-24
                    rounded-full
                    blur-3xl
                    ${
                      session.status === "active"
                        ? "bg-success/20"
                        : "bg-primary/10"
                    }
                  `}
                />

                {/* ACTIVE BADGE */}
                {session.status === "active" && (
                  <div className="absolute top-4 right-4 z-10">
                    <div className="badge badge-success gap-2">
                      <div className="size-2 rounded-full bg-success animate-ping" />
                      LIVE
                    </div>
                  </div>
                )}

                <div className="relative p-5">
                  {/* TOP */}
                  <div className="flex items-start gap-4 mb-5">
                    <div
                      className={`
                        size-14
                        rounded-2xl
                        flex
                        items-center
                        justify-center
                        shadow-lg
                        ${
                          session.status === "active"
                            ? "bg-gradient-to-br from-success to-success/70"
                            : "bg-gradient-to-br from-primary via-secondary to-accent"
                        }
                      `}
                    >
                      <Code2 className="size-7 text-white" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-lg truncate mb-2">
                        {session.problem}
                      </h3>

                      <span
                        className={`badge badge-sm ${getDifficultyBadgeClass(
                          session.difficulty
                        )}`}
                      >
                        {session.difficulty}
                      </span>
                    </div>
                  </div>

                  {/* INFO */}
                  <div className="space-y-3 text-sm text-base-content/70 mb-5">
                    <div className="flex items-center gap-2">
                      <Clock className="size-4" />
                      <span>
                        {formatDistanceToNow(
                          new Date(session.createdAt),
                          { addSuffix: true }
                        )}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Users className="size-4" />
                      <span>
                        {session.participant
                          ? "2 Participants"
                          : "1 Participant"}
                      </span>
                    </div>
                  </div>

                  {/* FOOTER */}
                  <div className="pt-4 border-t border-base-content/10 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Trophy className="size-4 text-accent" />
                      <span className="text-xs font-semibold uppercase">
                        Completed
                      </span>
                    </div>

                    <span className="text-xs text-base-content/50">
                      {new Date(
                        session.updatedAt
                      ).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-24">
              <div className="size-24 mx-auto mb-6 rounded-3xl bg-gradient-to-br from-accent/20 to-secondary/20 flex items-center justify-center">
                <Sparkles className="size-12 text-accent/60" />
              </div>

              <h3 className="text-2xl font-black mb-2">
                No Coding History Yet
              </h3>

              <p className="text-base-content/60 mb-6">
                Complete your first coding session and start building your journey.
              </p>

            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default RecentSessions;