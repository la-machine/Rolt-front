import { Component } from '@angular/core';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss']
})
export class CertificatesComponent {

  fetchedData: any[] = []; // Placeholder for fetched data, update this with your actual data from API
  currentDate: string = new Date().toISOString().split('T')[0]

}
