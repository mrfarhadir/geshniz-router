"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const express = require("express");
class App {
    constructor(port = 2001) {
        this.port = port;
        this.server = express();
        this.router = express.Router();
        this.server.listen(port);
        this.server.use(this.router);
    }
    async registerService(service) {
        if (!service.render) {
            await service.init();
        }
        this.router.use(service.config.mountPath, service.render);
    }
}
exports.App = App;
//# sourceMappingURL=app.js.map