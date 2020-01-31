import { AnswerOption } from './AnswerOption';
import { AnswerType } from '../services/QuestionServices';

export class Answer {
    id: number;
    resumeName: string;
    answerType: AnswerType;
    answerOptions: Array<AnswerOption>;
}