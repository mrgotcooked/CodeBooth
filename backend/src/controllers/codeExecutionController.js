import axios from "axios";
import { ENV } from "../lib/env.js";

export const executeCode = async (req, res) => {
  try {
    const { script, language } = req.body;

let versionIndex = "0";

if (language === "cpp") {
  versionIndex = "5";
}

    const response = await axios.post(
      "https://api.jdoodle.com/v1/execute",
      {
        clientId: ENV.JDOODLE_CLIENT_ID,
        clientSecret: ENV.JDOODLE_CLIENT_SECRET,
        script,
        language,
        versionIndex,
      }
    );

    res.status(200).json(response.data);
  } catch (error) {
    console.error("JDoodle Error:", error.response?.data || error.message);

    res.status(500).json({
      success: false,
      message: "Code execution failed",
    });
  }
};