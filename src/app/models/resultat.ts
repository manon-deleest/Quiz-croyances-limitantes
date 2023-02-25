import { QuestionType } from "../emun/question-type";

export interface Resultat {
    type: QuestionType; 
    value: number; 
    displayMore: boolean
}
