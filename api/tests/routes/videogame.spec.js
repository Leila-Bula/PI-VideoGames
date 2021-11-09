/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Videogame, conn } = require('../../src/db.js');

const agent = session(app);
const videogame = {
  name: 'Super Mario Bros',
  description: 'Este es un juego de ',
  genres:[{name:'Action'},{name:"Adventure"}]
};

describe('Videogame routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Videogame.sync({ force: true })
    .then(() => Videogame.create(videogame)));
  describe('GET /videogames', () => {
    it('should get 200', () =>
      agent.get('/videogames').expect(200)
    );
  });
  describe('GET /videogames?name="..."', () => {
    it('should get 200', () =>
      agent.get('/videogames?name=Mario Bros').expect(200)
    );
  });
  describe('GET /videogame/{idVideogame}', () => {
    it('should get 200 with valid id (existente)', () =>
      agent.get('/videogame/1').expect(200)
    );
    it('should get 500 with invalid id', () =>
      agent.get('/videogame/invalid').expect(500)
    );
  });
});
