import { Language } from './laguage';
import { Question } from './question';

export class QuestionsByLanguage {
    surveyId: number;
    lenguage: Language;
    questions: Array<Question>;
}