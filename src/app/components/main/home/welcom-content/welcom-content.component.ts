import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-welcom-content',
  templateUrl: './welcom-content.component.html',
  styleUrls: ['./welcom-content.component.scss']
})
export class WelcomContentComponent {
  data: string[] = [];
  direct = true;
  transfer = false;

  constructor(private axiosService: AuthService, private http: HttpClient) {}

  handleInfor(info : string){
    if(info === "direct"){
      this.direct = true;
      this.transfer = false;
    }else{
      this.direct = false;
      this.transfer = true;
    }
    
  }

  ngOnInit(): void {
    let headers: any = {"Content-Type":"application/json"}
    this.http.get('http://localhost:8060/api/auth/users',headers).subscribe((res:any) => {
      this.data = res.data;
    })
  //   this.axiosService.request(
  //       "GET",
  //       "/api/auth/users",
  //       {}).then(
  //       (response) => {
  //           this.data = response.data;
  //       }).catch(
  //       (error) => {
  //           if (error.response.status === 401) {
  //               this.axiosService.setAuthToken(null);
  //           } else {
  //               this.data = error.response.code;
  //           }

  //       }
  //   );
  }
}
