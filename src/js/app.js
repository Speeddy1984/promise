import json from "./parser";
import read from "./reader";

export default class GameSavingLoader {
  static load() {
    return read()
      .then((data) => json(data))
      .then((parsedData) => {
        const parsedJSON = JSON.parse(parsedData);
        return {
          id: parsedJSON.id,
          created: parsedJSON.created,
          userInfo: {
            id: parsedJSON.userInfo.id,
            name: parsedJSON.userInfo.name,
            level: parsedJSON.userInfo.level,
            points: parsedJSON.userInfo.points,
          },
        };
      });
  }
}