# Sistema de conversão e análise de dados: DrConvert

<img src ="https://img.shields.io/static/v1?label=status&message=%20em progresso&color=red&style=%3CSTYLE%3E&logo=%3CLOGO%3E"> <img src = "https://img.shields.io/static/v1?label=sprint%20atual&message=%20segunda%20sprint&color=yellow&style=%3CSTYLE%3E&logo=%3CLOGO%3E"> <img src = "https://img.shields.io/static/v1?label=cliente&message=%20Dom%20Rock%20&color=blue&style=%3CSTYLE%3E&logo=%3CLOGO%3E">

<br>

<p align="left">DrConvert é uma solução para a conversão e mapeamento de dados de arquivos e análise de negócio.</p>

<br>

## 🙅‍♂️ Equipe Void

#### **Integrantes:**

> _Product Owner_ - [Gabriel Vieira]()

> _Scrum Master_ - [João Vitor Marques](https://www.linkedin.com/in/joao-vitor-da-silva-marques-944b461bb/)

> _Dev. Team_ - [Ali Mohamed]()

> _Dev. Team_ - [Cainan Thomas]()

> _Dev. Team_ - [Guilherme Wunderlich]()

<br>

## 👨‍💻 Tecnologias

#### Foram utilizadas as seguintes tecnologias e bibliotecas:

> **Design e Prototipagem:** - [Figma](https://www.figma.com/)

> **Ferramenta/Framework backend:** - [Spring Boot](https://spring.io/projects/spring-boot)

> **Ferramenta/Framework frontend:** - [NextJS](https://nextjs.org/)

> **SGBD:** - [MySQL](https://www.mysql.com/)

<br>

## 📃 Product Backlog

<a href="https://github.com/equipe-void/api-3sem/tree/sp1/backlog/product_backlog.xlsx">Product Backlog</a><br>

<div>
  <table>
    <tr>
      <td><b>Estória</b></td>
      <td><b>Critérios de Aceitação</b></td>
      <td><b>Prioridade</b></td>
      <td><b>Requisitos</b></td>
      <td><b>Sprint</b></td>
    </tr>
    <tr>
      <td>Eu, como Administrador, desejo Cadastrar usuários, para que eu possa Permitir o acesso dos usuário ao sistema</td>
      <td>Somente o administrador poderá cadastrar usuários, os usuários podem ter permissões distintas</td>
      <td>6</td>
      <td>1</td>
      <td>1ª</td>
    </tr>
    <tr>
      <td>Eu, como Administrador/Cliente, desejo Realizar o login no sistema, para que eu possa Acessar as funcionalidades do sistema</td>
      <td>O login deve será feito com um email e senha válidos, direcionando o usuário à tela meus projetos</td>
      <td>7</td>
      <td>1</td>
      <td>1ª</td>
    </tr>
    <tr>
      <td>Eu, como Cliente, desejo Realizar o upload do arquivo, para que eu possa Visualizar o arquivo mapeado</td>
      <td>O arquivo deverá ser do tipo .csv</td>
      <td>1</td>
      <td>2</td>
      <td>1ª</td>
    </tr>
    <tr>
      <td>Eu, como Cliente, desejo Visualizar os campos, para que eu possa verificar e selecionar os tipos dos campos</td>
      <td>Após o upload deverá ser possivel visualizar os campos mapeados no arquivo</td>
      <td>2</td>
      <td>3</td>
      <td>1ª</td>
    </tr>
    <tr>
      <td>Eu, como Cliente, desejo Salvar os campos, para que eu possa acessar os campos quando necessário</td>
      <td>Somente o administrador poderá cadastrar usuários, os usuários podem ter permissões O usuário deverá verificar os tipos dos campos mapeados, poderá adicionar e remover campos</td>
      <td>4</td>
      <td>3</td>
      <td>1ª</td>
    </tr>
    <tr>
      <td>Eu, como Cliente, desejo Modificar os campos, para que eu possa atualizar e adicionar os tipos e nomes dos campos</td>
      <td>O usuário poderá adicionar e remover arquivos de um projeto, editar e excluir campos mapeados</td>
      <td>5</td>
      <td>3</td>
      <td>1ª</td>
    </tr>
    <tr>
      <td>Eu, como Cliente, desejo Aplicar as regras de negócio, para que eu possa Realizar as conversões de dados</td>
      <td>Os dados ao ser convertidos já deve ser armazenados nos sistema com as respctivas conversões</td>
      <td>3</td>
      <td>4</td>
      <td>2ª</td>
    </tr>
    <tr>
      <td>Eu, como Administrador, desejo Ter acesso à um dashboard, para que eu possa visualizar os Usuários e Arquivos no sistema</td>
      <td>Somente o admnistrador terá acesso ao dashboard</td>
      <td>8</td>
      <td>5</td>
      <td>2ª</td>
    </tr>
    <tr>
      <td>Eu, como Cliente, desejo Gerar o .YAML, para que eu possa Obter o arquivo .YAML com o esquema dos dados</td>
      <td>O arquivo .YAML deve conter todas as informações até a etapa atual do arquivo</td>
      <td>9</td>
      <td>Bônus</td>
      <td>4ª</td>
    </tr>
  </table>

  <br>
  
  <table>
    <tr>
      <td><b>Identificador</b></td>
      <td><b>Requisitos</b></td>
    </tr>
    <tr>
      <td>1</td>
      <td>Desenvolver uma interface de cadastro do cliente, solução e usuários autorizados a configurar os dados</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Desenvolver uma interface de upload de dados csv ou excel e apresentação da estrutura dos dados</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Desenvolver uma interface que define quais campos serão mapeados como chave de identificação dos dados</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Desenvolver uma interface que será aplicada uma regra comum aos clientes</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Desenvolver uma interface para análise de dados no sistema</td>
    </tr>
  </table>
</div>

<br>

## 📝 Documentação por Sprint

> Documentação - [Sprint 1](https://github.com/equipe-void/api-3sem/tree/sp1/docs/sprint1/README.md)

<br>

## ℹ️ Como usar o aplicativo

### Pré-requisitos

Para clonar e rodar a aplicação, é necessário ter instalado em sua máquina o [Git](https://git-scm.com), [Java jdk](https://www.oracle.com/br/java/technologies/downloads/#java21),
[Maven Apache](https://maven.apache.org/), [NodeJS](https://nodejs.org/en) e o [MySQL](https://www.mysql.com/). Além disso, é legal ter um bom editor de código, como o [VSCode](https://code.visualstudio.com/).

`Iniciar o backend em modo de desenvolvimento`

`na pasta principal do projeto (drconvert), executar:`

```
  $ git clone https://github.com/equipe-void/drconvert.git
  $ cd drconvert
  $ cd server
  $ mvn spring-boot:run
```

`O projeto deve iniciar em http://localhost:8080`

`A documentação das rotas pode ser encontrada em http://localhost:8080/swagger-ui/index.html`

<br>
<br>

`Iniciar o frontend em modo de desenvolvimento`

`na pasta principal do projeto (drconvert), executar:`

```
  $ cd web
  $ npm install ou yarn install
  $ npm run dev ou yarn run dev
```

`O projeto deve iniciar em http://localhost:3000`

> _Wireframe de alta fidelidade_ - [Wireframe Figma](https://www.figma.com/proto/dwFzK8Id4Ae014ZAoK5Hl6/drconvert?type=design&node-id=176-2&t=qRggNmCuwjykSuSh-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=6%3A53&mode=design)
