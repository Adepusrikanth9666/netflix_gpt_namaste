import OpenAI from "openai";
import appStore from "./appStore";

const state = appStore.getState()?.config?.userApiKey;

const openAI = new OpenAI({
  apiKey:
    state.toString() || "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",
  dangerouslyAllowBrowser: true,
});

export default openAI;
