import { Link } from "react-router";
import Navbar from "../Components/Navbar";
import { PROBLEMS } from "../Data/problems";
import {
  ChevronRightIcon,
  Code2Icon,
  SparklesIcon,
} from "lucide-react";
import { getDifficultyBadgeClass } from "../lib/utils";

function ProblemsPage() {
  const problems = Object.values(PROBLEMS);

  const easyProblemsCount = problems.filter(
    (p) => p.difficulty === "Easy"
  ).length;

  const mediumProblemsCount = problems.filter(
    (p) => p.difficulty === "Medium"
  ).length;

  const hardProblemsCount = problems.filter(
    (p) => p.difficulty === "Hard"
  ).length;

  return (
    <div className="relative min-h-screen overflow-hidden bg-base-100">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 h-72 w-72 rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-secondary/10 blur-[120px]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--bc)/0.04)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--bc)/0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-12">

        {/* Hero */}
        <div className="mb-12">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-base-100/60 backdrop-blur-xl mb-6">
            <SparklesIcon className="size-4 text-primary" />
            <span className="text-sm">
              Curated Coding Challenges
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-4">
            Problem
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              {" "}Workspace
            </span>
          </h1>

          <p className="text-lg text-base-content/70 max-w-2xl">
            Practice interview-ready questions, improve problem-solving,
            and prepare for your next technical interview.
          </p>
        </div>

        {/* Bento Stats */}
        <div className="grid md:grid-cols-4 gap-4 mb-12">

          <div className="rounded-3xl border border-base-content/10 bg-base-100/60 backdrop-blur-xl p-6">
            <p className="text-sm text-base-content/60 mb-2">
              Total Problems
            </p>

            <h3 className="text-4xl font-black text-primary">
              {problems.length}
            </h3>
          </div>

          <div className="rounded-3xl border border-success/20 bg-base-100/60 backdrop-blur-xl p-6">
            <p className="text-sm text-base-content/60 mb-2">
              Easy
            </p>

            <h3 className="text-4xl font-black text-success">
              {easyProblemsCount}
            </h3>
          </div>

          <div className="rounded-3xl border border-warning/20 bg-base-100/60 backdrop-blur-xl p-6">
            <p className="text-sm text-base-content/60 mb-2">
              Medium
            </p>

            <h3 className="text-4xl font-black text-warning">
              {mediumProblemsCount}
            </h3>
          </div>

          <div className="rounded-3xl border border-error/20 bg-base-100/60 backdrop-blur-xl p-6">
            <p className="text-sm text-base-content/60 mb-2">
              Hard
            </p>

            <h3 className="text-4xl font-black text-error">
              {hardProblemsCount}
            </h3>
          </div>

        </div>

        {/* Problems */}
        <div className="space-y-5">

          {problems.map((problem, index) => (
            <Link
              key={problem.id}
              to={`/problems/${problem.id}`}
              className="
                block
                rounded-[2rem]
                border
                border-base-content/10
                bg-base-100/60
                backdrop-blur-xl
                p-6
                hover:border-primary/20
                hover:shadow-2xl
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

                {/* Left */}
                <div className="flex-1">

                  <div className="flex flex-wrap items-center gap-3 mb-4">

                    <div className="badge badge-outline font-mono">
                      #{String(index + 1).padStart(2, "0")}
                    </div>

                    <div className="size-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <Code2Icon className="size-6 text-primary" />
                    </div>

                    <div>
                      <h2 className="text-xl font-bold">
                        {problem.title}
                      </h2>
                      
                      <div className="flex items-center gap-2 mt-1">

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
                    </div>
                  </div>

                  <p className="text-base-content/70 leading-relaxed">
                    {problem.description.text}
                  </p>
                </div>

                {/* Right */}
                <div className="flex items-center">

                  <div
                    className="
                      px-5
                      py-3
                      rounded-2xl
                      bg-primary/10
                      border
                      border-primary/10
                      text-primary
                      font-medium
                      flex
                      items-center
                      gap-2
                      group-hover:bg-primary/15
                    "
                  >
                    Solve

                    <ChevronRightIcon className="size-4" />
                  </div>

                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}

export default ProblemsPage;