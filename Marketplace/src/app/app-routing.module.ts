import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroProdutosComponent } from './cadastro-produtos/cadastro-produtos.component';
import { ExibicaoProdutosComponent } from './exibicao-produtos/exibicao-produtos.component';
import { UsuarioComponent } from './usuario/usuario.component';

const routes: Routes = [
  {path: 'usuario', component: UsuarioComponent},
  {path: 'cadastroprodutos', component: CadastroProdutosComponent},
  {path: 'exibicaoprodutos', component: ExibicaoProdutosComponent},
  {path: '', redirectTo: 'exibicaoprodutos', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
