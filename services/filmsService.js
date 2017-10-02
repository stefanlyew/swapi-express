const _ = require('underscore');
const swapi = require('swapi-node');

module.exports = (function () {
    return {
      listFilms: (groupBy) => {
        return new Promise(function(resolve, reject) {
          swapi.getFilm().then((result) => {
            const filteredResults = result["results"].map(_filteredAttributes);
            const groupedResults = _groupFilmsBy(groupBy, filteredResults);
            resolve(groupedResults);
          }).catch((err) => {
            reject(err);
          });
        });
      },
    };

    function _filteredAttributes(film) {
        return {
          director: film["director"],
          title: film["title"],
          swapi_id: _extractSwapiId(film["url"]),
        };
    }

    function _groupFilmsBy(groupBy, films) {
      if (groupBy == "director") {
        return _.groupBy(films, "director");
      } else {
        return films;
      }
    }

    function _extractSwapiId(url) {
      const matches = url.match(/films\/(.*)\//);
      return matches[1];
    }
}());
