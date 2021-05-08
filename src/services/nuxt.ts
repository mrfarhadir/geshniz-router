import {Service} from "../decorators/service";
const { loadNuxt, build, Builder, Nuxt } = require('nuxt')

@Service
export class NuxtService {
    render
    constructor(public config: ServiceConfig) {
        this.config = Object.assign({ env: 'dev' }, config)
    }

    async init() {
        if (this.config.env === 'dev') {
            await this.development()
        }

        if (this.config.env === 'start') {
            await this.production()
        }
    }

    async production() {
        let nuxt = new Nuxt({
            rootDir: this.config.rootPath,
            dev: false
        })

        nuxt = this.addEssentialConfigs(nuxt)
        const builder = new Builder(nuxt);

        await builder.build().catch(error => {
            console.error(error);
        });
        this.render = nuxt.render
    }

    async development() {
        let nuxt = await loadNuxt({
            for: this.config.env,
            rootDir: this.config.rootPath
        })
        nuxt = this.addEssentialConfigs(nuxt)

        await build(nuxt)

        this.render = nuxt.render
    }

    addEssentialConfigs(nuxt) {
        if (this.config.env === 'dev') {
            nuxt.options.router.base = this.config.mountPath + '/'
        }
        nuxt.options.app.basePath = this.config.mountPath + '/'
        nuxt.options.app.assetsPath = this.config.mountPath + '/_nuxt/'
        return nuxt
    }
}
