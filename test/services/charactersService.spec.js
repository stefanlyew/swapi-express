const expect = require('chai').expect;
const nock = require('nock');
const charactersService = require('../../services/charactersService');
const swapi = require('swapi-node');

describe('charactersService', () => {
  describe('#listCharacters', () => {
    beforeEach(() => {
      const filmResponse = {
        characters: [
          'https://swapi.co/api/people/1/', 
          'https://swapi.co/api/people/2/', 
        ],
      };
      this.personOneName = 'Luke Skywalker';
      this.personTwoName = 'C-3PO';
      const personResponseOne = {
        name: this.personOneName,
      };
      const personResponseTwo = {
        name: this.personTwoName, 
      };
      nock('http://swapi.co')
        .get('/api/films/5')
        .reply(200, filmResponse);
      nock('http://swapi.co')
        .get('/api/people/1')
        .reply(200, personResponseOne);
      nock('http://swapi.co')
        .get('/api/people/2')
        .reply(200, personResponseTwo);
    });

    it('returns a promise with formatted data from swapi', (done) => {
      const subject = charactersService.listCharacters('5');
      subject.then((result) => {
        expect(result).to.eql([this.personOneName, this.personTwoName]);
        done();
      });
    });
  });
});
