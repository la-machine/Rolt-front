import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthRegister } from 'src/app/classes/authRegistration';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  @Output() loginEvent = new EventEmitter();

  registrationForm = this.fb.nonNullable.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    idCardNum: ['', Validators.required],
    sex: ['M', Validators.required],
    tel:['',Validators.required],
    yourCardImg:[null,Validators.required],
    backCardImg: [null, Validators.required],
    cardImg: [null, Validators.required],
    year: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
    month: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
    day: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
    email:['', [Validators.required, Validators.email]],
    password:['', [Validators.required, Validators.minLength(6)]],
  });

  
  constructor(private fb: FormBuilder, private route : Router ,private authService:AuthService){}

    handleFileInput(event: any, fieldName: string) {
    const file = event.target.files[0];
    this.registrationForm.patchValue({ [fieldName]: file });
    this.registrationForm.get(fieldName)?.updateValueAndValidity();
  }

  onSubmitForm(){
    if (this.registrationForm.invalid) {
      return;
    }
    const {firstName,lastName,idCardNum,sex,yourCardImg,backCardImg,cardImg,year,month,day,email,password} = this.registrationForm.getRawValue();
    // const formData : FormData = new FormData();
    // formData.append("cardNum", idCardNum);
    // formData.append("firstName", firstName);
    // formData.append("lastName", lastName);
    // formData.append("sex", sex);
    // formData.append("email",email);
    // formData.append("password", password);
    // let dob: any = new Date(+year, +month-1, +day);
    // formData.append("dob",dob);
    // formData.append("yourCard", yourCardImg);
    // formData.append("backCardImg", backCardImg, backCardImg.name);

    let registrationRequest : AuthRegister = new AuthRegister();
    registrationRequest.cardNum = idCardNum;
    registrationRequest.firstName=firstName;
    registrationRequest.lastName=lastName;
    registrationRequest.sex=sex;
    registrationRequest.email=email;
    registrationRequest.password=password;
    registrationRequest.dob=new Date(+year, +month-1, +day);
    registrationRequest.yourCard=yourCardImg;
    registrationRequest.backCardImg=backCardImg;
    registrationRequest.cardImg=cardImg;

    console.log("This is to test the img",registrationRequest.backCardImg);

    this.authService.signup(registrationRequest).subscribe((res:any)=>{
      console.log(res);
      this.route.navigate(['dashboard']);
    })
  }

}