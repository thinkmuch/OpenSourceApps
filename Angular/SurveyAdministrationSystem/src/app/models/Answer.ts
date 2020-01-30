import { AnswerOption } from './AnswerOption';

export class Answer {
    id: number;
    resumeName: string;
    answerType: AnswerType;
    answerOptions: Array<AnswerOption>;
}