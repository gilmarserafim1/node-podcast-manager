import { IncomingMessage, ServerResponse } from "http";
import { listEpisodes } from '../services/list-episodes'
import { filterEpisodes } from "../services/filter-episodes";
import { ContentType } from "../utils/content-type";
import { Response } from "../models/response-model";

export const getEpisodesList = async (
    req: IncomingMessage, 
    res: ServerResponse
) => {
    const response: Response = await listEpisodes();

    res.writeHead(response.statusCode, {'content-type': ContentType.JSON});
    res.end(JSON.stringify(response.body));
}

export const getFilteredEpisodes = async (
    req: IncomingMessage, 
    res: ServerResponse
) => {
    const response: Response = await filterEpisodes(req.url);

    res.writeHead(response.statusCode, {'content-type': ContentType.JSON});
    res.end(JSON.stringify(response.body));
}