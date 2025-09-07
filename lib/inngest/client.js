import { Inngest } from "inngest";

// Create a client to send and receive events
export const inngest = new Inngest({
  id: "yashai",
  name: "YashAI",
  signingKey: process.env.INNGEST_SIGNING_KEY,
  // credentials: {
  //   gemini: {
  //     apiKey: process.env.GEMINI_API_KEY,
  //   },
  // },
});
