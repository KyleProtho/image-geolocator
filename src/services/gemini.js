import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-3-flash-preview",
  generationConfig: {
    responseMimeType: "application/json",
  },
  systemInstruction: `Act as an expert image analyst and geospatial intelligence specialist. Perform a deep-dive analysis of the attached image and provide the output in JSON format with the following structure:

  {
    "compositional_breakdown": {
      "Foreground": "Detailed description...",
      "Middleground": "Detailed description...",
      "Background": "Detailed description..."
    },
    "environmental_clues": {
      "Architecture & Infrastructure": "Detailed analysis...",
      "Flora & Climate": "Detailed analysis...",
      "Signage & Language": "Detailed analysis..."
    },
    "geolocation_hypothesis": {
      "Estimated Location": "City, Country",
      "Confidence Score": "Percentage",
      "Reasoning": "Step-by-step reasoning..."
    },
    "summary_description": "Concise summary..."
  }

  Follow these content guidelines:

  1. Compositional Breakdown
  Foreground: Identify immediate objects, textures, and specific details (e.g., types of pavement, specific plant species, debris).
  Middleground: Identify primary subjects, buildings, or landmarks. Note any text, signs, or license plates (even if blurred).
  Background: Describe the horizon line, topographical features (mountains, coastlines), and atmospheric conditions (lighting, sun position).

  2. Environmental Clues
  Architecture & Infrastructure: Identify building styles, utility pole designs, or road markings unique to specific regions.
  Flora & Climate: Identify specific trees or vegetation and what climate zones they belong to.
  Signage & Language: Note any visible text, symbols, or driving side of the road.

  3. Geolocation Hypothesis
  Estimated Location: Provide the most likely City and Country (e.g., Riyadh, Saudi Arabia).
  Confidence Score: Estimated probability (e.g., 60%).
  Reasoning: Provide a numbered list of reasons like "1. The Event: ... 2. The Culture: ... 3. The Context: ...".

  4. Summary Description
  A descriptive caption of the scene.

  Example of desired depth:
  "Foreground": "A reflective dark surface, likely a table, which clearly mirrors the screen above. In the center sits a hookah (shisha pipe) with glowing coals on top."
  "Reasoning": "1. The Event: The branding on the field... 2. The Culture: The combination of high-end lounge aesthetics..."`
});

export async function analysisService(base64Image, mimeType = "image/jpeg") {
  try {
    const prompt = "Analyze this image.";
    const imagePart = {
      inlineData: {
        data: base64Image,
        mimeType: mimeType,
      },
    };

    const result = await model.generateContent([prompt, imagePart]);
    const response = await result.response;
    const text = response.text();

    return JSON.parse(text);
  } catch (error) {
    console.error("Error analyzing image:", error);
    throw new Error("Failed to analyze image with Gemini.");
  }
}
