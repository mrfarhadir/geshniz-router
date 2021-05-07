import { Application, Router } from "express"
import { NuxtService as NuxtServiceClass } from "./src"

declare abstract class App {
    router: Router
    server: Application

    constructor(port: number)

    registerService(service: NuxtServiceClass): void
}

declare abstract class NuxtService {
    constructor(config: ServiceConfig)
}

interface GeshnizRouter {
    App: App
    NuxtService: NuxtService
}

declare const geshnizRouter: GeshnizRouter

export default geshnizRouter
