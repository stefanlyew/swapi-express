const _ = require('underscore');
const swapi = require('swapi-node');

function extractSwapiId(url) {
  const matches = url.match(/films\/(.*)\//);
  return matches[1];
}

function filteredAttributes(film) {
  return {
    director: film.director,
    title: film.title,
    swapi_id: extractSwapiId(film.url),
  };
}

function groupFilmsBy(groupBy, films) {
  if (groupBy === 'director') {
    return _.groupBy(films, 'director');
  }

  return films;
}

module.exports = {
  listFilms: (groupBy) => {
    return new Promise((resolve, reject) => {
      swapi.getFilm().then((result) => {
        const filteredResults = result.results.map(filteredAttributes);
        const groupedResults = groupFilmsBy(groupBy, filteredResults);
        resolve(groupedResults);
      }).catch((err) => {
        reject(err);
      });
    });
  },
};
