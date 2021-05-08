
import {Application, application} from 'express'
import * as express from 'express'
import {NuxtService} from "./services/nuxt";



export class App {

    router: express.Router
    server: Application

    constructor(public port = 2001, public host = '127.0.0.1') {
        this.server = express()
        this.router = express.Router()
        this.server.listen(port, host, () => {
            console.log(`http server fired at ${host};${port}`)
        })
        this.server.use(this.router)
    }

    async registerService(service: NuxtService) {
        if (!service.render) {
            await service.init()
        }
        console.log(`service ${service.config.name} registered for route ${service.config.mountPath}`)
        this.router.use(service.config.mountPath, service.render)
    }

}

