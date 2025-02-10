// Importa a instância de conexão com o banco de dados
import { sql } from "../database/db.js";

// Cria a tabela "videos" no banco de dados PostgreSQL
sql`
CREATE TABLE "public"."videos" (
  id text PRIMARY KEY,
  "title" text,
  "description" text,
  "duration" integer
)`
  .then(() => {
    // Loga uma mensagem de sucesso quando a tabela é criada
    console.log("Table created");
  })
  .catch((error) => {
    // Loga um erro caso ocorra algum problema na criação da tabela
    console.error(error);
  });
