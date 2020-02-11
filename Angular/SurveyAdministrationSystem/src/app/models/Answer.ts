import { AnswerOption } from './answer-option';
import { AnswerType } from '../services/question-services';

export class Answer {
    id: number;
    resumeName: string;
    answerType: AnswerType;
    answerOptions: Array<AnswerOption>;
}