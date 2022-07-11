import { deleteOne } from "../../../Dao/TileMap"

export = async (_: any, {key}: any, {}) => {
  return await deleteOne(key);
}