import json from "./parser";
import read from "./reader";
import GameSaving from './gamesaving';

export default class GameSavingLoader {
  static load() {
    return read()
      .then((data) => json(data))
      .then((parsedData) => {
        const parsedJSON = JSON.parse(parsedData);
        return new GameSaving(parsedJSON);
      });
  }
}