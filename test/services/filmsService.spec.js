const expect = require('chai').expect;
const nock = require('nock');
const filmsService = require('../../services/filmsService');

describe('filmsService', () => {
  describe('#listFilms', () => {
    beforeEach(() => {
      this.expectedSwapiId = '5';
      this.expectedTitle = 'A New Hope';
      this.expectedDirector = 'George Lucas';
      const filmsResponse = {
        results: [
          {
            title: this.expectedTitle,
            director: this.expectedDirector,
            url: 'https://swapi.co/api/films/' + this.expectedSwapiId + '/',
          },
        ],
      };
      nock('http://swapi.co')
        .get('/api/films/')
        .reply(200, filmsResponse);
    });

    it('returns a promise with formatted data from swapi', (done) => {
      const subject = filmsService.listFilms('director');
      subject.then((result) => {
        const film = result[this.expectedDirector][0];
        expect(result).to.have.key(this.expectedDirector);
        expect(film.director).to.equal(this.expectedDirector);
        expect(film.title).to.equal(this.expectedTitle);
        expect(film.swapi_id).to.equal(this.expectedSwapiId);
        done();
      });
    });
  });
});
