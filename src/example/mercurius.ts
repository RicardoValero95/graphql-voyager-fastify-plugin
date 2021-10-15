import fastify from 'fastify'
import mercurius from 'mercurius'
// import GraphQLVoyagerFastify from "graphql-voyager-fastify-plugin";
import GraphQLVoyagerFastify from '../index'

const app = fastify({
  logger: {
    level: 'info',
  },
})

const schema = `
  type Query {
    add(x: Int, y: Int): Int
  }
`

const resolvers = {
  Query: {
    add: async (_: unknown, { x, y }: { x: number; y: number }) => x + y,
  },
}

app.register(mercurius, {
  schema,
  resolvers,
  graphiql: false,
  ide: false,
  path: '/graphql',
})

app.register(GraphQLVoyagerFastify, {
  /**
   * All these are the defaults.
   */
  path: '/voyager',
  endpoint: '/graphql',
})

app.listen(3000)
