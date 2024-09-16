# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## nuxt核心概念

### 自动导入
components
composables hooks
utils
router

### 渲染模式
全局渲染
客户端渲染
混合式渲染

### 工作
**当你访问URL时经历了哪些过程？**

当访问url时，服务器会开启服务端和客户端的渲染；服务端会给浏览器返回完整的html页面；
在返回给html页面时，为了保证服务器的性能，服务端会先把页面render一遍，当然也会运行对应的js代码，给浏览器提供出核心js（core.js）以及完整的html文件；

这个core.js为了保证浏览器加载html之后能正常的相应式；

### 优缺点

**优点**

性能更好；
更好的SEO

**缺点**

开发流程更复杂
对于服务器的压力也会更大；


### 客户端渲染
  和正常的客户端开发无差别；就是用了nuxt框架的便利性；自动导入等；
  渲染过程也是要先下载html，再下载js；然后才能去渲；

### 混合模式

    服务端渲染 + 客户端渲染
    可以通过配置；
    决定哪些页面需要提前渲染； prerender: true
    哪些页面是按需要提前加载的；swr: true
    哪些页面只渲染一次；isr: true
    哪些页面只在客户端渲染；ssr: false
    也可配置api跨域； cors: true
    导航的配置例如重定向等；
```js
export default defineNuxtConfig({
    routeRules: {
        '/': {
            prerender: true
        },
        '/api/**': {
            cors: true
        }
    }
})
```

### 边缘渲染

利用cdn和物理层面给用户提供更近更便捷的访问，而不知直接访问服务器；

借助于nitro引擎；
当执行构建命令，会在 `.output`目录中会生存分发包；在各个平台都能运行；

### Modules
类似插件



