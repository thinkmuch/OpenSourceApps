import { Question } from './question';
import { Square } from './square';
import { Language } from './laguage';
import { Hotel } from './hotel';

export class Survey {
    id: number;
    name: string;
    questions: Array<Question>;
    language: Language;
    squares: Array<Square>
    hotels: Array<Hotel>;
}