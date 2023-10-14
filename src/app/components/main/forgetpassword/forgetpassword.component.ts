import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.scss']
})
export class ForgetpasswordComponent {
  form = this.fb.nonNullable.group({
    email:['', [Validators.required, Validators.email]],
  });
  errorMessage = '';
  
  constructor(private fb: FormBuilder,private authService:AuthService, private router:Router){}

  onSubmit(): void {
    
  }
}
