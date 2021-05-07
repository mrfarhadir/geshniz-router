import { Application, Router } from "express"
import { NuxtService as NuxtServiceClass } from "./src"

interface App {
    router: Router
    server: Application

    constructor(port: number)

    registerService(service: NuxtServiceClass): void
}

interface NuxtService {
    constructor(config: ServiceConfig)
}

type GeshnizRouter = {
    App
    NuxtService
}

declare const geshnizRouter: GeshnizRouter

export default geshnizRouter
