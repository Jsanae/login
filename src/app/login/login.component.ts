import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user';
import { AuthService } from '../auth.service';
import { AdminComponent } from '../admin/admin.component';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error: any;

  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) { }



  loginForm: FormGroup;
  isSubmitted = false;

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      domain: ['', Validators.required]
    });
  }

  get formControls() { return this.loginForm.controls; }
  login() {
    this.isSubmitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.authService.login(this.loginForm.value).subscribe(
      data => {
        this.router.navigate(['admin'], { state: data });
      },
      error => {  
        this.error= error.error;
      });

  }
}