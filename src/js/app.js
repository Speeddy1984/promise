import json from "./parser";
import read from "./reader";

(async () => {
  try {
    const data = await read();
    const parsedData = await json(data);
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

  } catch (error) {
    throw new Error (error.message);
  }
})();