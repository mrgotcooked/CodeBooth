import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { PROBLEMS } from "../Data/problems";
import Navbar from "../Components/Navbar";

import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import ProblemDescription from "../Components/ProblemDescription";
import OutputPanel from "../Components/OutputPanel";
import CodeEditorPanel from "../Components/CodeEditorPanel";
import { executeCode } from "../lib/jdoodle.js";
import toast from "react-hot-toast";
import confetti from "canvas-confetti";

function ProblemPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [currentProblemId, setCurrentProblemId] = useState("two-sum");
  const [selectedLanguage, setSelectedLanguage] = useState("javascript");
  const [code, setCode] = useState(PROBLEMS[currentProblemId].starterCode.javascript);
  const [output, setOutput] = useState(null);
  const [isRunning, setIsRunning] = useState(false);

  const currentProblem = PROBLEMS[currentProblemId];

  // update problem when URL param changes
  useEffect(() => {
    if (id && PROBLEMS[id]) {
      setCurrentProblemId(id);
      setCode(PROBLEMS[id].starterCode[selectedLanguage]);
      setOutput(null);
    }
  }, [id, selectedLanguage]);

  const handleLanguageChange = (e) => {
    const newLang = e.target.value;
    setSelectedLanguage(newLang);
    setCode(currentProblem.starterCode[newLang]);
    setOutput(null);
  };

  const handleProblemChange = (newProblemId) => navigate(`/problems/${newProblemId}`);

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 250,
      origin: { x: 0.2, y: 0.6 },
    });

    confetti({
      particleCount: 80,
      spread: 250,
      origin: { x: 0.8, y: 0.6 },
    });
  };

  const normalizeOutput = (output) => {
    // normalize output for comparison (trim whitespace, handle different spacing)
    return output
      .trim()
      .split("\n")
      .map((line) =>
        line
          .trim()
          // remove spaces after [ and before ]
          .replace(/\[\s+/g, "[")
          .replace(/\s+\]/g, "]")
          // normalize spaces around commas to single space after comma
          .replace(/\s*,\s*/g, ",")
      )
      .filter((line) => line.length > 0)
      .join("\n");
  };

  const checkIfTestsPassed = (actualOutput, expectedOutput) => {
    const normalizedActual = normalizeOutput(actualOutput);
    const normalizedExpected = normalizeOutput(expectedOutput);

    return normalizedActual == normalizedExpected;
  };

  const handleRunCode = async () => {
    setIsRunning(true);
    setOutput(null);

    const result = await executeCode(selectedLanguage, code);
    setOutput(result);
    setIsRunning(false);

    // check if code executed successfully and matches expected output

    if (result.success) {
      const expectedOutput = currentProblem.expectedOutput[selectedLanguage];
      console.log("Actual:", JSON.stringify(result.output));
      console.log("Expected:", JSON.stringify(expectedOutput));
      const testsPassed = checkIfTestsPassed(result.output, expectedOutput);

      if (testsPassed) {
        triggerConfetti();
        toast.success("All tests passed! Great job!");
      } else {
        toast.error("Tests failed. Check your output!");
      }
    } else {
      toast.error("Code execution failed!");
    }
  };

 return (
  <div className="relative h-screen overflow-hidden bg-base-100 flex flex-col">
    {/* BACKGROUND */}
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-primary/10 blur-[140px]" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-secondary/10 blur-[140px]" />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--bc)/0.04)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--bc)/0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />
    </div>

    <Navbar />

    <div className="flex-1 p-4 lg:p-5 overflow-hidden">
      <div
        className="
          h-full
          rounded-[2rem]
          border
          border-base-content/10
          bg-base-100/40
          backdrop-blur-xl
          overflow-hidden
          shadow-2xl
        "
      >

        <PanelGroup
          direction="horizontal"
          className="h-full"
        >
          {/* LEFT PANEL */}
          <Panel defaultSize={40} minSize={30}>
            <ProblemDescription
              problem={currentProblem}
              currentProblemId={currentProblemId}
              onProblemChange={handleProblemChange}
              allProblems={Object.values(PROBLEMS)}
            />
          </Panel>

          {/* VERTICAL HANDLE */}
          <PanelResizeHandle
            className="
              relative
              w-[4px]
              group
              bg-transparent
            "
          >
            <div
              className="
                absolute
                inset-y-0
                left-1/2
                -translate-x-1/2
                w-[1px]
                bg-base-content/5
                group-hover:bg-primary
                transition-all
                duration-300
              "
            />
          </PanelResizeHandle>

          {/* RIGHT PANEL */}
          <Panel defaultSize={60} minSize={30}>
            <PanelGroup
              direction="vertical"
              className="h-full"
            >
              {/* EDITOR */}
              <Panel defaultSize={70} minSize={30}>
                <div className="h-full p-3 pb-1">
                  <CodeEditorPanel
                    selectedLanguage={selectedLanguage}
                    code={code}
                    isRunning={isRunning}
                    onLanguageChange={handleLanguageChange}
                    onCodeChange={setCode}
                    onRunCode={handleRunCode}
                  />
                </div>
              </Panel>

              {/* HORIZONTAL HANDLE */}
              <PanelResizeHandle
                className="
                  relative
                  h-[4px]
                  group
                  bg-transparent
                "
              >
                <div
                  className="
                    absolute
                    left-0
                    right-0
                    top-1/2
                    -translate-y-1/2
                    h-[1px]
                    bg-base-content/5
                    group-hover:bg-primary
                    transition-all
                    duration-300
                  "
                />
              </PanelResizeHandle>

              {/* OUTPUT */}
              <Panel defaultSize={30} minSize={20}>
                <div className="h-full p-3 pt-1">
                  <OutputPanel output={output} />
                </div>
              </Panel>
            </PanelGroup>
          </Panel>
        </PanelGroup>
      </div>
    </div>
  </div>
);
}

export default ProblemPage;