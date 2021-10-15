# graphql-voyager-fastify-plugin

[![npm](https://img.shields.io/npm/v/graphql-voyager-fastify-plugin.svg)](https://www.npmjs.com/package/graphql-voyager-fastify-plugin)

This is a [**Fastify Plugin**](https://www.fastify.io/docs/master/Plugins/) for hosting an instance of [**GraphQL Voyager**](https://github.com/APIs-guru/graphql-voyager), with support for **TypeScript**, and tested for **Fastify v3**.

## Install

```sh
npm install graphql-voyager-fastify-plugin
```

## Usage

```ts
import fastify from 'fastify'
import GraphQLVoyagerFastify from 'graphql-voyager-fastify-plugin'

const app = fastify()

// ...

app.register(GraphQLVoyagerFastify, {
  /**
   * All these are the defaults.
   */
  // url path
  path: '/voyager',
  // graphql endpoint path
  endpoint: '/graphql'
});

// ...

// Voyager available at localhost:3000/voyager
app.listen(3000);
```

## References

Heavily based on [Altair](https://github.com/altair-graphql/altair) Fastify Plugin and this [repo by bdatdo0601](https://github.com/bdatdo0601/graphql-api-starter/blob/master/src/plugins/voyager/index.js). 

To publish to npm I read this [guide](https://cameronnokes.com/blog/the-30-second-guide-to-publishing-a-typescript-package-to-npm/) and this other [guide](https://itnext.io/step-by-step-building-and-publishing-an-npm-typescript-package-44fe7164964c).

## Contributors

* Olivier Refalo: I am not ready to switch to graphql-ez, adjusted this experiment and made it work with the CDN version of graphql-voyager