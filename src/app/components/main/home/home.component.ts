import { Component } from '@angular/core';
import { authrequest } from 'src/app/classes/authrequest';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

	componentToShow: string = "welcome";

	constructor(private authService: AuthService) { }



  navigateToPage(pageName: string) {
    // Use your event emitter to navigate
    // For example, emit an event to change the page
	this.componentToShow = pageName;
  }

  onLogin(input: authrequest): void {

		console.log(input.email)
		this.authService.login(input).subscribe((res: any)=> {
			console.log(res);
		});
  }


}
