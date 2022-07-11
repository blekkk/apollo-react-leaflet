import TileMapQueries from './Queries/TileMap'
import TileMapMutations from './Mutations/TileMap'

export = {
  Mutation: {
    ...TileMapMutations
  },
  Query: {
    ...TileMapQueries
  }
}