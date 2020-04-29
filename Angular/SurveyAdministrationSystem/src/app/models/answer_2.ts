import { AnswerType } from '../enums/class-enum';
import { AnswerOption_2 } from './answer-option_2';

export class Answer_2 {
    answerId: number;
    name: string;
    answerType: AnswerType;
    statusId: number;
    answerOptions: Array<AnswerOption_2>;
}