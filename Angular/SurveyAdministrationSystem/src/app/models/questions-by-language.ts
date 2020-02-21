import { Language } from './laguage';
import { QuestionText } from './question-text';

export class QuestionsByLanguage {
    surveyId: number;
    lenguage: Language;
    questionsText: Array<QuestionText>;
}