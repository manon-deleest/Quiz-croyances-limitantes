import { Component } from '@angular/core';
import { QuestionType } from './emun/question-type';
import { Question } from './models/question';
import { ResponseQuiz } from './models/response-quiz';


const questions: Question[] = [
  {
    id:0,
    question:"Pour prendre une décision, quelle quantité d'information aimez-vous avoir ? ",
    type: QuestionType.parfait,
    responses: [
      {
        value:1,
        name: "Une petite quantité"
      },{
        value:2,
        name: "Une quantité modérée"
      },{
        value:3,
        name: "Une quantité suffisante"
      },{
        value:4,
        name: "La plus grande partie "
      },{
        value:5,
        name: "Presque la totalité  "
      },
    ]
  },{
    id:1,
    question:"A votre avis, pleurer est-il une faiblesse ? ",
    type: QuestionType.fort,
    responses: [
      {
        value:1,
        name: "Non, je suis convaincu(e) du contraire"
      },{
        value:2,
        name: "Non, je ne crois pas"
      },{
        value:3,
        name: "Sans opinion"
      },{
        value:4,
        name: "Oui, je crois "
      },{
        value:5,
        name: "Oui, j'en suis fermement convaincu(e) "
      },
    ]
  },{
    id:2,
    question:"Ressentez-vous de l'irritation lorsque les autres sont lents ? ",
    type: QuestionType.vitesse,
    responses: [
      {
        value:1,
        name: "Rarement"
      },{
        value:2,
        name: "Parfois"
      },{
        value:3,
        name: "D'ordinaire oui"
      },{
        value:4,
        name: "Souvent "
      },{
        value:5,
        name: "Presque toujours "
      },
    ]
  },{
    id:3,
    question:"Vous sentez-vous tenu(e) d'aider les autres ? ",
    type: QuestionType.plaisir,
    responses: [
      {
        value:1,
        name: "Rarement"
      },{
        value:2,
        name: "Parfois"
      },{
        value:3,
        name: "D'ordinaire oui"
      },{
        value:4,
        name: "Souvent "
      },{
        value:5,
        name: "Presque toujours "
      },
    ]
  },{
    id:4,
    question:"Faites-vous des efforts pour atteindre vos objectifs ? ",
    type: QuestionType.effort,
    responses: [
      {
        value:1,
        name: "Rarement"
      },{
        value:2,
        name: "Parfois"
      },{
        value:3,
        name: "D'ordinaire oui"
      },{
        value:4,
        name: "Souvent "
      },{
        value:5,
        name: "Presque toujours "
      },
    ]
  },
  {
    id:5,
    question:"Vous reprochez-vous vos erreurs ? ",
    type: QuestionType.parfait,
    responses: [
      {
        value:1,
        name: "Rarement"
      },{
        value:2,
        name: "Parfois"
      },{
        value:3,
        name: "D'ordinaire oui"
      },{
        value:4,
        name: "Souvent "
      },{
        value:5,
        name: "Presque toujours "
      },
    ]
  },{
    id:6,
    question:"Vous demandez-vous : « d'où vient que tu sois blessé(e) et triste » ? ",
    type: QuestionType.fort,
    responses: [
      {
        value:1,
        name: "Rarement"
      },{
        value:2,
        name: "Parfois"
      },{
        value:3,
        name: "D'ordinaire oui"
      },{
        value:4,
        name: "Souvent "
      },{
        value:5,
        name: "Presque toujours "
      },
    ]
  },{
    id:7,
    question:"Arrivez-vous en retard même quand vous vous êtes arrangé(e) pour arriver à temps ? ",
    type: QuestionType.vitesse,
    responses: [
      {
        value:1,
        name: "Rarement"
      },{
        value:2,
        name: "Parfois"
      },{
        value:3,
        name: "D'ordinaire oui"
      },{
        value:4,
        name: "Souvent "
      },{
        value:5,
        name: "Presque toujours "
      },
    ]
  },{
    id:8,
    question:"Offrez-vous votre aide même quand on ne vous la demande pas ? ",
    type: QuestionType.plaisir,
    responses: [
      {
        value:1,
        name: "Rarement"
      },{
        value:2,
        name: "Parfois"
      },{
        value:3,
        name: "D'ordinaire oui"
      },{
        value:4,
        name: "Souvent "
      },{
        value:5,
        name: "Presque toujours "
      },
    ]
  },{
    id:9,
    question:"Prenez-vous plaisir à réussir sans lutte et sans difficulté ? ",
    type: QuestionType.effort,
    responses: [
      {
        value:1,
        name: "Rarement"
      },{
        value:2,
        name: "Parfois"
      },{
        value:3,
        name: "D'ordinaire oui"
      },{
        value:4,
        name: "Souvent "
      },{
        value:5,
        name: "Presque toujours "
      },
    ]
  },
  {
    id:10,
    question:"Estimez-vous adéquat ce que vous accomplissez ? ",
    type: QuestionType.parfait,
    responses: [
      {
        value:1,
        name: "Rarement"
      },{
        value:2,
        name: "Parfois"
      },{
        value:3,
        name: "D'ordinaire oui"
      },{
        value:4,
        name: "Souvent "
      },{
        value:5,
        name: "Presque toujours "
      },
    ]
  },{
    id:11,
    question:"Dites-vous aux autres : « il n'y a pas de quoi se lamenter dans cette situation » ? ",
    type: QuestionType.fort,
    responses: [
      {
        value:1,
        name: "Rarement"
      },{
        value:2,
        name: "Parfois"
      },{
        value:3,
        name: "D'ordinaire oui"
      },{
        value:4,
        name: "Souvent "
      },{
        value:5,
        name: "Presque toujours "
      },
    ]
  },{
    id:12,
    question:"Prenez-vous un rythme lent en vous disant qu'il faut vous dépêcher ? ",
    type: QuestionType.vitesse,
    responses: [
      {
        value:1,
        name: "Rarement"
      },{
        value:2,
        name: "Parfois"
      },{
        value:3,
        name: "D'ordinaire oui"
      },{
        value:4,
        name: "Souvent "
      },{
        value:5,
        name: "Presque toujours "
      },
    ]
  },{
    id:13,
    question:"Utilisez-vous des expressions comme « savez-vous...pourriez-vous... ? ",
    type: QuestionType.plaisir,
    responses: [
      {
        value:1,
        name: "Rarement"
      },{
        value:2,
        name: "Parfois"
      },{
        value:3,
        name: "D'ordinaire oui"
      },{
        value:4,
        name: "Souvent "
      },{
        value:5,
        name: "Presque toujours "
      },
    ]
  },{
    id: 14,
    question:"Êtes-vous un(e) adepte de la maxime « essayez, essayez, essayez encore, jusqu'à ce que vous réussissiez » ? ",
    type: QuestionType.effort,
    responses: [
      {
        value:1,
        name: "Rarement"
      },{
        value:2,
        name: "Parfois"
      },{
        value:3,
        name: "D'ordinaire oui"
      },{
        value:4,
        name: "Souvent "
      },{
        value:5,
        name: "Presque toujours "
      },
    ]
  },
  {
    id:15,
    question:"Vérifiez-vous plusieurs fois les paroles des autres de crainte d'une erreur ? ",
    type: QuestionType.parfait,
    responses: [
      {
        value:1,
        name: "Rarement"
      },{
        value:2,
        name: "Parfois"
      },{
        value:3,
        name: "D'ordinaire oui"
      },{
        value:4,
        name: "Souvent "
      },{
        value:5,
        name: "Presque toujours "
      },
    ]
  },{
    id:16,
    question:"Vous sentez-vous mal à l'aise de vos faiblesses ? ",
    type: QuestionType.fort,
    responses: [
      {
        value:1,
        name: "Très peu"
      },{
        value:2,
        name: "Dans une mesure raisonnable"
      },{
        value:3,
        name: "Dans une certaine mesure"
      },{
        value:4,
        name: "Dans une mesure importante "
      },{
        value:5,
        name: "Dans une mesure très large "
      },
    ]
  },{
    id:17,
    question:"Quelle est votre réaction lorsque vous faites la queue ? ",
    type: QuestionType.vitesse,
    responses: [
      {
        value:1,
        name: "J'adore"
      },{
        value:2,
        name: "J'aime"
      },{
        value:3,
        name: "Je n'aime ni ne déteste cela"
      },{
        value:4,
        name: "Je n'aime pas cela "
      },{
        value:5,
        name: "J'ai horreur de cela "
      },
    ]
  },{
    id:18,
    question:"Attendez-vous que l'autre ait fini de parler avant de prendre la parole ? ",
    type: QuestionType.plaisir,
    responses: [
      {
        value:1,
        name: "Rarement"
      },{
        value:2,
        name: "Parfois"
      },{
        value:3,
        name: "D'ordinaire oui"
      },{
        value:4,
        name: "Souvent "
      },{
        value:5,
        name: "Presque toujours "
      },
    ]
  },{
    id:19,
    question:"Vous détendez-vous lorsque vous en avez l'occasion ? ",
    type: QuestionType.effort,
    responses: [
      {
        value:1,
        name: "Presque toujours"
      },{
        value:2,
        name: "Souvent"
      },{
        value:3,
        name: "D'ordinaire oui"
      },{
        value:4,
        name: "Parfois"
      },{
        value:5,
        name: "Rarement"
      },
    ]
  },
  {
    id:20,
    question:"Tendez-vous à la perfection ? ",
    type: QuestionType.parfait,
    responses: [
      {
        value:1,
        name: "Rarement"
      },{
        value:2,
        name: "Parfois"
      },{
        value:3,
        name: "D'ordinaire oui"
      },{
        value:4,
        name: "Souvent "
      },{
        value:5,
        name: "Presque toujours "
      },
    ]
  },{
    id:21,
    question:"Maîtrisez-vous vos émotions ? ",
    type: QuestionType.fort,
    responses: [
      {
        value:1,
        name: "Rarement"
      },{
        value:2,
        name: "Parfois"
      },{
        value:3,
        name: "D'ordinaire oui"
      },{
        value:4,
        name: "Souvent "
      },{
        value:5,
        name: "Presque toujours "
      },
    ]
  },{
    id:22,
    question:"Le silence vous met-il mal à l'aise ? ",
    type: QuestionType.vitesse,
    responses: [
      {
        value:1,
        name: "Très peu"
      },{
        value:2,
        name: "Dans une mesure raisonnable"
      },{
        value:3,
        name: "Dans une certaine mesure"
      },{
        value:4,
        name: "Dans une mesure importante "
      },{
        value:5,
        name: "Dans une très large mesure"
      },
    ]
  },{
    id:23,
    question:"Vérifiez-vous si les autres sont satisfaits de vous ou de vos actes ? ",
    type: QuestionType.plaisir,
    responses: [
      {
        value:1,
        name: "Rarement"
      },{
        value:2,
        name: "Parfois"
      },{
        value:3,
        name: "D'ordinaire oui"
      },{
        value:4,
        name: "Souvent "
      },{
        value:5,
        name: "Presque toujours "
      },
    ]
  },{
    id:24,
    question:"Utilisez-vous des tournures comme « j'essaierai », « je n'y arrive pas », c'est difficile », etc... ? ",
    type: QuestionType.effort,
    responses: [
      {
        value:1,
        name: "Rarement"
      },{
        value:2,
        name: "Parfois"
      },{
        value:3,
        name: "D'ordinaire oui"
      },{
        value:4,
        name: "Souvent "
      },{
        value:5,
        name: "Presque toujours "
      },
    ]
  },
  {
    id:25,
    question:"Vous sentez-vous tenu(e) à la précision dans vos communication ? ",
    type: QuestionType.parfait,
    responses: [
      {
        value:1,
        name: "Rarement"
      },{
        value:2,
        name: "Parfois"
      },{
        value:3,
        name: "D'ordinaire oui"
      },{
        value:4,
        name: "Souvent "
      },{
        value:5,
        name: "Presque toujours "
      },
    ]
  },{
    id:26,
    question:"Réagissez-vous à des problèmes en disant, par exemple : « pas de commentaire », « je m'en fous », « cela n'a pas d'importance » ? ",
    type: QuestionType.fort,
    responses: [
      {
        value:1,
        name: "Rarement"
      },{
        value:2,
        name: "Parfois"
      },{
        value:3,
        name: "D'ordinaire oui"
      },{
        value:4,
        name: "Souvent "
      },{
        value:5,
        name: "Presque toujours "
      },
    ]
  },{
    id:27,
    question:"Pianotez-vous ou tapez-vous des pieds en signe d'impatience ?",
    type: QuestionType.vitesse,
    responses: [
      {
        value:1,
        name: "Rarement"
      },{
        value:2,
        name: "Parfois"
      },{
        value:3,
        name: "D'ordinaire oui"
      },{
        value:4,
        name: "Souvent "
      },{
        value:5,
        name: "Presque toujours "
      },
    ]
  },{
    id:28,
    question:"Pensez-vous que vous devez rendre les autres heureux ? ",
    type: QuestionType.plaisir,
    responses: [
      {
        value:1,
        name: "Rarement"
      },{
        value:2,
        name: "Parfois"
      },{
        value:3,
        name: "D'ordinaire oui"
      },{
        value:4,
        name: "Souvent "
      },{
        value:5,
        name: "Presque toujours "
      },
    ]
  },{
    id:29,
    question:"Vous dites-vous ou dites-vous aux autres  « au moins, j'ai essayé », ou des phrases semblables ?",
    type: QuestionType.effort,
    responses: [
      {
        value:1,
        name: "Rarement"
      },{
        value:2,
        name: "Parfois"
      },{
        value:3,
        name: "D'ordinaire oui"
      },{
        value:4,
        name: "Souvent "
      },{
        value:5,
        name: "Presque toujours "
      },
    ]
  },
  {
    id:30,
    question:"Dites-vous , par exemple, « cela n'est pas tout à fait exact ; voici une autre proposition » ? ",
    type: QuestionType.parfait,
    responses: [
      {
        value:1,
        name: "Rarement"
      },{
        value:2,
        name: "Parfois"
      },{
        value:3,
        name: "D'ordinaire oui"
      },{
        value:4,
        name: "Souvent "
      },{
        value:5,
        name: "Presque toujours "
      },
    ]
  },{
    id:31,
    question:"Vous tenez-vous droit, les bas croisés et les mains raides ? ",
    type: QuestionType.fort,
    responses: [
      {
        value:1,
        name: "Rarement"
      },{
        value:2,
        name: "Parfois"
      },{
        value:3,
        name: "D'ordinaire oui"
      },{
        value:4,
        name: "Souvent "
      },{
        value:5,
        name: "Presque toujours "
      },
    ]
  },{
    id:32,
    question:"Remettez-vous à plus tard pour ensuite vous précipiter à la dernière minute ?",
    type: QuestionType.vitesse,
    responses: [
      {
        value:1,
        name: "Rarement"
      },{
        value:2,
        name: "Parfois"
      },{
        value:3,
        name: "D'ordinaire oui"
      },{
        value:4,
        name: "Souvent "
      },{
        value:5,
        name: "Presque toujours "
      },
    ]
  },{
    id:33,
    question:"Pensez-vous qu'une tâche n'a de valeur que si quelqu'un l'approuve ?",
    type: QuestionType.plaisir,
    responses: [
      {
        value:1,
        name: "Rarement"
      },{
        value:2,
        name: "Parfois"
      },{
        value:3,
        name: "D'ordinaire oui"
      },{
        value:4,
        name: "Souvent "
      },{
        value:5,
        name: "Presque toujours "
      },
    ]
  },{
    id:34,
    question:"Préférez-vous le combat à la victoire ? ",
    type: QuestionType.effort,
    responses: [
      {
        value:1,
        name: "Rarement"
      },{
        value:2,
        name: "Parfois"
      },{
        value:3,
        name: "D'ordinaire oui"
      },{
        value:4,
        name: "Souvent "
      },{
        value:5,
        name: "Presque toujours "
      },
    ]
  }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  etape: number = 0;
  questions: Question[] = questions;
  responseQuiz: ResponseQuiz[] = [];

  get responses(): {type:string, value:number}[] {
    let re: { type: string; value: number; }[] = [];

    (Object.keys(QuestionType) as (keyof typeof QuestionType)[]).forEach(
      (key) => {
        let value = 0;
        this.responseQuiz.filter((question : ResponseQuiz) => question.type == QuestionType[key]).forEach( elem => value = value + elem.value); // A tester !
        re.push({ type: QuestionType[key], value :value })
      },
    );

    return re;
  }

  onClick(valueOfResponse: number, idQuestion: number, type:QuestionType): void {
    this.responseQuiz[idQuestion] = {
      value: valueOfResponse,
      type: type
    };
    this.nextStep();
  }

  nextStep(): void {
    this.etape++;
  }

  reset(): void {
    this.etape = 0;
    this.responseQuiz = [];
  }

  previousStep(): void {
    if(this.etape > 0){
      this.etape--;
    }
  }

  getResponse(id:number): number|undefined {
    return  this.responseQuiz[id]?.value; 
  
  }

}
