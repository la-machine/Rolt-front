import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { authrequest } from 'src/app/classes/authrequest';
import { AuthService } from 'src/app/service/auth.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-resertpassword',
  templateUrl: './resertpassword.component.html',
  styleUrls: ['./resertpassword.component.scss']
})
export class ResertpasswordComponent {
  
  form = this.fb.nonNullable.group({
    Confirm_pwd:['', [Validators.required, Validators.minLength(6)]],
    password:['', [Validators.required, Validators.minLength(6)]],
  });
  errorMessage = '';
  
  constructor(private fb: FormBuilder,private authService:AuthService,
    private userAuthRespone : UserService, private router:Router){}


  onSubmit(): void{
    console.log('SUBMIT: ', this.form.value);
    const {Confirm_pwd, password} = this.form.getRawValue();
    let authUser : authrequest = new authrequest();
    if(Confirm_pwd != password){
      this.errorMessage = "The passords doesn't match";
      return;
    }
    this.authService.login(authUser).subscribe((res: any)=> {
			this.router.navigate(['/login'])
		});
  }
}
