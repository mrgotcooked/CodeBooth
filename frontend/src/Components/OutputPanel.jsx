import {
  TerminalIcon,
  CheckCircle2Icon,
  XCircleIcon,
  PlayCircleIcon,
} from "lucide-react";

function OutputPanel({ output }) {
  return (
    <div
      className="
        h-full
        flex
        flex-col
        bg-base-100
        rounded-[2rem]
        border
        border-base-content/10
        overflow-hidden
      "
    >
      {/* HEADER */}
      <div
        className="
          flex
          items-center
          justify-between
          px-5
          py-4
          border-b
          border-base-content/10
          bg-base-100/80
          backdrop-blur-xl
        "
      >
        <div className="flex items-center gap-3">
          <div className="size-9 rounded-xl bg-primary/10 flex items-center justify-center">
            <TerminalIcon className="size-4 text-primary" />
          </div>

          <div>
            <p className="font-semibold text-sm">
              Console
            </p>

            <p className="text-xs text-base-content/50">
              Runtime Output
            </p>
          </div>
        </div>

        {/* STATUS */}
        {output === null ? (
          <div className="badge badge-outline gap-2">
            <PlayCircleIcon className="size-3" />
            Ready
          </div>
        ) : output.success ? (
          <div className="badge badge-success gap-2">
            <CheckCircle2Icon className="size-3" />
            Success
          </div>
        ) : (
          <div className="badge badge-error gap-2">
            <XCircleIcon className="size-3" />
            Failed
          </div>
        )}
      </div>

      {/* BODY */}
      <div
        className="
          flex-1
          overflow-auto
          bg-neutral
          text-neutral-content
          p-5
          font-mono
          text-sm
        "
      >
        {output === null ? (
          <div className="h-full flex items-center justify-center text-neutral-content/50">
            <div className="text-center">
              <TerminalIcon className="size-10 mx-auto mb-3 opacity-50" />

              <p>Run your code to see output here</p>
            </div>
          </div>
        ) : output.success ? (
          <pre className="whitespace-pre-wrap text-success leading-7">
{`$ Program executed successfully

${output.output || "No output"}`}
          </pre>
        ) : (
          <div className="space-y-4">
            {output.output && (
              <pre className="whitespace-pre-wrap text-neutral-content leading-7">
                {output.output}
              </pre>
            )}

            <div className="rounded-xl border border-error/20 bg-error/5 p-4">
              <pre className="whitespace-pre-wrap text-error">
                {output.error}
              </pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default OutputPanel;