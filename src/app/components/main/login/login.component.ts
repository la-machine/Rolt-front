import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../sub/header/header.component';
import { Component, NgModule } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone:true,
  imports:[CommonModule, ReactiveFormsModule],
  template:`<app-header></app-header>`,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  submitted = false;
  form = this.fb.nonNullable.group({
    email:['', [Validators.required, Validators.email]],
    password:['', [Validators.required, Validators.minLength(6)]],
  });
  error = '';
  
  constructor(private fb: FormBuilder){}

  get f() {
    return this.form.controls;
  }

  onSubmit(){
    this.submitted=true;
    const { email, password } = this.form.value;
    if (this.form.invalid) {
      return;
    }
    console.log('SUBMIT: ', this.form.value);
  }

  createAccount(){
    console.log('CREATE: ', this.form.value);
  }

}
