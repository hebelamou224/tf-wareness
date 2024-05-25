import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'tf-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [LoginService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';

  constructor(private router: Router, private loginService: LoginService) { }
  ngOnInit(): void {
    this.loginService.isLoggedIn().subscribe(value=>{
      console.log('login: ', value)
    })
    this.loginService.getUserData().subscribe(value=>{
      console.log('User data: ', value)
    })
  }

  login() {
    console.log('Login page, username: ', this.username, ' Password: ', this.password)
    
    if (this.password === 'trustifytechnology') {
      console.log('Correct, username: ', this.username, ' Password: ', this.password)
      
      const user = {username: this.username}
      this.loginService.login(user, true)
      this.router.navigate(['/revision']);
    } else {
      
      alert('Le mot de passe est inccorect veuillez entrer trustifytechnology');
    }
  }

}
