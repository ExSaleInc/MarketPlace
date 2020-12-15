import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Produto } from './produto';

@Injectable({
  providedIn: 'root'
})
export class DbDataMasterService {
  private objectSource = new BehaviorSubject({ objeto: null, id: '' });
  currentObjeto = this.objectSource.asObservable();

  constructor() { }
  changeObject(objeto: Produto, id: string) {
    this.objectSource.next({ objeto: objeto, id: id });
  }
}
