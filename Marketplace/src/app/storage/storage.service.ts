import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { Produto } from '../db/produto';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  produto: Produto;
  selectedFile: File;
  downloadURL: Observable<string>;
  constructor(
    private storage: AngularFireStorage
  ) { }

  uploadFile(){
    this.produto = new Produto();
    let n = Date.now();
    const filePath = `users${n}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, this.selectedFile);
    task.snapshotChanges().pipe(
      finalize(() => {
        this.downloadURL = fileRef.getDownloadURL();
        this.downloadURL.subscribe(downloadURLResponse => {
          this.produto.imagem = downloadURLResponse;
        });
      }),
    )
    .subscribe();
  }
}
