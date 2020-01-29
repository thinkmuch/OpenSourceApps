import { Answer } from './Answer';

export class SurveySummary
{
    id: number;
    name: string;
    lastModified: string;
    status: number;
    statusDescripcion: string;
    totalQuestions: number;
    lenguages: number;
    plazas: number;
    owner: boolean;
}