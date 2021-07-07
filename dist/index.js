"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var fastify_plugin_1 = require("fastify-plugin");
var fastify_static_1 = require("fastify-static");
var graphql_voyager_1 = require("./graphql-voyager");
var graphqlVoyagerFasitfyPlugin = function (fastify, _a, done) {
    if (_a === void 0) { _a = {}; }
    var _b = _a.path, path = _b === void 0 ? '/voyager' : _b, _c = _a.baseUrl, baseUrl = _c === void 0 ? '/voyager/' : _c, _d = _a.endpointUrl, endpointUrl = _d === void 0 ? '/graphql' : _d, renderOptions = __rest(_a, ["path", "baseUrl", "endpointUrl"]);
    fastify.register(fastify_static_1.default, {
        //TODO
        root: '/dist',
        prefix: baseUrl,
    });
    var voyagerPage = graphql_voyager_1.default(__assign({ baseUrl: baseUrl, endpointUrl: endpointUrl }, renderOptions));
    fastify.get(path, function (_req, res) {
        res.type('text/html').send(voyagerPage);
    });
    done();
};
exports.default = fastify_plugin_1.default(graphqlVoyagerFasitfyPlugin, {
    fastify: '>= 3.x',
    name: 'graphql-voyager-fastify-plugin',
});
