
import {Application, application} from 'express'
import * as express from 'express'
import {NuxtService} from "./services/nuxt";



export class App {

    router: express.Router
    server: Application

    constructor(public port = 2001) {
        this.server = express()
        this.router = express.Router()

        this.server.listen(port)
        this.server.use(this.router)
    }

    async registerService(service: NuxtService) {
        if (!service.render) {
            await service.init()
        }
        this.router.use(service.config.mountPath, service.render)
    }

}

