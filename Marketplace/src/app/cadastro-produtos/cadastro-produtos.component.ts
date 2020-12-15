import { Component, OnInit } from '@angular/core';
import { DbDataMasterService } from '../db/db-data-master.service';
import { DbMasterService } from '../db/db-master.service';
import { Produto } from '../db/produto';
import { StorageService } from '../storage/storage.service';


@Component({
  selector: 'app-cadastro-produtos',
  templateUrl: './cadastro-produtos.component.html',
  styleUrls: ['./cadastro-produtos.component.css']
})
export class CadastroProdutosComponent implements OnInit {

  id: string;
  produto: Produto;

  constructor(
    private dbMaster: DbMasterService,
    private dbDataMaster: DbDataMasterService,
    private storage: StorageService
  ) { }

  ngOnInit(): void {
    this.produto = new Produto();
    this.dbDataMaster.currentObjeto.subscribe(data => {
      if(data.id && data.objeto){
        this.produto.nome = data.objeto.nome;
        this.produto.preco = data.objeto.preco;
        this.produto.descricao = data.objeto.descricao;
        this.id = data.id;
        this.produto.imagem = data.objeto.imagem;
      }
    })
  }

  detectFile(event: any){
    this.storage.selectedFile = event.target.files[0];
  }

  dbCall(){
    setTimeout(()=>{
      this.produto.imagem = this.storage.produto.imagem;
      this.dbMaster.insert(this.produto)
      this.produto = new Produto();
    }, 2000)
  }

  onSubmit(){
    this.storage.uploadFile();
    this.dbCall();
  }

}
