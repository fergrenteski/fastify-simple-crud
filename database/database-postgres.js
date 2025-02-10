// Importa a função randomUUID do módulo crypto do Node.js para gerar IDs únicos
import { randomUUID } from "node:crypto";

// Importa a instância de conexão com o banco de dados
import { sql } from "./db.js";

// Define a classe DatabasePostgres para interagir com o banco de dados PostgreSQL
export class DatabasePostgres {
  /**
   * Lista os vídeos do banco de dados com base em uma string de busca.
   * @param {string} search - A string de busca para filtrar os vídeos pelo título.
   * @returns {Promise<Array>} - Uma promessa que resolve para um array de vídeos.
   */
  async list(search = "") {
    const videos = await sql`select * from videos where title ilike ${
      "%" + search + "%"
    }`;
    return videos;
  }

  /**
   * Cria um novo vídeo no banco de dados.
   * @param {Object} video - Um objeto contendo as informações do vídeo.
   * @param {string} video.title - O título do vídeo.
   * @param {string} video.description - A descrição do vídeo.
   * @param {number} video.duration - A duração do vídeo em segundos.
   * @returns {Promise<void>} - Uma promessa que resolve quando o vídeo é criado.
   */
  async create(video) {
    const videoId = randomUUID();
    const { title, description, duration } = video;
    await sql`insert into videos (id, title, description, duration) values (${videoId}, ${title}, ${description}, ${duration})`;
  }

  /**
   * Atualiza um vídeo existente no banco ae dados.
   * @param {string} id - O ID do vídeo a ser atualizado.
   * @param {Object} video - Um objeto contendo as novas informações do vídeo.
   * @param {string} video.title - O novo título do vídeo.
   * @param {string} video.description - A nova descrição do vídeo.
   * @param {number} video.duration - A nova duração do vídeo em segundos.
   * @returns {Promise<void>} - Uma promessa que resolve quando o vídeo é atualizado.
   */
  async update(id, video) {
    const { title, description, duration } = video;
    await sql`update videos set title = ${title}, description = ${description}, duration = ${duration} where id = ${id}`;
  }

  /**
   * Exclui um vídeo existente do banco de dados.
   * @param {string} id - O ID do vídeo a ser excluído.
   * @returns {Promise<void>} - Uma promessa que resolve quando o vídeo é excluído.
   */
  async delete(id) {
    await sql`delete from videos where id = ${id}`;
  }
}
