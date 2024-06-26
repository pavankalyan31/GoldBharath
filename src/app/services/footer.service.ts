import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FooterService {
  private showFooterSubject = new BehaviorSubject<boolean>(true);
  showFooter$ = this.showFooterSubject.asObservable();

  constructor() { }

  setShowFooter(value: boolean) {
    this.showFooterSubject.next(value);
  }
}
