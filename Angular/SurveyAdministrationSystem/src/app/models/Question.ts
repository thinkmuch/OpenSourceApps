import { Answer } from './answer';
import { Site } from './site'

export class Question {
    id: number;
    text: string;
    answer: Answer;
    site: Site;
    forceResponse: boolean;
}