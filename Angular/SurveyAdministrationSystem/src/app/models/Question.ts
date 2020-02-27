import { Answer } from './answer';
import { Site } from './site'
import { Area } from './area';
import { Department } from './department';

export class Question {
    id: number;
    text: string;
    answer: Answer;
    site: Site;
    forceResponse: boolean;
    acceptNA: boolean;
    justifyAnswer: boolean;
    area: Area;
    department: Department;
}