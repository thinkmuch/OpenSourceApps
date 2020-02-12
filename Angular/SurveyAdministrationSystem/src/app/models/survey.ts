import { Question } from './question';
import { Site } from './site';

export class Survey {
    id: number;
    name: string;
    questions: Array<Question>;
    language: number;
    sites: Array<Site>;
}