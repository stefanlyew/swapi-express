const _ = require('underscore');

module.exports = (function () {
    return {
      filterFilmAttributes: (result) => {
        return _.map(result["results"], function(film) {
          return {
            director: film["director"],
            title: film["title"],
            swapi_id: _extractSwapiId(film["url"]),
          };
        });
      },
      groupFilmsBy: (groupBy, films) => {
        if (groupBy == "director") {
          return _.groupBy(films, "director");
        } else {
          return films;
        }
      }
    };

    function _extractSwapiId(url) {
      const matches = url.match(/films\/(.*)\//);
      return matches[1];
    }
}());
