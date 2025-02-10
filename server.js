// Importa o framework Fastify
import { fastify } from 'fastify';

// Importa as implementações do banco de dados
import { DatabaseMemory } from './database/database-memory.js';
import { DatabasePostgres } from './database/database-postgres.js';

// Cria uma instância do servidor Fastify
const server = fastify();

// Instancia o banco de dados (descomente a linha apropriada para usar o banco de dados desejado)
// const database = new DatabaseMemory();
const database = new DatabasePostgres();

// Define uma rota GET na raiz que retorna "Hello World"
server.get('/', async (request, reply) => {
  return "Hello World";
}); 

// Define uma rota POST para criar um novo vídeo
server.post('/videos', async (request, reply) => {
  const { title, description, duration } = request.body;
  
  // Cria um novo vídeo no banco de dados
  await database.create({ 
    title, 
    description, 
    duration 
  });

  // Retorna uma resposta de sucesso com status 201
  return reply.status(201).send();
});

// Define uma rota GET para listar vídeos, com suporte a busca
server.get('/videos', async (request) => {
  const search = request.query.search;
  
  // Lista os vídeos do banco de dados com base na busca
  const videos = await database.list(search);

  // Retorna a lista de vídeos
  return videos;
});

// Define uma rota PUT para atualizar um vídeo existente
server.put('/videos/:id', async (request, reply) => {
  const videoId = request.params.id;
  const { title, description, duration } = request.body;

  // Atualiza o vídeo no banco de dados
  await database.update(videoId, {
    title,
    description,
    duration,
  });

  // Retorna uma resposta de sucesso com status 204
  return reply.status(204).send();
});

// Define uma rota DELETE para excluir um vídeo existente
server.delete('/videos/:id', async (request, reply) => {
  const videoId = request.params.id;

  // Exclui o vídeo do banco de dados
  await database.delete(videoId);

  // Retorna uma resposta de sucesso com status 204
  return reply.status(204).send();
});

// Inicia o servidor na por padrão porta 3333
server.listen({
  port: process.env.PORT ?? 3333,
});