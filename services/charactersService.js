const swapi = require('swapi-node');

function extractSwapiId(url) {
  const matches = url.match(/people\/(.*)\//);
  return matches[1];
}

function getAllCharactersFromSwapi(characterIds, resolve) {
  Promise.all(characterIds.map((id) => {

    return swapi.getPerson(id).then((result) => {
      return result.name;
    });
  })).then(results => resolve(results));
}

module.exports = {
  listCharacters: (filmSwapiId) => {
    return new Promise((resolve, reject) => {
      swapi.getFilm(filmSwapiId).then((result) => {
        const characterIds = result.characters.map(extractSwapiId);
        getAllCharactersFromSwapi(characterIds, resolve);
      }).catch((err) => {
        reject(err);
      });
    });
  }
};
