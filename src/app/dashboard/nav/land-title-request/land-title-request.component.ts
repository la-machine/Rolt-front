import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TitleRequest } from 'src/app/classes/TitleRequest';
import { RequestService } from 'src/app/service/request.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-land-title-request',
  templateUrl: './land-title-request.component.html',
  styleUrls: ['./land-title-request.component.scss']
})
export class LandTitleRequestComponent {

  @Output() formSubmit: EventEmitter<any> = new EventEmitter();
  landTitleForm!: FormGroup;
  

  constructor(private formBuilder: FormBuilder,private userService : UserService, private titlerequestService : RequestService) { }

  ngOnInit(): void {
    this.landTitleForm = this.formBuilder.group({
      requestName: ['', Validators.required],
      landLocation: ['', Validators.required],
      dimension: ['', Validators.required],
      letter: [null, Validators.required],
      tell: ['', Validators.required],
      amount: [50000, Validators.required]
    });
  }

  onSubmit(event: Event): void {
      event.stopPropagation(); // Stop click event propagation
      const {requestName,landLocation,dimension,tell,letter,amount} = this.landTitleForm.value
      const titleRequest = new TitleRequest();
      titleRequest.amount = amount;
      titleRequest.dimension = dimension;
      titleRequest.requeser = this.userService.getUserName();
      titleRequest.landlocation = landLocation;
      titleRequest.tel = tell;
      titleRequest.letter = letter;
      this.titlerequestService.requestTitle(titleRequest).subscribe((res:any)=>{
        console.log("From the title request", res);
      })
    if (this.landTitleForm.valid) {
      this.formSubmit.emit(this.landTitleForm.value);
    }

  }

}
