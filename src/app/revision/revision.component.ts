import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Quizz, QuizzService } from '../quiz/quiz.service';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { FieldsetModule } from 'primeng/fieldset';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-revision',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    FieldsetModule
  ],
  providers: [QuizzService],
  templateUrl: './revision.component.html',
  styleUrl: './revision.component.css'
})
export class RevisionComponent implements OnInit {

  questionnaires: Quizz[] = [];
  currentQuestionIndex = 0
  user: any;

  constructor(private quizService: QuizzService, 
    private loginService: LoginService,
    private router: Router,) { } // Injectez le service QuizService
  
  ngOnInit(): void {
    this.loginService.getUserData().subscribe(userData => {
      this.user = userData;
    });
    this.quizService.loadDataQuiz('assets/quiz.yml').subscribe(
      data=>{
        this.questionnaires = data
        console.log('revision data')
        console.log(this.questionnaires)
      }
    )
  }

  getQuestionnaires(): void {
    this.quizService.loadDataQuiz('assets/quiz.yml').subscribe(
      data=>{
        this.questionnaires = data
        console.log('revision data')
        console.log(this.questionnaires)
      }
    )

  }

  redirectToQuizPage() {
    this.router.navigate(['/quiz']);
  }

}
