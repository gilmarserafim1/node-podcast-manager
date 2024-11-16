import { Podcast } from "./podcast-model";

export interface Response {
    statusCode: number,
    body: Podcast[];
}