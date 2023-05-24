//server 

import {configuration,OpenAIAPi} from "openai";
const config=useRuntimeConfig();
const configuration=new configuration({
    apikey:config.OpenAI.secretKey,
});

const OpenAI=new OpenAIAPi(configuration);
export const getChatStream=async({message})=>{
    const response=await OpenAI.createChatCompletion(
        {
        max_tokens:2048,
        temperature:0.9,
        model:"gpt-3.5-turbo",
        prompt:message,
        stream:true,
    },
    {
        responseType:"stream",
    }
    );
    return response.data;
};