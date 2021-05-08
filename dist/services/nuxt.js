"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NuxtService = void 0;
const service_1 = require("../decorators/service");
const { loadNuxt, build, Builder, loadNuxtConfig } = require('nuxt');
let NuxtService = class NuxtService {
    constructor(config) {
        this.config = config;
        this.config = Object.assign({ env: 'dev' }, config);
    }
    async init() {
        if (this.config.env === 'dev') {
            await this.development();
        }
        if (this.config.env === 'start') {
            await this.production();
        }
    }
    async production() {
        console.log('production');
        let config = require(this.config.rootPath + '/nuxt.config.js');
        config.dev = false;
        config.env = {};
        //process.env.DEBUG = 'nuxt:*';
        let nuxt = await loadNuxtConfig(config);
        nuxt = this.addEssentialConfigs(nuxt);
        const builder = new Builder(nuxt);
        await builder.build().catch(error => {
            console.error(error);
            process.exit(1);
        });
        this.render = nuxt.render;
        return this.render;
    }
    async development() {
        let nuxt = await loadNuxt({
            for: this.config.env,
            rootDir: this.config.rootPath
        });
        nuxt = this.addEssentialConfigs(nuxt);
        if (this.config.env === 'dev') {
            await build(nuxt);
        }
        this.render = nuxt.render;
        return this.render;
    }
    addEssentialConfigs(nuxt) {
        nuxt.options.router.base = this.config.mountPath + '/';
        nuxt.options.app.basePath = this.config.mountPath + '/';
        nuxt.options.app.assetsPath = this.config.mountPath + '/_nuxt/';
        return nuxt;
    }
};
NuxtService = __decorate([
    service_1.Service
], NuxtService);
exports.NuxtService = NuxtService;
//# sourceMappingURL=nuxt.js.map