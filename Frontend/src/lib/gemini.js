import { GoogleGenAI } from "@google/genai";

const safetySettings = [
    {
        category: "HARM_CATEGORY_HARASSMENT",
        threshold: "BLOCK_LOW_AND_ABOVE",
    },
    {
        category: "HARM_CATEGORY_HATE_SPEECH",
        threshold: "BLOCK_LOW_AND_ABOVE",
    },
];

const ai = new GoogleGenAI({ apiKey: "AIzaSyCUxRwSPIiaRKk2s---jSfI5ImjqxlAX9k" });

const models = async (prompt, image = null) => {

    const parts = [];


    if (prompt) {
        parts.push(prompt);
    }

    if (image && image.mimeType) {
        parts.push(
            createUserContent([
                `${prompt}`,
                createPartFromUri(image.uri, image.mimeType),
            ]));
    }

    // image = await ai.files.upload({
    //     file: "/testing_img.png"
    // })
    // console.log("Gemini request parts:", JSON.stringify(parts, null, 2));

    console.log(parts)
    const response = await ai.models.generateContentStream({
        model: "gemini-2.5-flash",
        contents: parts
    });
    for await (const chunk of response) {
        return chunk.text;
    }

    // const response = await ai.models.generateContent({
    //     model: "gemini-2.5-flash",
    //     contents: `${promt}`,
    // });

    // console.log(response)
}
export default models;
