import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private messageSource = new BehaviorSubject(false);
  open = this.messageSource.asObservable();

  constructor() { }

  changeValue(value: boolean) {
    this.messageSource.next(value)
  }
}
