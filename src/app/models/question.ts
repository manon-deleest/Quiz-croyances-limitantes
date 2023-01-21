import { QuestionType } from './../emun/question-type';
import { Reponce } from "./reponce";

export interface Question {
  id: number,
  question: String,
  type: QuestionType,
  responses: Reponce[]
}
