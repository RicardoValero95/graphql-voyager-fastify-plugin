"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderVoyagerPage = void 0;
var version = '1.0.0-rc.31';
function renderVoyagerPage(options) {
    var endpoint = options.endpoint, _a = options.headers, headers = _a === void 0 ? '{}' : _a, displayOptions = options.displayOptions, credentials = options.credentials;
    var headersString = headers
        ? typeof headers === 'object'
            ? JSON.stringify(headers)
            : typeof headers === 'string'
                ? headers
                : '{}'
        : '{}';
    return "\n  <!DOCTYPE html>\n  <html>\n  <head>\n    <meta charset=utf-8 />\n    <meta name=\"viewport\" content=\"user-scalable=no, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0\">\n    <title>GraphQL Voyager</title>\n    <style>\n      body {\n        padding: 0;\n        margin: 0;\n        width: 100%;\n        height: 100vh;\n        overflow: hidden;\n      }\n      #voyager {\n        height: 100vh;\n      }\n    </style>\n    <link rel=\"stylesheet\"\n      href=\"https://cdn.jsdelivr.net/npm/graphql-voyager@" + version + "/dist/voyager.css\"\n    />\n    <link rel=\"shortcut icon\" href=\"https://i.imgur.com/SEC809s.png\" />\n    <script src=\"https://cdn.jsdelivr.net/fetch/2.0.1/fetch.min.js\"></script>\n    <script src=\"https://cdn.jsdelivr.net/npm/react@16/umd/react.production.min.js\"></script>\n    <script src=\"https://cdn.jsdelivr.net/npm/react-dom@16/umd/react-dom.production.min.js\"></script>\n    <script src=\"https://cdn.jsdelivr.net/npm/graphql-voyager@" + version + "/dist/voyager.min.js\"></script>\n  </head>\n  <body>\n    <main id=\"voyager\">\n      <h1 style=\"text-align: center; color: #5d7e86;\"> Loading... </h1>\n    </main>\n    <script>\nwindow.addEventListener('load', function(event) {\n  function introspectionProvider(introspectionQuery) {\n    return fetch('" + endpoint + "', {\n      method: 'post',\n      headers: Object.assign({}, {\n        'Accept': 'application/json',\n        'Content-Type': 'application/json',\n      }, " + headersString + "),\n      body: JSON.stringify({query: introspectionQuery})," + (credentials ? "\n      credentials: \"" + credentials + "\"," : '') + "\n    }).then(function (response) {\n      return response.text();\n    }).then(function (responseBody) {\n      try {\n        return JSON.parse(responseBody);\n      } catch (error) {\n        return responseBody;\n      }\n    });\n  }\n\n  GraphQLVoyager.init(document.getElementById('voyager'), {\n    introspection: introspectionProvider,\n    displayOptions: " + JSON.stringify(displayOptions) + ",\n  })\n})\n    </script>\n  </body>\n  </html>\n  ";
}
exports.renderVoyagerPage = renderVoyagerPage;
