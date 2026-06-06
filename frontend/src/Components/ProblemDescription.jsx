import {
  BookOpenIcon,
  Code2Icon,
  Layers3Icon,
  SparklesIcon,
} from "lucide-react";
import { getDifficultyBadgeClass } from "../lib/utils";

function ProblemDescription({
  problem,
  currentProblemId,
  onProblemChange,
  allProblems,
}) {
  if (!problem) {
    return (
      <div className="h-full flex items-center justify-center bg-base-100">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  return (
    <div className="h-full overflow-y-auto bg-base-100">
      <div className="p-5 lg:p-6 space-y-6">
        {/* HERO HEADER */}
        <div
          className="
          rounded-[2rem]
          border
          border-base-content/10
          bg-base-100/60
          backdrop-blur-xl
          p-6
          shadow-sm
        "
        >
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <div className="badge badge-outline font-mono gap-2 px-3 py-3">
                  <SparklesIcon className="size-3" />
                  Challenge
                </div>

                <span
                  className={`badge ${getDifficultyBadgeClass(
                    problem.difficulty
                  )}`}
                >
                  {problem.difficulty}
                </span>

                <span className="badge badge-outline">
                  {problem.category}
                </span>
              </div>

              <h1 className="text-4xl lg:text-5xl font-black tracking-tight">
                {problem.title}
              </h1>

              <p className="text-base-content/60 mt-3 text-base">
                Solve the challenge and test your approach in real time.
              </p>
            </div>
          </div>

          <div className="divider my-6"></div>

          {/* PROBLEM SWITCHER */}
          <select
            className="
              select
              w-full
              rounded-2xl
              border-base-content/10
              bg-base-100
              text-base
            "
            value={currentProblemId}
            onChange={(e) => onProblemChange(e.target.value)}
          >
            {allProblems.map((p) => (
              <option key={p.id} value={p.id}>
                {p.title} • {p.difficulty}
              </option>
            ))}
          </select>
        </div>

        {/* DESCRIPTION */}
        <div
          className="
          rounded-[2rem]
          border
          border-base-content/10
          bg-base-100/60
          backdrop-blur-xl
          p-6
          hover:border-primary/20
          transition-all
          duration-300
        "
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <BookOpenIcon className="size-5 text-primary" />
            </div>

            <h2 className="text-2xl font-bold">
              Description
            </h2>
          </div>

          <div className="divider mt-0 mb-6"></div>

          <div className="space-y-5 text-base-content/80 leading-8">
            <p>{problem.description.text}</p>

            {problem.description.notes.map((note, idx) => (
              <p key={idx}>{note}</p>
            ))}
          </div>
        </div>

        {/* EXAMPLES */}
        <div
          className="
          rounded-[2rem]
          border
          border-base-content/10
          bg-base-100/60
          backdrop-blur-xl
          p-6
          hover:border-secondary/20
          transition-all
          duration-300
        "
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="size-10 rounded-xl bg-secondary/10 flex items-center justify-center">
              <Code2Icon className="size-5 text-secondary" />
            </div>

            <h2 className="text-2xl font-bold">
              Examples
            </h2>
          </div>

          <div className="divider mt-0 mb-6"></div>

          <div className="space-y-5">
            {problem.examples.map((example, idx) => (
              <div key={idx}>
                <div className="mb-3">
                  <div className="badge badge-outline font-mono">
                    Example {String(idx + 1).padStart(2, "0")}
                  </div>
                </div>

                <div className="mockup-code text-sm shadow-lg">
                  <pre className="whitespace-pre-wrap break-words">
                    <code>{`Input:
${example.input}

Output:
${example.output}`}</code>
                  </pre>

                  {example.explanation && (
                    <pre className="whitespace-pre-wrap break-words text-base-content/70">
                      <code>{`Explanation:
${example.explanation}`}</code>
                    </pre>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CONSTRAINTS */}
        <div
          className="
          rounded-[2rem]
          border
          border-base-content/10
          bg-base-100/60
          backdrop-blur-xl
          p-6
          hover:border-accent/20
          transition-all
          duration-300
        "
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="size-10 rounded-xl bg-accent/10 flex items-center justify-center">
              <Layers3Icon className="size-5 text-accent" />
            </div>

            <h2 className="text-2xl font-bold">
              Constraints
            </h2>
          </div>

          <div className="divider mt-0 mb-6"></div>

          <div className="flex flex-wrap gap-2">
            {problem.constraints.map((constraint, idx) => (
              <div
                key={idx}
                className="
                  px-4
                  py-2.5
                  rounded-xl
                  border
                  border-base-content/10
                  bg-base-200/40
                  font-mono
                  text-sm
                  hover:border-primary/20
                  transition-all
                  duration-300
                "
              >
                {constraint}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProblemDescription;