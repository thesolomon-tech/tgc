import { firebaseApp } from "./firebase";
import { getVertexAI, getGenerativeModel } from "firebase/vertexai-preview";

const vertexAI = getVertexAI(firebaseApp);
const model = getGenerativeModel(vertexAI, { model: "gemini-1.5-flash" });

export async function Gemini(prompt:string) {
    // Provide a prompt that contains text

    // To generate text output, call generateContent with the text input
    const result = await model.generateContent(prompt);

    const response = result.response;
    const text = response.text();
    return text;
}
