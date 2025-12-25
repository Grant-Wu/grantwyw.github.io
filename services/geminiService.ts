
import { GoogleGenAI } from "@google/genai";
import { SYSTEM_PROMPT } from "../constants";

export class GeminiService {
  // Use a fresh instance right before each call to ensure the latest API key is utilized.
  async chat(message: string) {
    try {
      // Initialize inside the method using the named parameter as required.
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: message,
        config: {
          systemInstruction: SYSTEM_PROMPT,
          temperature: 0.7,
          // Guidelines: Avoid setting maxOutputTokens without a thinkingBudget to prevent empty/blocked responses.
          // Removed maxOutputTokens to allow the model more flexibility in generating quality responses.
        },
      });
      
      // The text is retrieved via the .text property on GenerateContentResponse.
      return response.text;
    } catch (error) {
      console.error("Gemini API Error:", error);
      return "I seem to be experiencing a connection glitch in the digital void. Please try again.";
    }
  }
}

export const geminiService = new GeminiService();
