# webpack-simple

> A simple Vue 2.0 Webpack & `vue-loader` setup for quick prototyping. Note this template is not suitable for production - for that you may want to use the [full webpack template](https://github.com/vuejs-templates/webpack).

> This template is Vue 2.0 compatible. For Vue 1.x use this command: `vue init webpack-simple#1.0 my-project`

### Usage

This is a project template for [vue-cli](https://github.com/vuejs/vue-cli).

``` bash
$ npm install -g vue-cli
$ vue init Zhiketong/webpack-simple my-project
$ cd my-project
$ npm install
$ npm run dev
```

### What's Included

- `npm run dev`: Webpack + `vue-loader` with proper config for source maps & hot-reload.

- `npm run build`: build with HTML/CSS/JS minification.

- `npm version major|minor|patch`: build  and publish package

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader). Also check out the [breaking changes in vue-loader@9.0.0](https://github.com/vuejs/vue-loader/releases/tag/v9.0.0).

### Fork It And Make Your Own

You can fork this repo to create your own boilerplate, and use it with `vue-cli`:

``` bash
vue init username/repo my-project
```

### 自动生成组件模板脚本

#### 生成页面组件

``` bash
npm run new:view

请输入要生成的页面组件名称，会生成在views/目录下

directory/.../view.vue
正在生成目录...
正在生成vue文件 view
生成成功
exit
```

##### 生成公共组件

``` bash
npm run new:com

请输入要生成的页面组件名称，会生成在components/目录下

directory/.../component.vue
正在生成目录...
正在生成vue文件 component
生成成功
exit
```