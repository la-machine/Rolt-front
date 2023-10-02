import { Component } from '@angular/core';
import { authrequest } from 'src/app/classes/authrequest';
import { AuthService } from 'src/app/service/auth.service';
import { NavigationService } from 'src/app/service/navigation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

	componentToShow: string = "welcome";

	constructor(private authService: AuthService,public navigationService: NavigationService) { }



  navigateToPage(pageName: string) {
    // Use your event emitter to navigate
    // For example, emit an event to change the page
	this.componentToShow = pageName;
    this.navigationService.setPage(pageName);
  }

  onLogin(input: authrequest): void {

		console.log(input.email)
		this.authService.login(input).subscribe((res: any)=> {
			console.log(res);
		});
  }

  onRegister(input: any): void {
		// this.authService.request(
		//     "POST",
		//     "/register",
		//     {
		//         firstName: input.firstName,
		//         lastName: input.lastName,
		//         login: input.login,
		//         password: input.password
		//     }).then(
		//     response => {
		//         this.authService.setAuthToken(response.data.token);
		//         this.componentToShow = "messages";
		//     }).catch(
		//     error => {
		//         this.authService.setAuthToken(null);
		//         this.componentToShow = "welcome";
		//     }
		// );
	}

}
