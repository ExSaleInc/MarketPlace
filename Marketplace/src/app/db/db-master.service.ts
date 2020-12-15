import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Produto } from './produto';

@Injectable({
  providedIn: 'root'
})
export class DbMasterService {

  constructor(private db: AngularFirestore) { }

  insert(produto: Produto){
    this.db.collection('produtos').add({...produto})
      .then((result: any) =>{
        console.log(result.id);
      })
  }

  getAll(){
    return this.db.collection('produtos')
      .snapshotChanges()
        .pipe(
          map(changes =>{
            return changes.map(c => ({ id: c.payload.doc.id, ...c.payload.doc.data() as Produto }));
          })
        );
  }
}
