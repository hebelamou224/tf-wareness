import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map, of } from "rxjs";
import * as yaml from 'js-yaml';


export type Quizz = {
    question: any,
    correctAnswer : string,
    options: string[]
  }

@Injectable({
  providedIn: 'root',
})
export class QuizzService{
    constructor(private http: HttpClient){}

    // questions: Quizz[] = [
    //     {
    //       question: "Quel est le sport le plus populaire en Guinée ?", 
    //       options: [
    //         "a)-Football",
    //         "b)-Basketball",
    //         "c)-Rugby",
    //         "d)-Athlétisme"
    //       ], 
    //       correctAnswer: "a)-Football",
    //     },
    //     {
    //       question: "Quel est le célèbre festival culturel annuel organisé en Guinée, mettant en valeur la musique et la danse traditionnelle ?", 
    //       options: [
    //         "a)-Festival de Conakry",
    //         "b)-Festival des Masques",
    //         "c)-Festival du Djembé",
    //         "d)-Festival de la Fédération"
    //       ], 
    //       correctAnswer: "b)-Festival des Masques"
    //     },
    //     {
    //       question: "Quel est le nom du fleuve qui traverse la Guinée ?", 
    //       options: [
    //         "a)-Le Niger",
    //         "b)-Le Congo",
    //         "c)-Le Sénégal",
    //         "d)-Le Niger"
    //       ], 
    //       correctAnswer:  "c)-Le Sénégal"
    //     },
    //     {
    //         question: "Qui est l'écrivain guinéen célèbre pour son roman \"Le soleil des indépendances\" ?", 
    //         options: [
    //           "a)-Camara Laye",
    //           "b)-Mohamed Dibo",
    //           "c)-Tierno Monénembo",
    //           "d)-Djibril Tamsir Niane"
    //         ], 
    //         correctAnswer:  "a)-Camara Laye"
    //     },
    //     {
    //         question: "Quel est le nom de la monnaie en Guinée ?", 
    //         options: [
    //           "a)-Franc CFA",
    //           "b)-Franc guinéen",
    //           "c)-Dollar guinéen",
    //           "d)-Euro"
    //         ], 
    //         correctAnswer:  "b)-Franc guinéen"
    //     }
    //   ]

    // getQuestions(): Quizz[]{
    //     return this.questions
    // }

    // getAllQuestionnaires(): Observable<Quizz[]>{
    //     return of(this.questions)
    // }

    loadDataQuiz(filePath: string): Observable<any> {
      return this.http.get(filePath, { responseType: 'text' }).pipe(
        map((data: string) => yaml.load(data))
      );
    }


}