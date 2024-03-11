import OpenAI from "openai";
import appStore from "./appStore";

const state = appStore.getState()?.config?.userApiKey + "";

const openAI = new OpenAI({
  apiKey:
    state.toString() || "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",
  dangerouslyAllowBrowser: true,
});

export default openAI;
