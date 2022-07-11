import { createOne } from "../../../Dao/TileMap";

export = async (_: any, {input}: any, {}) => {
  return await createOne(input);
}