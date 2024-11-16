import { podcastData } from "../data/podcasts-data";
import { Response } from "../models/response-model";
import { StatusCode } from "../utils/status-code";

export const filterEpisodes = async (
    podcastName: string | undefined
): Promise<Response> => {

    let response: Response = {
        statusCode: 0,
        body: []
    }
    
    const queryString = podcastName?.split("?name=")[1] || "";
    const data = await podcastData(queryString);

    response.statusCode = data.length === 0 ? StatusCode.NoContent : StatusCode.OK;

    response.body = data;

    return response;
}