import * as http from 'http';
import { HttpMethod } from './utils/http-methods';
import { Routes } from './routes/routes';
import { getEpisodesList, getFilteredEpisodes } from './controllers/podcasts-controllers';

export const app = async (
    request: http.IncomingMessage, 
    response: http.ServerResponse
) => {

    const baseUrl = request.url?.split('?')[0];

    if(request.method === HttpMethod.GET && baseUrl === Routes.LIST){
        await getEpisodesList(request, response);
    }
    if(request.method === HttpMethod.GET && baseUrl === Routes.EPISODE){
        await getFilteredEpisodes(request, response);
    }
}   