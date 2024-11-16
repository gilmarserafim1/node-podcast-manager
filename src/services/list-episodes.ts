import { podcastData } from "../data/podcasts-data";
import { Response } from "../models/response-model";
import { StatusCode } from "../utils/status-code";

export const listEpisodes = async (): Promise<Response> => {

    let response: Response = {
        statusCode: 0,
        body: []
    }

    const data = await podcastData();

    response.statusCode = data.length === 0 ? StatusCode.NoContent : StatusCode.OK;

    response.body = data;

    return response;
}