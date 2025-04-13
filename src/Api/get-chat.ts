import axios from "axios";

const sendMessage = async (message: string, sessionId: string | null) => {
  try {
    const response = await axios.post(
      `${process.env.BACKEND}/chat`,
      {
        message,
        // index_name: "improved",
        session_id: sessionId,
        top_k: 8,
      }
    );
    return response.data;
  } catch (error: any) {
    if (error.response) {
      console.error("API Error Response:", error.response.data.detail);
    }
    console.error("Error sending message:", error.message);
    throw error;
  }
};

export default sendMessage;
