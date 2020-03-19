import { Question } from './question';
import { Square } from './square';
import { Language } from './laguage';
import { Hotel } from './hotel';

export class Survey {
    id: number;
    name: string;
    questions: Array<Question>;
    language: Language;
    hotels: Array<{ squareId: number, hotelId: number }>;
}