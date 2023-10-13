import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { LandTitleRequestComponent } from '../land-title-request/land-title-request.component';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit{
  isLoggedIn: any;
  role: any;
  isSubdivision: boolean = false;
  ngOnInit(): void {
    this.isLoggedIn = this.userService.isLoggedIn();
    if(this.isLoggedIn){
      const user = this.userService.getUserName();
      this.role = this.userService.getRole();
      this.isSubdivision = (this.role == "SubdivisionalOfficer");
      }
    throw new Error('Method not implemented.');
  }

  isModalVisible: boolean = false;

  constructor(private userService : UserService){}

  
  openModal(): void {
    this.isModalVisible = true;
  }

  closeModal(): void {
    this.isModalVisible = false;
  }

  onFormSubmit(formData: any): void {
    // Handle form submission logic here
    // Update your table data or call a service to save the data
    console.log(formData);
    this.closeModal();
  }


}
