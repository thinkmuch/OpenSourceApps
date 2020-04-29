import { Answer_2 } from '../answer_2';

export class AnswerEmitter {
    private _answer: Answer_2;
    private _row: HTMLElement;

    constructor(answer: Answer_2, row: HTMLElement) {
        this._answer = answer;
        this._row = row;
    }

    get Answer(): Answer_2 {
        return this._answer;
    }

    get Row(): HTMLElement {
        return this._row;
    }
}