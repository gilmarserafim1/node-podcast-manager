import fs from 'fs';
import path from 'path';
import { Podcast } from '../models/podcast-model';

const pathData = path.join(__dirname, "../data/podcasts.json");

export const podcastData = async (
    podcastName?: string
): Promise<Podcast[]> => {

    const language="utf-8"

    const rawData = fs.readFileSync(pathData, language);
    let jsonFile = JSON.parse(rawData);

    if(podcastName){
        jsonFile = jsonFile.filter(
            (podcast: Podcast) => podcast.podcastName === podcastName
        );
    }

    return jsonFile;
}