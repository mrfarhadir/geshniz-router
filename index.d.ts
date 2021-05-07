import { Application, Router } from "express"
import { NuxtService as NuxtServiceClass } from "./src"

type App = {
    router: Router
    server: Application

    constructor(port: number)

    registerService(service: NuxtServiceClass): void
}

type NuxtService = {
    constructor(config: ServiceConfig)
}

interface GeshnizRouter {
    App
    NuxtService: NuxtServiceClass
}

declare const geshnizRouter: GeshnizRouter

export default geshnizRouter
