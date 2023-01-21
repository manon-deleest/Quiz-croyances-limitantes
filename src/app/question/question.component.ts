import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Question } from '../models/question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent {
  @Input() question: Question | undefined;
  @Input() response: number | undefined;
  @Output() onResponse = new EventEmitter<number>();

  onClick(value: number): void {
    this.onResponse.emit(value);
  }

}
