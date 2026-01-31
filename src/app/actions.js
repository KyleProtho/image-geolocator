"use server";

import { analysisService } from "@/services/gemini";

export async function analyzeImageAction(formData) {
    const file = formData.get("image");

    if (!file) {
        return { error: "No image provided." };
    }

    try {
        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        const base64Image = buffer.toString("base64");

        // Determine mime type (default to jpeg if unknown/generic)
        const mimeType = file.type || "image/jpeg";

        const data = await analysisService(base64Image, mimeType);
        return { success: true, data };
    } catch (error) {
        console.error("Action Error:", error);
        return { success: false, error: "Failed to process image." };
    }
}
