import TokenService from "../services/token-service";
import config from "../config";

const GameApiService = {
  getGames() {
    return fetch(`${config.API_ENDPOINT}/games`, {
      headers: { authorization: `bearer ${TokenService.getAuthToken()}` }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },

  getGame(gameId) {
    return fetch(`${config.API_ENDPOINT}/games/${gameId}`, {
      headers: { authorization: `bearer ${TokenService.getAuthToken()}` }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },

  getGameReviews(gameId) {
    return fetch(`${config.API_ENDPOINT}/games/${gameId}/reviews`, {
      headers: { authorization: `bearer ${TokenService.getAuthToken()}` }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },

  postGame(title, description, rated, platforms) {
    return fetch(`${config.API_ENDPOINT}/games`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({
        title,
        description,
        rated,
        platforms
      })
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },

  postReview(gameId, title, rating, review) {
    return fetch(`${config.API_ENDPOINT}/reviews`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({
        game_id: gameId,
        title,
        rating,
        review
      })
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  }
};

export default GameApiService;
