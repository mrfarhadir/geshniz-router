import {Service} from "../decorators/service";
const { loadNuxt, build } = require('nuxt')

@Service
export class NuxtService {
    render
    constructor(public config: ServiceConfig) {
        this.config = Object.assign({ env: 'dev' }, config)
    }

    async init() {
        let nuxt = await loadNuxt({
            for: this.config.env,
            rootDir: this.config.rootPath
        })
        nuxt = this.addEssentialConfigs(nuxt)
        await build(nuxt)
        this.render = nuxt.render
        return this.render
    }

    addEssentialConfigs(nuxt) {
        nuxt.options.router.base = this.config.mountPath + '/'
        nuxt.options.app.basePath = this.config.mountPath + '/'
        nuxt.options.app.assetsPath = this.config.mountPath + '/_nuxt/'
        return nuxt
    }
}
