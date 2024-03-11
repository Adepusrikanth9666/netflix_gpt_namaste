import OpenAI from "openai";
import appStore from "./appStore";

const state = appStore.getState()?.config?.userApiKey + "";

const openAI = new OpenAI({
  apiKey: state.toString(),
  dangerouslyAllowBrowser: true,
});

export default openAI;
