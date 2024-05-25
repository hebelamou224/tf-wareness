import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { QuizComponent } from './quiz/quiz.component';
import { ResultComponent } from './result/result.component';
import { RevisionComponent } from './revision/revision.component';
import { AuthGuard } from './login/auth-guard';

export const routes: Routes = [
    {path: "quiz", component: QuizComponent, /*canActivate: [AuthGuard]*/},
    {path: 'results', component: ResultComponent, /*canActivate: [AuthGuard]*/},
    {path: 'revision', component: RevisionComponent ,/*canActivate: [AuthGuard]*/},
    {path: "login", component: LoginComponent},
    {path: "", redirectTo: "/revision", pathMatch: 'full'},
    { path: '**', redirectTo: '/revision' }
   
];
