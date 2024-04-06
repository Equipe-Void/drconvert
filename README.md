# Sistema de conversão e análise de dados: DrConvert

<img src ="https://img.shields.io/static/v1?label=status&message=%20in progress&color=red&style=%3CSTYLE%3E&logo=%3CLOGO%3E"> <img src = "https://img.shields.io/static/v1?label=sprint%20atual&message=%20primeira%20sprint&color=yellow&style=%3CSTYLE%3E&logo=%3CLOGO%3E"> <img src = "https://img.shields.io/static/v1?label=cliente&message=%20Dom%20Rock%20&color=blue&style=%3CSTYLE%3E&logo=%3CLOGO%3E">

<br>

<p align="left">DrConvert é uma solução para a conversão e mapeamento de dados de arquivos e análise de negócio.</p>

<br>

## 🙅‍♂️ Equipe Void

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
    <td><b>Rank</b></td>
    <td><b>Estória</b></td>
    <td><b>Prioridade</b></td>
  </tr>
  <tr>
    <td>1</td>
    <td>Eu, como Administrador, desejo Cadastrar usuários, para que eu possa Permitir o acesso dos usuário ao sistema</td>
    <td>4</td>
  </tr>
  <tr>
    <td>2</td>
    <td>Eu, como Administrador/Cliente, desejo Realizar o login no sistema, para que eu possa Acessar as funcionalidades do sistema</td>
    <td>5</td>
  </tr>
  <tr>
    <td>3</td>
    <td>Eu, como Cliente, desejo Realizar o upload do arquivo, para que eu possa Visualizar o arquivo mapeado</td>
    <td>1</td>
  </tr>
  <tr>
    <td>4</td>
    <td>Eu, como Cliente, desejo Visualizar/Salvar/Modificar os campos, para que eu possa Verificar, atualizar e adicionar os tipos e nomes dos campos</td>
    <td>2</td>
  </tr>
  <tr>
    <td>5</td>
    <td>Eu, como Cliente, desejo Aplicar as regras de negócio, para que eu possa Realizar as conversões de dados</td>
    <td>3</td>
  </tr>
  <tr>
    <td>6</td>
    <td>Eu, como Cliente, desejo Gerar o .YAML, para que eu possa Obter o arquivo .YAML com o esquema dos dados</td>
    <td>6</td>
  </tr>
  </table>
</div>
## 📃 Product Backlog

<a href="https://github.com/equipe-void/api-3sem/tree/sp1/backlog/product_backlog.xlsx">Product Backlog</a><br>

<div>
  <table>
    <tr>
    <td><b>Rank</b></td>
    <td><b>Estória</b></td>
    <td><b>Prioridade</b></td>
  </tr>
  <tr>
    <td>1</td>
    <td>Eu, como Administrador, desejo Cadastrar usuários, para que eu possa Permitir o acesso dos usuário ao sistema</td>
    <td>4</td>
  </tr>
  <tr>
    <td>2</td>
    <td>Eu, como Administrador/Cliente, desejo Realizar o login no sistema, para que eu possa Acessar as funcionalidades do sistema</td>
    <td>5</td>
  </tr>
  <tr>
    <td>3</td>
    <td>Eu, como Cliente, desejo Realizar o upload do arquivo, para que eu possa Visualizar o arquivo mapeado</td>
    <td>1</td>
  </tr>
  <tr>
    <td>4</td>
    <td>Eu, como Cliente, desejo Visualizar/Salvar/Modificar os campos, para que eu possa Verificar, atualizar e adicionar os tipos e nomes dos campos</td>
    <td>2</td>
  </tr>
  <tr>
    <td>5</td>
    <td>Eu, como Cliente, desejo Aplicar as regras de negócio, para que eu possa Realizar as conversões de dados</td>
    <td>3</td>
  </tr>
  <tr>
    <td>6</td>
    <td>Eu, como Cliente, desejo Gerar o .YAML, para que eu possa Obter o arquivo .YAML com o esquema dos dados</td>
    <td>6</td>
  </tr>
  </table>
</div>

<br>

## 📝 Documentação por Sprint

> Documentação - [Sprint 1](https://github.com/equipe-void/api-3sem/tree/sp1/docs/sprint1/README.md)

## 📝 Documentação por Sprint

> Documentação - [Sprint 1](https://github.com/equipe-void/api-3sem/tree/sp1/docs/sprint1/README.md)

<br>

## ℹ️ Como usar o aplicativo

### Pré-requisitos

Para clonar e rodar a aplicação, é necessário ter instalado em sua máquina o [Git](https://git-scm.com), [Java jdk](https://www.oracle.com/br/java/technologies/downloads/#java21),
[Maven Apache](https://maven.apache.org/), [NodeJS](https://nodejs.org/en) e o [MySQL](https://www.mysql.com/). Além disso, é legal ter um bom editor de código, como o [VSCode](https://code.visualstudio.com/).

`Iniciar o backend em modo de desenvolvimento`

```
  $ cd drconvert
  $ cd server
  $ mvn spring-boot:run
```

`O projeto deve iniciar em http://localhost:8080`

<br>
<br>

`Iniciar o frontend em modo de desenvolvimento`

```
  $ git clone https://github.com/equipe-void/drconvert.git
  $ cd drconvert
  $ cd web
  $ npm install ou yarn install
  $ npm run dev ou yarn run dev
```

`O projeto deve iniciar em http://localhost:3000`
Para clonar e rodar a aplicação, é necessário ter instalado em sua máquina o [Git](https://git-scm.com), [Java jdk](https://www.oracle.com/br/java/technologies/downloads/#java21),
[Maven Apache](https://maven.apache.org/), [NodeJS](https://nodejs.org/en) e o [MySQL](https://www.mysql.com/). Além disso, é legal ter um bom editor de código, como o [VSCode](https://code.visualstudio.com/).

`Iniciar o backend em modo de desenvolvimento`

```
  $ cd drconvert
  $ cd server
  $ mvn spring-boot:run
```

`O projeto deve iniciar em http://localhost:8080`

<br>
<br>

`Iniciar o frontend em modo de desenvolvimento`

```
  $ git clone https://github.com/equipe-void/drconvert.git
  $ cd drconvert
  $ cd web
  $ npm install ou yarn install
  $ npm run dev ou yarn run dev
```

`O projeto deve iniciar em http://localhost:3000`
