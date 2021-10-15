import type { FastifyPluginCallback } from 'fastify'
import fp from 'fastify-plugin'
import { RenderVoyagerOptions, renderVoyagerPage } from './render'

export interface GraphQLVoyagerFastifyPluginOptions
  extends RenderVoyagerOptions {
  /**
   * Path in which GraphQL Voyager will be accesible.
   *
   * By default is `/voyager`
   */
  path?: string
}

const graphqlVoyagerFasitfyPlugin: FastifyPluginCallback<GraphQLVoyagerFastifyPluginOptions> =
  (
    fastify,
    { path = '/voyager', endpoint = '/graphql', ...renderOptions } = {},
    done
  ) => {
    // fastify.register(fastifyStatic, {
    //   //TODO
    //   root: '/dist',
    //   prefix: baseUrl,
    // })

    const voyagerPage = renderVoyagerPage({
      endpoint,
      ...renderOptions,
    })

    fastify.get(path, (_req, res) => {
      res.type('text/html').send(voyagerPage)
    })

    done()
  }

export default fp(graphqlVoyagerFasitfyPlugin, {
  fastify: '>= 3.x',
  name: 'graphql-voyager-fastify-plugin',
})
