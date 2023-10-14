import {AuthService} from '../../../service/auth.service'

import { Component, EventEmitter, Output} from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { authrequest } from 'src/app/classes/authrequest';
import { userResponse } from 'src/app/classes/userResponse';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  @Output() registerEvent = new EventEmitter();
  @Output() onSubmitLoginEvent = new EventEmitter();

  form = this.fb.nonNullable.group({
    email:['', [Validators.required, Validators.email]],
    password:['', [Validators.required, Validators.minLength(6)]],
  });
  errorMessage = '';
  
  constructor(private fb: FormBuilder,private authService:AuthService,
    private userAuthRespone : UserService, private router:Router){}


  onSubmit(): void{
    console.log('SUBMIT: ', this.form.value);
    const {email, password} = this.form.getRawValue();
    let authUser : authrequest = new authrequest();
    
    authUser.email = email;
    authUser.password = password;
    this.authService.login(authUser).subscribe((res: any)=> {
			this.userAuthRespone.setAuthToken(res.token);
      console.log(res);
      // user.firstName = res.firstName;
      // user.role = res.role;
      let user : userResponse = new userResponse(res.firstName,res.role);
      this.userAuthRespone.setAuthUser(user)
      console.log(res.role);
        this.router.navigate(['dashboard/home']);     
		},
      (error) => {
        this.errorMessage = error;
    });
  }
}
