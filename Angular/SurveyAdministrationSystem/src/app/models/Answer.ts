import { AnswerOption } from './answer-option';
import { AnswerType } from '../enums/class-enum';

export class Answer {
    id: number;
    resumeName: string;
    answerType: AnswerType;
    answerOptions: Array<AnswerOption>;
}