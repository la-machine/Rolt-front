import { Component } from '@angular/core';
import { RequestService } from 'src/app/service/request.service';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss']
})
export class CertificatesComponent {

  fetchedData: any[] = []; // Placeholder for fetched data, update this with your actual data from API
  currentDate: string = new Date().toISOString().split('T')[0]
  id!: number;

  constructor(private apiService: RequestService) {} // Inject your API service here

  fetchDataById() {
    this.apiService.getLandTitileByTitleNum(this.id).subscribe(data => {
      this.fetchedData = data; // Assuming your API service returns the data in an array
    });
  }
}
