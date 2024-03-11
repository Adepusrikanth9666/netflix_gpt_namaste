import OpenAI from "openai";
import appStore from "./appStore";

const state = appStore.getState()?.config?.userApiKey;

const openAI = new OpenAI({
  apiKey:
    state.toString() || "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",
  dangerouslyAllowBrowser: true,
});

export default openAI;
