import Route from '@ember/routing/route';

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default class IndexRoute extends Route {
  model() {
    return fetch('http://api.tvmaze.com/shows/83/episodes').then((response) => {
      return response.json().then((episodes) => {
        return episodes[getRandom(0, episodes.length - 1)];
      });
    });
  }
}
