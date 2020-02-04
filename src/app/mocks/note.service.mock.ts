import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoteServiceMock {

  constructor() { }

  getUsers(): Array<{}> {
    return [
      {
        name: 'user1',
        surname: 'usersurname1'
      }
    ];
  }

  getLabels(){
    return [
      {
        label_name: 'usersurname1'
      }
    ];
  }
}
