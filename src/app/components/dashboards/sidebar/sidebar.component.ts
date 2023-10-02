import { Component } from '@angular/core';
import { userResponse } from 'src/app/classes/userResponse';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  isSidebarOpen = false;
  // constructor(private userService : UserService){}
  // user : userResponse = new userResponse(this.userService.getUserName(),this.userService.getRole());

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
