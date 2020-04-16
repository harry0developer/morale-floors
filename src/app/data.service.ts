import { Injectable } from '@angular/core';
import * as Rx from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  statusSubject = new Rx.BehaviorSubject(false);

  constructor() { }

  toggleStatus(status: boolean) {
    this.statusSubject.next(status);
  }
}
