export type GraphQLVoyagerRenderOptions = {
  baseUrl?: string
  endpointUrl?: string
  displayOptions?: any
}

export default function renderVoyagerPage({
  endpointUrl,
  displayOptions,
}: GraphQLVoyagerRenderOptions) {
  const html = String.raw
  return html`
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="user-scalable=no, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, minimal-ui"
        />
        <title>GraphQL Voyager</title>
        <style>
          body {
            padding: 0;
            margin: 0;
            width: 100vw;
            height: 100vh;
            overflow: hidden;
          }
          #voyager {
            height: 100vh;
          }
        </style>

        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/graphql-voyager/dist/voyager.css"
        />
      </head>
      <body>
        <main id="voyager">
          <h1>Loading...</h1>
        </main>
        <script>
          window.addEventListener('load', function (event) {
            function introspectionProvider(introspectionQuery) {
              return fetch('${endpointUrl}', {
                method: 'post',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ query: introspectionQuery }),
                credentials: 'include',
              })
                .then(function (response) {
                  return response.text()
                })
                .then(function (responseBody) {
                  try {
                    return JSON.parse(responseBody)
                  } catch (error) {
                    return responseBody
                  }
                })
            }
            GraphQLVoyager.init(document.getElementById('voyager'), {
              introspection: introspectionProvider,
              displayOptions: ${JSON.stringify(displayOptions)},
            })
          })
        </script>
        <script src="https://cdn.jsdelivr.net/fetch/2.0.1/fetch.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/react@16/umd/react.production.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/react-dom@16/umd/react-dom.production.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/graphql-voyager/dist/voyager.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/graphql-voyager/dist/voyager.min.js"></script>
      </body>
    </html>
  `
}