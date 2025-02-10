// Carrega as variáveis de ambiente do arquivo .env
import "dotenv/config";

// Importa o cliente postgres
import postgres from "postgres";

// Desestrutura as variáveis de ambiente necessárias para a conexão com o banco de dados
const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;

// Exporta a instância de conexão com o banco de dados PostgreSQL
export const sql = postgres({
  host: PGHOST,
  database: PGDATABASE,
  username: PGUSER,
  password: PGPASSWORD,
  port: 5432,
  ssl: "require",
  connection: {
    options: `project=${ENDPOINT_ID}`,
  },
});

/**
 * Função assíncrona para obter a versão do PostgreSQL.
 * Executa uma consulta SQL para obter a versão do PostgreSQL e imprime o resultado no console.
 */
async function getPgVersion() {
  const result = await sql`select version()`;
  console.log(result);
}

// Chama a função para obter a versão do PostgreSQL
getPgVersion();
