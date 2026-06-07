import React from "react";
import { Link } from "react-router";
import {
  CheckIcon,
  ZapIcon,
  ArrowRightIcon,
  VideoIcon,
  Code2Icon,
  UsersIcon,
  Mic,
  Volume2,
  Aperture,
} from "lucide-react";
import { SignInButton } from "@clerk/clerk-react";

function HomePage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-base-100">
      {/* Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-secondary/20 blur-[120px]" />

        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--bc)/0.05)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--bc)/0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-base-content/10 bg-base-100/70 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            to={"/"}
            className="flex items-center gap-3 group transition-all"
          >
            <div className="size-11 rounded-2xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center ">
              {/* <SparklesIcon className="size-5 text-white" /> */}
              <Aperture className="size-7 text-white transition-transform duration-300 group-hover:animate-[spin_4s_linear_infinite]"/>
            </div>

            <div>
              <span className="font-black text-2xl bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent tracking-tight">
                CodeBooth
              </span>

              <p className="text-xs text-base-content/60">
                Real-time coding rooms
              </p>
            </div>
          </Link>

          <SignInButton mode="modal">
            <button className="btn btn-primary btn-lg rounded-2xl px-6 hover:-translate-y-1 transition-all group">
              Get Started
              <ArrowRightIcon className="size-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </SignInButton>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 py-12 lg:py-15">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            {/* Badge */}
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-base-100/60 backdrop-blur-xl px-4 py-2 shadow-lg">
                <ZapIcon className="size-4 text-primary" />
                <span className="text-sm font-medium">
                  Real-time collaboration
                </span>
              </div>
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tight">
              <span className="text-base-content">
                The coding room
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                you wish LeetCode had.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-8 text-lg lg:text-xl text-base-content/70 leading-relaxed max-w-xl">
              Pair program, run mock interviews, collaborate face-to-face,
              and solve problems together in one seamless workspace.
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-3 mt-8">
              {[
                "Live Video",
                "Shared Editor",
                "Multi-language",
              ].map((item) => (
                <div
                  key={item}
                  className="px-4 py-2 rounded-full border border-base-content/10 bg-base-100/60 backdrop-blur-xl flex items-center gap-2 hover:border-primary/30 transition-all"
                >
                  <CheckIcon className="size-4 text-success" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10 flex gap-4 flex-wrap">
              <SignInButton mode="modal">
                <button className="btn btn-primary btn-lg rounded-2xl px-8 hover:-translate-y-1 transition-all group">
                  Start Coding
                  <ArrowRightIcon className="size-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </SignInButton>

              
            </div>

            {/* Social Proof */}
            <div className="flex flex-wrap gap-8 mt-12">
              <div>
                <p className="text-3xl font-black">10K+</p>
                <p className="text-sm text-base-content/60">
                  Developers
                </p>
              </div>

              <div>
                <p className="text-3xl font-black">50K+</p>
                <p className="text-sm text-base-content/60">
                  Sessions
                </p>
              </div>

              <div>
                <p className="text-3xl font-black">99.9%</p>
                <p className="text-sm text-base-content/60">
                  Uptime
                </p>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="relative">

            {/* Floating Card 1 */}
            <div className="hidden lg:block absolute -top-6 -left-6 z-20">
              <div className="bg-base-100/70 backdrop-blur-xl border border-base-content/10 rounded-2xl px-4 py-3 shadow-xl">
                <p className="text-sm font-medium">
                  🟢 Alice joined room
                </p>
              </div>
            </div>

            {/* Floating Card 2 */}
            <div className="hidden lg:block absolute -bottom-4 -right-4 z-20">
              <div className="bg-base-100/70 backdrop-blur-xl border border-base-content/10 rounded-2xl px-4 py-3 shadow-xl">
                <p className="text-sm font-medium">
                  ✓ Solution Accepted
                </p>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="hidden lg:block absolute top-12 -right-8 rotate-6 z-20">
              <div className="badge badge-primary badge-lg">
                Live Cursor
              </div>
            </div>

            {/* Main Mockup */}
            <div className="relative rounded-[2rem] border border-base-content/10 bg-base-100/70 backdrop-blur-xl shadow-2xl overflow-hidden">

              {/* Browser Header */}
              <div className="border-b border-base-content/10 p-4 flex items-center gap-3">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-error" />
                  <div className="w-3 h-3 rounded-full bg-warning" />
                  <div className="w-3 h-3 rounded-full bg-success" />
                </div>

                <div className="flex-1 text-center">
                  <span className="text-sm text-base-content/50">
                    room/codebooth/interview
                  </span>
                </div>
              </div>

              {/* Mock Editor */}
              <div className="p-6 bg-neutral text-neutral-content min-h-[420px]">

                <div className="flex items-center justify-between mb-6">
                  <div className="badge badge-success gap-2">
                    Live Session
                  </div>

                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-primary border-2 border-neutral" />
                    <div className="w-8 h-8 rounded-full bg-secondary border-2 border-neutral" />
                  </div>
                </div>

                <pre className="text-sm leading-8 overflow-hidden">
{`function twoSum(nums, target) {
  const map = new Map();

  for(let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if(map.has(complement)) {
      return [map.get(complement), i];
    }

    map.set(nums[i], i);
  }
}

✓ Accepted`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>
{/* Feature Section */}
<section className="max-w-7xl mx-auto px-4 py-24">
  <div className="text-center mb-14">
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-base-100/60 backdrop-blur-xl mb-6">
      <Aperture className="size-4 text-primary" />
      <span className="text-sm">Built for modern developers</span>
    </div>

    <h2 className="text-4xl lg:text-5xl font-black tracking-tight">
      More than a
      <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
        {" "}meeting room
      </span>
    </h2>

    <p className="text-lg text-base-content/70 max-w-2xl mx-auto mt-4">
      Everything you need to run coding interviews, pair programming sessions,
      and collaborative problem solving.
    </p>
  </div>

  {/* Bento Grid */}
<div className="grid lg:grid-cols-3 gap-6">

  {/* Live Coding Workspace */}
  <div className="lg:col-span-2 rounded-[2rem] border border-base-content/10 bg-base-100/60 backdrop-blur-xl overflow-hidden shadow-2xl hover:border-primary/20 hover:-translate-y-1 transition-all duration-300">

    <div className="p-6 border-b border-base-content/10 flex justify-between items-center">
      <div>
        <h3 className="font-bold text-xl">
          Live Coding Workspace
        </h3>
        <p className="text-base-content/60 text-sm">
          See every keystroke in real time
        </p>
      </div>

      <div className="flex gap-2 flex-wrap justify-end">
        <div className="badge badge-success gap-2">
          <span className="w-2 h-2 rounded-full bg-success-content animate-pulse"></span>
          Alice typing...
        </div>

        <div className="badge badge-warning gap-2">
          Bob reviewing
        </div>
      </div>
    </div>

    <div className="relative bg-neutral text-neutral-content p-6 min-h-[300px]">

      <pre className="text-sm leading-7 overflow-hidden">
{`function solve(nums){
  const seen = new Map();

  for(let i = 0; i < nums.length; i++){
    if(seen.has(nums[i])){
      return true;
    }

    seen.set(nums[i], i);
  }
}

✓ Tests Passed`}
      </pre>

      {/* Floating Comment */}
      <div className="absolute bottom-4 right-4">
        <div className="bg-base-100 text-base-content rounded-2xl px-4 py-3 shadow-xl max-w-[220px]">
          <p className="text-xs text-base-content/50 mb-1">
            Bob
          </p>
          <p className="text-sm">
            Can we optimize this further?
          </p>
        </div>
      </div>

      {/* Activity */}
      <div className="absolute top-5 right-5">
        <div className="bg-success/10 border border-success/20 rounded-xl px-3 py-2">
          <span className="text-xs text-success">
            +12 lines added
          </span>
        </div>
      </div>
    </div>
  </div>

{/* Video Call */}
<div className="rounded-[2rem] border border-base-content/10 bg-base-100/60 backdrop-blur-xl p-6 shadow-xl hover:border-primary/20 hover:-translate-y-1 transition-all duration-300">

  <div className="size-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
    <VideoIcon className="size-7 text-primary" />
  </div>

  <h3 className="font-bold text-xl mb-2">
    Face-to-Face Interviews
  </h3>

  <p className="text-base-content/70 mb-6">
    Discuss solutions naturally while coding together.
  </p>

  {/* Interview UI */}
  <div className="rounded-2xl border border-base-content/10 bg-base-200/40 p-4">

    {/* Header */}
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-success animate-pulse"></div>
        <span className="text-sm font-medium">
          Interview Connected
        </span>
      </div>

      <span className="text-xs text-base-content/50">
        32 min
      </span>
    </div>

    {/* Participants */}
    <div className="grid grid-cols-2 gap-3">

      <div className="aspect-video rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/10 relative overflow-hidden">

        <div className="absolute top-2 left-2 badge badge-success badge-xs">
          Live
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="size-12 rounded-full bg-primary/20 flex items-center justify-center text-lg font-bold">
            A
          </div>
        </div>

        <div className="absolute bottom-2 left-2 text-xs font-medium">
          Aryan
        </div>
      </div>

      <div className="aspect-video rounded-xl bg-gradient-to-br from-secondary/20 to-secondary/5 border border-secondary/10 relative overflow-hidden">

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="size-12 rounded-full bg-secondary/20 flex items-center justify-center text-lg font-bold">
            I
          </div>
        </div>

        <div className="absolute bottom-2 left-2 text-xs font-medium">
          Interviewer
        </div>
      </div>

    </div>

    {/* Controls */}
    <div className="flex justify-center gap-2 mt-4">

      <button className="btn btn-circle btn-sm btn-ghost">
        <Mic/>
      </button>

      <button className="btn btn-circle btn-sm btn-ghost">
        <VideoIcon/>
      </button>

      <button className="btn btn-circle btn-sm btn-ghost">
        <Volume2/>
      </button>

      <button className="btn btn-circle btn-sm btn-error">
        ✕
      </button>

    </div>
  </div>

  {/* Footer */}
  <div className="flex items-center justify-between mt-4">
    <span className="text-xs text-success flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-success animate-pulse"></span>
      Real-time Audio & Video
    </span>

    <div className="badge badge-success">
      HD
    </div>
  </div>

</div>

  {/* Presence */}
  <div className="rounded-[2rem] border border-base-content/10 bg-base-100/60 backdrop-blur-xl p-6 shadow-xl hover:border-success/20 hover:-translate-y-1 transition-all duration-300">

    <div className="size-14 rounded-2xl bg-success/10 flex items-center justify-center mb-5">
      <UsersIcon className="size-7 text-success" />
    </div>

    <h3 className="font-bold text-xl mb-2">
      Real-Time Presence
    </h3>

    <p className="text-base-content/70 mb-6">
      Know exactly who's coding, reviewing and collaborating.
    </p>

    <div className="space-y-4">

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-success animate-pulse"></span>
          <span className="text-sm">
            Aryan is typing...
          </span>
        </div>

        <span className="text-xs opacity-60">
          now
        </span>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-warning"></span>
          <span className="text-sm">
            Reviewing solution
          </span>
        </div>

        <span className="text-xs opacity-60">
          2m
        </span>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-info"></span>
          <span className="text-sm">
            New comment added
          </span>
        </div>

        <span className="text-xs opacity-60">
          5m
        </span>
      </div>

    </div>
  </div>

  {/* Languages */}
  <div className="rounded-[2rem] border border-base-content/10 bg-base-100/60 backdrop-blur-xl p-6 shadow-xl hover:border-secondary/20 hover:-translate-y-1 transition-all duration-300">

    <div className="size-14 rounded-2xl bg-secondary/10 flex items-center justify-center mb-5">
      <Code2Icon className="size-7 text-secondary" />
    </div>

    <h3 className="font-bold text-xl mb-2">
      Multi-Language Support
    </h3>

    <p className="text-base-content/70 mb-6">
      Switch languages instantly without leaving the room.
    </p>

    {/* Terminal Style */}
    <div className="bg-neutral text-neutral-content rounded-2xl p-4 font-mono text-sm">
      <div>$ language list</div>
      <div>
        JavaScript ✓
      </div>
      <div>Python ✓</div>
      <div>C++ ✓</div>
    </div>
  </div>
  <div className="rounded-[2rem] border border-base-content/10 bg-base-100/60 backdrop-blur-xl p-6 shadow-xl hover:border-accent/20 hover:-translate-y-1 transition-all duration-300">

  <div className="size-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-5">
    <ZapIcon className="size-7 text-accent" />
  </div>

  <h3 className="font-bold text-xl mb-2">
    Instant Execution
  </h3>

  <p className="text-base-content/70 mb-6">
    Run code and validate solutions without leaving the room.
  </p>

  <div className="bg-neutral text-neutral-content rounded-2xl p-4 text-sm font-mono space-y-2">

    <div className="text-success">
      ✓ Test Case #1 Passed
    </div>

    <div className="text-success">
      ✓ Test Case #2 Passed
    </div>

    <div className="text-success">
      ✓ Test Case #3 Passed
    </div>

    <div className="border-t border-neutral-content/10 pt-2 mt-2">
      <span className="text-success font-bold">
        Accepted
      </span>
    </div>

  </div>

</div>

</div>
</section>
      </div>
  );
}

export default HomePage;