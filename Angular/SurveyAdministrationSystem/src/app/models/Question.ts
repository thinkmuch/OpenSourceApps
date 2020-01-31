import { Answer } from './Answer';
import { Site } from '././Site'

export class Question {
    id: number;
    text: string;
    answer: Answer;
    site: Site;
}