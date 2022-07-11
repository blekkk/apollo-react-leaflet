import { updateOne } from "../../../Dao/TileMap"

export = async (_: any, {key, input}: any, {}) => {
  return await updateOne(key, input)
}