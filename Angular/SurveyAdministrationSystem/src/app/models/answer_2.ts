import { AnswerType } from '../enums/class-enum';
import { AnswerOption_2 } from './answer-option_2';

export class Answer_2 {
    id: number;
    name: string;
    answerType: AnswerType;
    status: number;
    answerOptions: Array<AnswerOption_2>;
}