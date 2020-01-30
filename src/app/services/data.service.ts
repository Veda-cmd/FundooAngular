import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  labelValue:any;

  private messageSource = new BehaviorSubject(false);
  private labelSource = new BehaviorSubject(this.labelValue);
  private notesSource = new BehaviorSubject(this.labelValue);
  private labelsArr = new BehaviorSubject(this.labelValue);
  private titleSource = new BehaviorSubject("Fundoo");
  private listSource = new BehaviorSubject(false);

  open = this.messageSource.asObservable();
  list = this.listSource.asObservable();
  title=this.titleSource.asObservable();
  labels=this.labelSource.asObservable();
  labelArray= this.labelsArr.asObservable();
  notes=this.notesSource.asObservable();

  constructor() { }

  changeValue(value: boolean) {
    this.messageSource.next(value);
  }

  changeList(value: boolean) {
    this.listSource.next(value);
  }

  changeTitle(value: string) {
    this.titleSource.next(value);
  }

  changeLabels(value:any){
    this.labelSource.next(value);
  }

  updateNotes(value:any){
    this.notesSource.next(value);
  }

  getLabels(value:any){
    this.labelsArr.next(value);
  }

}
