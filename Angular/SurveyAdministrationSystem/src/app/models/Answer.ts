import { AnswerOption } from './AnswerOption';
import { AnswerType } from '../services/question-services';

export class Answer {
    id: number;
    resumeName: string;
    answerType: AnswerType;
    answerOptions: Array<AnswerOption>;
}