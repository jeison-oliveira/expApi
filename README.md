# Projeto expApi

## Repositório

```sh
https://github.com/jeison-oliveira/expApi/tree/feature/crudProduto
```

# Descrição da Atividade

Desenvolva os formulários de criação, edição e delação de produtos utilizando hooks e a biblioteca axios.

## O que deve ser enviado?

- O link de um vídeo de até 1 minuto gravado com a ferramenta Loom, onde você se apresenta e explica o funcionamento do código e os passos executados para a resolução da tarefa.

- Um relatório legível contendo os commits executados e comentados, isto é, o trace executado na tarefa.

- Deve ser dado permissão de acesso ao seu repositório Git para os usuários natacshamelo e julianaCastro.

## Critérios de Avaliação - 10,0 pontos:

- Legibilidade: As outras pessoas conseguem entender o que foi feito. (1,0 ponto)
- Corretude: Seguir os critérios da tarefa e estar funcionando! (4,5 pontos)
- Completude: Cumprir todos os requisitos da tarefa! (4,5 pontos)

# Vídeo Explicativo

- [Loom](https://www.loom.com/embed/1b7fd39e32d34f8ba018603b0b944e78?sid=5f462756-ea3b-45c8-87b9-5033c240508b)

# Relatório dos Commits

### Commits anteriores

Como esse código havia sido realizados na disciplina de Restful APIs há alguns commits anteriores referentes a essa disciplina na branch main.

### Issue: CRUD de Produtos com Hooks e Axios

Primeiro passo foi criar uma Issue no GitHub solicitando o desenvovimento dos formulários de criação, edição e delação de produtos utilizando Hooks e a biblioteca Axios. A partir desta Issue foi criada a branch feature/crudProduto.

### Adição do código do Carrinho de Compras(9436c6bf16b7e584d5a1f76514b235e5fff26225)

Primeiro commit, após a criação da branch feature/crudProduto. Neste commit foi portado todo o código do carrinho de compras desenvolvido nas atividades anteriores para o repositório [expApi](https://github.com/jeison-oliveira/expApi/tree/feature/crudProduto) utilizado nas disciplinas anteriores.

### CRUD Completo do Produto (20b98082d3516d0c0a14b676e3761a13cffa4fd4)

Finalizada a criação dos formulários e CRUD com Axios.

### Adicionando o relatório e outras instruções no README.md

Commits realizados após o fim da atividade de criação do relatório em formato de README.md.

# Começando

Estas instruções permitirão que você obtenha uma cópia do projeto e a execute em sua máquina local para fins de desenvolvimento e teste.

# Pré-requisitos

Você precisa ter o Docker instalado em sua máquina. Este projeto foi construído usando Node.js versão v18.16.0 e npm versão 9.5.1.

# Instalação

- Clone o repositório:

```sh
git clone https://github.com/jeison-oliveira/expApi.git
```

- Navegue até o diretório do projeto:

```sh
cd expApi
```

- No terminal, digite o seguinte comando para mudar da branch **main** para a **feature/crudProduto**:

```sh
git checkout feature/crudProduto
```

- Copiar o dódigo das variáveis de ambiente do arquivo de exemplo a serem usadas no Docker Compose:

```sh
cp .env.example .env
```

- Copiar o dódigo das variáveis de ambiente do arquivo de exemplo a serem usadas no frontend:

```sh
cp frontend/.env.example frontend/.env
```

- Copiar o dódigo das variáveis de ambiente do arquivo de exemplo a serem usadas no backend:

```sh
cp backend/.env.example backend/.env
```

- Instalar as dependências do frontend

Windows:

```sh
cd frontend ; npm install ; cd ..
```

Unix-like Systems:

```sh
cd frontend && npm install && cd ..
```

- Instalar as dependências do backend

Windows:

```sh
cd backend ; npm install ; cd ..
```

Unix-like Systems::

```sh
cd backend && npm install && cd ..
```

## Executando a Aplicação

- Subir o container Docker com frontend, backend e BD e PhpMyAdmin

```sh
docker compose up -d
```

## Acessando a Aplicação

- Para executar a aplicação frontend, acessar a seguinte url:

```sh
http://localhost:3366/
```

# Tecnologias

- **Docker** - Ambiente que possibiliza a conteinerização dos ambientes
- **Node.js** - Ambiente de execução JavaScript
- **React** - Framework frontend de aplicação web
- **Bootstrap** - Framework frontend de aplicação web

# Autor

- [@jeison-oliveira](https://github.com/jeison-oliveira)

# Colaboradoras

- [@natacshamelo](https://github.com/natacshamelo)
- [@julianaCastro](https://github.com/julianaCastro)
