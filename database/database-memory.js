// Importa a função randomUUID do módulo crypto do Node.js para gerar IDs únicos
import { randomUUID } from "node:crypto";

// Define a classe DatabaseMemory para simular um banco de dados em memória
export class DatabaseMemory {
  // Propriedade privada para armazenar os vídeos
  #videos = new Map();

  /**
   * Lista os vídeos armazenados na memória com base em uma string de busca.
   * @param {string} search - A string de busca para filtrar os vídeos pelo título.
   * @returns {Array} - Um array de vídeos.
   */
  list(search) {
    return Array.from(this.#videos.entries())
      .map(([id, video]) => ({
        id,
        ...video,
      }))
      .filter((video) => {
        if (search) {
          return video.title.includes(search);
        }
        return true;
      });
  }

  /**
   * Cria um novo vídeo na memória.
   * @param {Object} video - Um objeto contendo as informações do vídeo.
   * @param {string} video.title - O título do vídeo.
   * @param {string} video.description - A descrição do vídeo.
   * @param {number} video.duration - A duração do vídeo em segundos.
   */
  create(video) {
    const videoId = randomUUID();
    this.#videos.set(videoId, video);
  }

  /**
   * Atualiza um vídeo existente na memória.
   * @param {string} id - O ID do vídeo a ser atualizado.
   * @param {Object} video - Um objeto contendo as novas informações do vídeo.
   * @param {string} video.title - O novo título do vídeo.
   * @param {string} video.description - A nova descrição do vídeo.
   * @param {number} video.duration - A nova duração do vídeo em segundos.
   */
  update(id, video) {
    this.#videos.set(id, video);
  }

  /**
   * Exclui um vídeo existente da memória.
   * @param {string} id - O ID do vídeo a ser excluído.
   */
  delete(id) {
    this.#videos.delete(id);
  }
}
