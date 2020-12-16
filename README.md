# UERN 2020.1
[Universidade do Estado do Rio Grande do Norte - UERN](http://portal.uern.br/)

[Faculdade de Ciências Exatas e Naturais - FANAT](http://fanat.uern.br/default.asp?item=faculdade-fanat-apresentacao)

[Departamento de Informática - DI](http://fanat2.uern.br/di/)

## Programação Avançada

#### Loja Virtual
Repositório destinado ao desenvolvimento de uma loja virtual, pela equipe ExSale Inc.

#### Tecnologias/Linguagem utilizadas

Angular (Node) 
TypeScript
Bootstrap
Firebase

## Equipe
[Anderson Goulart](https://github.com/acgoularthub), [João Roberto](https://github.com/joaoroberto50), [Kefton David](https://github.com/KeftonDavid), [Wesley Israel](https://github.com/WesleyIsr4).

# Instruções:

São necessários ter instalados no pc o `Angular CLI` e `o NodeJS`, caso não tenha, basta seguir. Recomenda-se seguir a documentação oficial de instalação para seu sistema operacional.

## Usando Makefile
Pode ser utilizado o [Make File](https://github.com/ExSaleInc/MarketPlace/blob/main/Marketplace/makefile) para automatizar a instalação nas distribuições Linux.

```shell
make install
```

Para executar o script e instalar o node e todos os módulos nescessários, após usar o `make install` usamos o comando `make`, para instalar o projeto e buildar:

```shell
make
```

Para buildar a aplicação e iniciar um servidor local basta o comando:
```shell
make serve
```

## Usando o terminal

Para sistema baseados em `Debian/Ubuntu`:

- Instale o `NodeJS/NPM`

```shell
  $ sudo apt install nodejs
```

(PS NPM ja vem junto do pacote NodeJS)

- Instale o pacote `AngularCLI`

```shell
  $ sudo npm install -g @angular/cli 
```

- Instale o `bootstrap`

```shell
  $ sudo npm install bootstrap 
```

- Baixe o [repositório](https://github.com/ExSaleInc/MarketPlace) no local desejado e entre na pasta `Markeplace`.

- Dentro do diretório, instale as dependências usando `npm install`
  
  ```shell
    ~/MarketPlace/Marketplace$ npm install
  ```

- Execute o comando `ng build` 

```shell
  ~/MarketPlace/Marketplace$ ng build
```

- Execute o comando `ng serve` 

```shell
  ~/MarketPlace/Marketplace$ ng serve
```

O servidor irá disponibilizar o acesso a página em seu `localhost`, na porta `4200` (ou onde for indicado no teminal, podendo mudar de acordo com versões ou sistemas).

# Detalhes implementados e notas:

* Para facilitar o login foi implementado o sistema de autenticação de conta utilizando o serviço de e-mail do Google. Para utilizar basta estar logado em uma conta Google no mesmo navegador.

* Não foram implementados métodos de edição e exclusão dos produtos por falta de tempo, a equipe só começou a trabalhar nas implementações nos ultimos dias, devido a problemas pessoais.
* Não foi implementado um login por informações fornecidas pelo usuário, o objetivo principal de login tinha sido alcançado com a autenticação por e-mail e, para agilizar o projeto, foi decidido a não implementar em um primeiro momento.


### Wireframes do que é esperado ao final do projeto

* **Tela de cadastro**
![Cadastro](https://github.com/acgoularthub/MarketPlace/blob/main/imagens/Wireframes/Cadastro.png?raw=true)

* **Tela do Carrinho**
![carrinho](https://github.com/acgoularthub/MarketPlace/blob/main/imagens/Wireframes/Carrinho.png?raw=true)

* **Tela de produtos**
![produtos](https://github.com/acgoularthub/MarketPlace/blob/main/imagens/Wireframes/Compras.png?raw=true)

* **LogIn**
![login](https://github.com/acgoularthub/MarketPlace/blob/main/imagens/Wireframes/Login.png?raw=true)

* **Menu do Usuário**
![menu](https://github.com/acgoularthub/MarketPlace/blob/main/imagens/Wireframes/Menu_user.png?raw=true)

* **Apresentação do produto**
![produto2](https://github.com/acgoularthub/MarketPlace/blob/main/imagens/Wireframes/Produto.png?raw=true)

* **Exibição do Usuário**
![user](https://github.com/acgoularthub/MarketPlace/blob/main/imagens/Wireframes/User.png?raw=true)
