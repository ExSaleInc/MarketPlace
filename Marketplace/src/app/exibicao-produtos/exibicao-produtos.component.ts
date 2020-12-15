import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DbDataMasterService } from '../db/db-data-master.service';
import { DbMasterService } from '../db/db-master.service';
import { StorageService } from '../storage/storage.service';

@Component({
  selector: 'app-exibicao-produtos',
  templateUrl: './exibicao-produtos.component.html',
  styleUrls: ['./exibicao-produtos.component.css']
})
export class ExibicaoProdutosComponent implements OnInit {

  Produtos: Observable<any>;
  imagem: string;
  constructor(
    private dbMaster: DbMasterService,
    private dbDataMaster: DbDataMasterService,
    private storage: StorageService
  ) { }

  ngOnInit(): void {
    this.Produtos = this.dbMaster.getAll();
  }

}
