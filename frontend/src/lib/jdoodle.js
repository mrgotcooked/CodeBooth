import axios from "axios";

export const executeCode = async (language, code) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/api/execute",
      {
        language:
          language === "python"
            ? "python3"
            : language === "cpp"
            ? "cpp"
            : "nodejs",
        script: code,
      }
    );

    return {
      success: true,
      output: response.data.output,
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      output: "",
    };
  }
};