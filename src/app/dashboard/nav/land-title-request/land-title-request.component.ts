import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-land-title-request',
  templateUrl: './land-title-request.component.html',
  styleUrls: ['./land-title-request.component.scss']
})
export class LandTitleRequestComponent {

  @Output() formSubmit: EventEmitter<any> = new EventEmitter();
  landTitleForm!: FormGroup;
  

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.landTitleForm = this.formBuilder.group({
      requestName: ['', Validators.required],
      landLocation: ['', Validators.required],
      dimension: ['', Validators.required],
      letter: ['', Validators.required],
      tell: ['', Validators.required],
      amount: [50000, Validators.required]
    });
  }

  onSubmit(event: Event): void {
      event.stopPropagation(); // Stop click event propagation

    if (this.landTitleForm.valid) {
      this.formSubmit.emit(this.landTitleForm.value);
    }
  }

}
