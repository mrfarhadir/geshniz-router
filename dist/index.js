"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.geshnizRouter = exports.NuxtService = exports.App = void 0;
const app_1 = require("./app");
Object.defineProperty(exports, "App", { enumerable: true, get: function () { return app_1.App; } });
const nuxt_1 = require("./services/nuxt");
Object.defineProperty(exports, "NuxtService", { enumerable: true, get: function () { return nuxt_1.NuxtService; } });
const geshnizRouter = {
    App: app_1.App,
    NuxtService: nuxt_1.NuxtService
};
exports.geshnizRouter = geshnizRouter;
exports.default = geshnizRouter;
//# sourceMappingURL=index.js.map