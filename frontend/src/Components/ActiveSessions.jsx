import {
  ArrowRightIcon,
  Code2Icon,
  CrownIcon,
  SparklesIcon,
  UsersIcon,
  ZapIcon,
  LoaderIcon,
} from "lucide-react";
import { Link } from "react-router";
import { getDifficultyBadgeClass } from "../lib/utils";

function ActiveSessions({ sessions, isLoading, isUserInSession }) {
  return (
    <div
      className="
        lg:col-span-2
        rounded-3xl
        border
        border-base-content/10
        bg-base-100/60
        backdrop-blur-xl
        shadow-xl
        hover:shadow-2xl
        transition-all
        duration-300
      "
    >
      <div className="p-6">
        {/* HEADER */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="size-12 rounded-2xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center shadow-lg">
              <ZapIcon className="size-6 text-white" />
            </div>

            <div>
              <h2 className="text-3xl font-black">
                Coding Arena
              </h2>

              <p className="text-sm text-base-content/60">
                Join developers solving challenges in real time
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="size-3 rounded-full bg-success" />
              <div className="absolute inset-0 size-3 rounded-full bg-success animate-ping" />
            </div>

            <span className="font-semibold text-success">
              {sessions.length} Live
            </span>
          </div>
        </div>

        {/* CONTENT */}
        <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
          {isLoading ? (
            <div className="flex items-center justify-center py-20">
              <LoaderIcon className="size-10 animate-spin text-primary" />
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
                  hover:shadow-lg
                  transition-all
                  duration-300
                "
              >
                {/* Glow */}
                <div className="absolute top-0 right-0 h-28 w-28 rounded-full bg-primary/10 blur-3xl" />

                <div className="relative flex items-center justify-between gap-5 p-5">
                  {/* LEFT */}
                  <div className="flex items-center gap-4 flex-1 min-w-0">
                    <div className="relative size-14 rounded-2xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center shadow-lg">
                      <Code2Icon className="size-7 text-white" />

                      <div className="absolute -top-1 -right-1 size-4 rounded-full bg-success border-2 border-base-100" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center flex-wrap gap-2 mb-2">
                        <h3 className="font-bold text-lg truncate">
                          {session.problem}
                        </h3>

                        <span
                          className={`badge badge-sm ${getDifficultyBadgeClass(
                            session.difficulty
                          )}`}
                        >
                          {session.difficulty.charAt(0).toUpperCase() +
                            session.difficulty.slice(1)}
                        </span>
                      </div>

                      <div className="flex items-center flex-wrap gap-4 text-sm text-base-content/70">
                        <div className="flex items-center gap-1.5">
                          <CrownIcon className="size-4" />
                          <span>{session.host?.name}</span>
                        </div>

                        <div className="flex items-center gap-1.5">
                          <UsersIcon className="size-4" />
                          <span>
                            {session.participant ? "2/2 Players" : "1/2 Players"}
                          </span>
                        </div>

                        {session.participant &&
                        !isUserInSession(session) ? (
                          <span className="badge badge-error gap-1">
                            🔒 Full
                          </span>
                        ) : (
                          <span className="badge badge-success gap-1">
                            🟢 Open
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* RIGHT */}
                  {session.participant &&
                  !isUserInSession(session) ? (
                    <button className="btn btn-disabled rounded-xl">
                      Full
                    </button>
                  ) : (
                    <Link
                      to={`/session/${session._id}`}
                      className="
                        btn
                        btn-primary
                        rounded-xl
                        gap-2
                        shadow-lg
                        hover:shadow-primary/30
                        hover:scale-105
                        transition-all
                        duration-200
                      "
                    >
                      {isUserInSession(session)
                        ? "Rejoin"
                        : "Join"}

                      <ArrowRightIcon className="size-4" />
                    </Link>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-20 mt-20">
              <div className="size-24 mx-auto mb-6 rounded-3xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <SparklesIcon className="size-12 text-primary/60" />
              </div>

              <h3 className="text-2xl font-black mb-2">
                Arena is Empty
              </h3>

              <p className="text-base-content/60 mb-6">
                Create the first coding room and challenge another developer.
              </p>

            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ActiveSessions;