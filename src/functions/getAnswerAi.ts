import openAiConfig from "../utils/openAiConfig";
import translateAi from "./translateAi";

const getAnswerAi = async (answer: string) => {
  const response = await openAiConfig.createCompletion({
    model: "text-davinci-002",
    prompt: `You: ${answer}`,
    temperature: 0.5,
    max_tokens: 60,
    top_p: 1.0,
    frequency_penalty: 0.5,
    presence_penalty: 0.0,
    stop: ["You:"],
  });
  const textToTranslation = response.data.choices[0].text
    ? await translateAi(response.data.choices[0].text)
    : "Num sei";
  return textToTranslation;
};

export default getAnswerAi;
