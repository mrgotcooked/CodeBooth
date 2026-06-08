import Editor from "@monaco-editor/react";
import {
  Loader2Icon,
  PlayIcon,
  CircleDotIcon,
  FileCode2Icon,
} from "lucide-react";
import { LANGUAGE_CONFIG } from "../Data/problems";

function CodeEditorPanel({
  selectedLanguage,
  code,
  isRunning,
  onLanguageChange,
  onCodeChange,
  onRunCode,
}) {
  return (
    <div className="h-full flex flex-col bg-base-100 rounded-[2rem] border border-base-content/10 overflow-hidden">

      {/* HEADER */}
      <div
        className="
          flex
          items-center
          justify-between
          px-5
          py-4
          bg-base-100/80
          backdrop-blur-xl
          border-b
          border-base-content/10
        "
      >
        {/* LEFT */}
        <div className="flex items-center gap-4">   

          <div className="h-5 w-px bg-base-content/10 hidden md:block" />

          {/* FILE INFO */}
          <div className="flex items-center gap-2">
            <div className="size-9 rounded-xl bg-primary/10 flex items-center justify-center">
              <FileCode2Icon className="size-4 text-primary" />
            </div>

            <div>
              <p className="text-sm font-semibold">
                Code Workspace
              </p>

              <p className="text-xs text-base-content/50">
                Write • Run • Iterate
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-3">

{/* LANGUAGE SELECTOR */}
<div className="flex items-center gap-2">
  {Object.entries(LANGUAGE_CONFIG).map(([key, lang]) => (
    <button
      key={key}
      onClick={() =>
        onLanguageChange({
          target: { value: key },
        })
      }
      className={`
        flex items-center gap-2 px-3 py-2 rounded-xl
        transition-all duration-200
        ${
          selectedLanguage === key
            ? "bg-primary text-primary-content"
            : "bg-base-200 hover:bg-base-300"
        }
      `}
    >
      <img
        src={lang.icon}
        alt={lang.name}
        className="size-6"
      />
      <span className="text-sm font-medium">
        {lang.name}
      </span>
    </button>
  ))}
</div>

          {/* RUN BUTTON */}
          <button
            className="
              btn
              btn-primary
              rounded-xl
              gap-2
              shadow-lg
              hover:shadow-primary/20
              transition-all
              duration-300
            "
            disabled={isRunning}
            onClick={onRunCode}
          >
            {isRunning ? (
              <>
                <Loader2Icon className="size-4 animate-spin" />
                Running...
              </>
            ) : (
              <>
                <PlayIcon className="size-4" />
                Run Code
              </>
            )}
          </button>
        </div>
      </div>

      {/* EDITOR */}
      <div className="flex-1 bg-[#1e1e1e]">
        <Editor
          height="100%"
          language={LANGUAGE_CONFIG[selectedLanguage].monacoLang}
          value={code}
          onChange={onCodeChange}
          theme="vs-dark"
          options={{
            fontSize: 15,
            fontFamily: "JetBrains Mono, monospace",

            minimap: {
              enabled: false,
            },

            scrollBeyondLastLine: false,
            automaticLayout: true,
            smoothScrolling: true,

            lineNumbers: "on",

            cursorBlinking: "smooth",

            renderLineHighlight: "all",

            padding: {
              top: 20,
              bottom: 20,
            },

            tabSize: 2,

            wordWrap: "on",

            scrollbar: {
              verticalScrollbarSize: 10,
              horizontalScrollbarSize: 10,
            },
          }}
        />
      </div>
    </div>
  );
}

export default CodeEditorPanel;