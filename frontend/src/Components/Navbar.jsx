import { Link, useLocation } from "react-router";
import {
  Aperture,
  BookOpenIcon,
  LayoutDashboardIcon,
} from "lucide-react";
import { UserButton } from "@clerk/clerk-react";

function Navbar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 border-b border-base-content/10 bg-base-100/70 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="group flex items-center gap-3"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-2xl bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div
              className="
                relative
                size-11
                rounded-2xl
                bg-gradient-to-br
                from-primary
                via-secondary
                to-accent
                flex
                items-center
                justify-center
              "
            >
              <Aperture className="size-7 text-white transition-transform duration-300 group-hover:animate-[spin_4s_linear_infinite]" />
            </div>
          </div>

          <div>
            <h1
              className="
                font-black
                text-2xl
                tracking-tight
                bg-gradient-to-r
                from-primary
                via-secondary
                to-accent
                bg-clip-text
                text-transparent
              "
            >
              CodeBooth
            </h1>

            <p className="text-xs text-base-content/50 -mt-0.5">
              Live Coding Rooms
            </p>
          </div>
        </Link>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          {/* Workspace Switcher */}
          <div
            className="
              flex
              items-center
              rounded-2xl
              border
              border-base-content/10
              bg-base-200/40
              backdrop-blur-xl
              p-1
            "
          >
            <Link
              to="/problems"
              className={`
                px-4 py-2.5 rounded-xl transition-all duration-300 
                ${
                  isActive("/problems")
                    ? "bg-base-100 border border-base-content/10 shadow-md text-base-content"
                    : "text-base-content/60 hover:text-base-content hover:bg-base-100/60"
                }
              `}
            >
              <div className="flex items-center gap-2 ">
                <BookOpenIcon className="size-4" />
                <span className="font-medium hidden sm:inline">
                  Problems
                </span>
              </div>
            </Link>

            <Link
              to="/dashboard"
              className={`
                px-4 py-2.5 rounded-xl transition-all duration-300
                ${
                  isActive("/dashboard")
                    ? "bg-base-100 border border-base-content/10 shadow-md text-base-content"
                    : "text-base-content/60 hover:text-base-content hover:bg-base-100/60"
                }
              `}
            >
              <div className="flex items-center gap-2">
                <LayoutDashboardIcon className="size-4" />
                <span className="font-medium hidden sm:inline">
                  Dashboard
                </span>
              </div>
            </Link>
          </div>

          {/* User */}
          <div
            className="
                h-12
                w-12
                rounded-full
                border
                border-base-content/10
                bg-base-100/50
                backdrop-blur-xl
                flex
                items-center
                justify-center
                hover:border-primary/20
                hover:shadow-lg
                hover:shadow-primary/10
                transition-all
                duration-300
                    "
            >
  <UserButton />
</div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;