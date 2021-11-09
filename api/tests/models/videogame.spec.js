const { Videogame,Gender, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Videogame model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Videogame.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Videogame.create({description:'Es un juego sobre...'})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Videogame.create({ name: 'Super Mario Bros', description:'Es un juego sobre...' });
      });
      it('should throw an error if the name already belongs to a video game created', (done) => {
        Videogame.create({ name: 'Super Mario Bros', description:'Es un juego sobre...' })
          .then(()=>{
            Videogame.create({description:'Es un juego sobre...'})
              .then(() => done(new Error('It requires a valid name')))
              .catch(() => done());
          }).catch(() => done());
      });
    });
    describe('description', () => {
      it('should throw an error if description is null', (done) => {
        Videogame.create({name: 'Super Mario Bros'})
          .then(() => done(new Error('It requires a valid description')))
          .catch(() => done());
      });
      it('should work when its a valid description', () => {
        Videogame.create({ name: 'Super Mario Bros', description:'Es un juego sobre...' });
      });
    });
  });
});

describe('Gender model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Gender.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Gender.create({})
          .then(() => done())
          .catch(() => done(new Error('It requires a valid name')));
      });
      it('should work when its a valid name', () => {
        Gender.create({ name: 'Action'});
      });
      it('should throw an error if the name already belongs to a video game created', (done) => {
        Gender.create({ name: 'Action'})
          .then(()=>{
            Gender.create({ name: 'Action'})
              .then(() => done(new Error('It requires a valid name')))
              .catch(() => done());
          }).catch(() => done());
      });
    });
  });
});