import { getChatStream } from "../utils/ai";
export default defineEventHandler(async(event)=>{
    const {message}=await readBody(event);
    const stream=await getChatStream({message});
    return sendStream(event,stream);
})