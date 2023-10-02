import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  activePage?: string;
  pageChanged = new EventEmitter<string>();
  constructor() { }
  

  setPage(pageName: string) {
    this.activePage = pageName;
    this.pageChanged.emit(this.activePage);
  }
}
