# Projeto expApi

## Repositório

```sh
https://github.com/jeison-oliveira/expApi/tree/feature/redux
```

# Descrição da Atividade

Nesta atividade, você deverá aprimorar o projeto frontend desenvolvido em aula, melhorando a
interface e adicionando novas funcionalidades ao carrinho de compras. Sempre que possível,
utilize o Gerenciamento de Estados Redux.
O projeto frontend que servirá de base está disponível em:
https://github.com/DouglasSM747/aula-redux-webacademy.git
Além disso, certifique-se de acessar o código atualizado do backend, que resolve a questão do
"cors" e retorna o dado "isAdmin". Esse código pode ser encontrado no repositório:
https://github.com/DouglasSM747/aula-redux-backend.git . Adicione as mudanças realizadas
nesse projeto ao seu próprio projeto, mas não utilize esse repositório como base do curso. Os
trechos de código que devem ser inseridos estão identificados com o comentário: "NEW CODE".
Especificações:
Em relação à interface, as seguintes mudanças são obrigatórias:
• Estilização do componente NavBar.
• Estilização do componente de Inserção de Produtos (Quando o usuário logado for
administrador).
• Quando o usuário logado for administrador, deve ser mostrada a tabela de produtos,
como está atualmente. Porém, quando o usuário logado for cliente, ele deve visualizar
os produtos em formato de Grid Card, exemplo da figura 1, mostrando todas as
informações do produto e um botão para inserir o produto no carrinho.
Figura 1 Exemplo de Grid Card de produtos
Em relação ao carrinho, as seguintes implementações devem ser feitas:
• Ao lado do texto/ícone do carrinho no Navbar, deve ser mostrada a quantidade de itens
no carrinho.
• Na tela do carrinho, os produtos inseridos devem ser listados, juntamente com suas
informações, tais como nome/preço do produto, a quantidade de vezes que o produtofoi inserido, o preço total do produto (Quantidade x Preço do produto) e o preço final da
compra.
• O usuário deve ser capaz de incrementar ou decrementar a quantidade de um produto,
além de conseguir remover um produto do carrinho. Utilizem como base a figura abaixo.
• Caso o usuário tente inserir uma quantidade de produtos maior que a disponível no
estoque, deve ser exibido um alerta.
Figura 2 Exemplo da listagem de produtos no carrinho
Entrega:
Você deverá gravar um vídeo curto, com duração máxima de 5 minutos, demonstrando o
funcionamento do aplicativo desenvolvido. Além disso, explique como o código foi organizado e
desenvolvido. O código-fonte deve ser hospedado no github, e o link para acesso deve ser
disponibilizado no comentário da atividade.
Caso tenha dúvidas, não hesite em entrar em contato.

# Vídeo Explicativo

- [Loom](https://www.loom.com/embed/34bc45467c584a0ebe763a6d298dbb4a?sid=4327d597-e31f-41bd-a238-4b6bd999d4b9)

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
git checkout feature/redux
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

Unix-like Systems:

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

# Professor

- [@DouglasSM747](https://github.com/DouglasSM747)
