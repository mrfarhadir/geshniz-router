import { Application, Router } from "express"
import {App, NuxtService as NuxtServiceClass } from "./src"



type NuxtService = {
    constructor(config: ServiceConfig)
}

interface GeshnizRouter {
    App
    NuxtService
}

export default App
