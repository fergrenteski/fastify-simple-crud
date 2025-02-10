# 📹 Fastify Simple CRUD

Este é um projeto de exemplo que implementa um CRUD simples usando o framework Fastify e um banco de dados PostgreSQL. O projeto inclui rotas para criar, listar, atualizar e excluir vídeos.

## 🚀 Começando

Estas instruções fornecerão uma cópia do projeto em funcionamento na sua máquina local para fins de desenvolvimento e teste.

### 📋 Pré-requisitos

Você precisará ter o Node.js e o npm instalados na sua máquina.

### 🔧 Instalação

1. Clone o repositório:
    ```bash
    git clone https://github.com/fergrenteski/fastify-simple-crud.git
    cd fastify-simple-crud
    ```

2. Instale as dependências:
    ```bash
    npm install
    ```

3. Crie um arquivo [.env](http://_vscodecontentref_/0) na raiz do projeto com as seguintes variáveis de ambiente:
    ```env
    PGHOST=
    PGDATABASE=
    PGUSER=
    PGPASSWORD=
    ENDPOINT_ID=
    PORT=
    ```

4. Crie a tabela no banco de dados PostgreSQL:
    ```bash
    node data/create-table.js
    ```

### 🔨 Uso

1. Inicie o servidor:
    ```bash
    npm run dev
    ```

2. Use as rotas HTTP definidas no arquivo [routes.http](http://_vscodecontentref_/1) para interagir com o servidor. Você pode usar uma ferramenta como o [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) no VS Code para enviar as requisições.

### 📚 Rotas

- **Criar um novo vídeo**
    ```http
    POST http://localhost:3333/videos
    Content-Type: application/json

    {
      "title": "Video 3",
      "description": "Video 3",
      "duration": 3600
    }
    ```

- **Listar todos os vídeos**
    ```http
    GET http://localhost:3333/videos
    ```

- **Listar vídeos com base em uma string de busca**
    ```http
    GET http://localhost:3333/videos?search=teste
    ```

- **Atualizar um vídeo existente**
    ```http
    PUT http://localhost:3333/videos/221e1936-3fc6-4731-9f82-a359e455c60c
    Content-Type: application/json

    {
      "title": "Video teste teste teste",
      "description": "Video 2",
      "duration": 3600
    }
    ```

- **Excluir um vídeo existente**
    ```http
    DELETE http://localhost:3333/videos/a4012d32-098a-420a-87f8-a8641648cbb5
    ```

### 🛠️ Estrutura do Projeto

- [server.js](http://_vscodecontentref_/2): Arquivo principal do servidor Fastify.
- [database](http://_vscodecontentref_/3): Contém as implementações do banco de dados em memória e PostgreSQL.
- [create-table.js](http://_vscodecontentref_/4): Script para criar a tabela [videos](http://_vscodecontentref_/5) no banco de dados PostgreSQL.
- [routes.http](http://_vscodecontentref_/6): Arquivo com exemplos de requisições HTTP para testar as rotas.

### 📝 Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo LICENSE para mais detalhes.

### 📞 Contato

Se você tiver alguma dúvida ou sugestão, sinta-se à vontade para abrir uma issue ou entrar em contato.

---

Feito com ❤️ por [Luiz Fernando](https://github.com/fergrenteski)