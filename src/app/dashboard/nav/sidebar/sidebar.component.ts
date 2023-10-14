import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  isLoggedIn: any;
  role: any;
  showCitizenBoard: boolean = false;
  showLandRegistryBoard: boolean = false;
  showNotaryBoard: boolean = false;
  showSubdivisionalOfficerBoard: boolean = false;
  showAdminBoard: boolean = false;
  ngOnInit(): void {
    this.isLoggedIn = this.userService.isLoggedIn();
    console.log("showing loggin condition === ", this.isLoggedIn);
    if(this.isLoggedIn){
      const user = this.userService.getUserName();
      this.role = this.userService.getRole();
      console.log("From the sidebar  ==== ", this.role);
      this.showCitizenBoard = (this.role == "Citizen");
      this.showLandRegistryBoard = (this.role == "LandRegistry");
      this.showNotaryBoard = (this.role == "Notary");
      this.showSubdivisionalOfficerBoard = (this.role == "SubdivisionalOfficer");
      this.showAdminBoard = (this.role == "Admin");
    }
    throw new Error('Method not implemented.');
  }

  showMenu = false;
  isSidebarOpen = false;
  isAdmin = false;
  constructor(private userService : UserService){}
  

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

}
