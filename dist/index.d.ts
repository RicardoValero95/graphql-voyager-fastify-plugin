/// <reference types="node" />
import type { FastifyPluginCallback } from 'fastify';
import { RenderVoyagerOptions } from './render';
export interface GraphQLVoyagerFastifyPluginOptions extends RenderVoyagerOptions {
    /**
     * Path in which GraphQL Voyager will be accesible.
     *
     * By default is `/voyager`
     */
    path?: string;
}
declare const _default: FastifyPluginCallback<GraphQLVoyagerFastifyPluginOptions, import("http").Server>;
export default _default;
