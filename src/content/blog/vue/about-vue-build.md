---
title: 'Vue Webpack Template 의 빌드 파헤치기'
date: 2018-07-09 09:08:13
category: 'vue'
---

vue의 `webpack` 보일러플레이트의 빌드를 알아보기위해 작성하였습니다.  
틀린 부분도 많을것이지만 차차 알아가며 수정을 하도록 하겠습니다.

먼저, test 는 포함하지 않았습니다.




## 폴더 구조
vue 의 빌드과정을 알아보기위해 `build` 와 `config` 폴더를 세부적으로 알아보도록 하겠습니다.
```
.
├── build/                      # webpack config files
│   ├── build.js                 
│   ├── check-versions.js
│   ├── utils.js
│   ├── vue-loader.config.js
│   ├── webpack.base.config.js
│   ├── webpack.dev.config.js
│   └── webpack.prod.config.js
├── config/
│   ├── index.js                # main project config
│   ├── dev.env.js
│   └── prod.env.js
├── src/
│   ├── main.js                 # app entry file
│   ├── App.vue                 # main app component
│   ├── components/             # ui components
│   │   └── ...
│   └── assets/                 # module assets (processed by webpack)
│       └── ...
└── static/                     # pure static assets (directly copied)
```


## 빌드

### node build/build.js
먼저 build.js 를 통해 빌드를 시작합니다.

### build.js
각 모듈들의 버젼을 체크한 후에 설정에 맞게 모듈 번들링 시작

```javascript
// check-versions를 실행시켜 각 모듈들이 버젼에 맞는지 체크합니다.
require('./check-versions')()

// 환경변수를 production 으로 설정
process.env.NODE_ENV = 'production'

// ora 라는 모듈은 terminal 에서 로딩중.. 이라는 모양을 나타내주는 모듈.
const ora = require('ora')
// UNIX 명령어중 rm -rf 라는 명령어 for node, 파일삭제
const rm = require('rimraf')
// 파일 및 디렉토리 경로로 작업 할 수 있는 유틸리티를 제공
const path = require('path')
// 터미널의 문자열을 꾸며주는 모듈
const chalk = require('chalk')
// 모듈 번들러
const webpack = require('webpack')
// config 는 dev 와 build 를 나누어 각자의 환경에대해 속성을 설정
const config = require('../config')
// 배포에 대한 환경설정을 저장
const webpackConfig = require('./webpack.prod.conf')

// build 시에 문구와 함께 로딩 아이콘 돌아감
const spinner = ora('building for production...')
spinner.start()

// 해당 경로의 파일을 삭제
rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
  if (err) throw err
  // 삭제가 되었다면 모듈번들링 시작
  webpack(webpackConfig, (err, stats) => {
    ... 생략
  })
})
```

### check-versions.js
각 모듈들이 프로젝트에 대해 버젼이 유효한지 검사.  
맞지않는 버젼이있다면 해당 버젼을 업데이트하라고 안내하고 프로그램 종료.

### utils.js
* `assetsPath`  
환경변수에 따라 assets 의 경로를 지정

* `styleLoaders` `cssLoaders`  
로더들을 파싱

* `createNotifierCallback`  
에러메세지를 알람으로 만들어줌


### vue-loader.config.js
vue-loader 에 대한 설정을 별도의 파일로 분리
### webpack.base.config.js
배포모드 개발모드 상관없이 공통적으로 적용되는 설정을 해당 js 에서 설정  
기존에 webpack.config.js 로 묶어서 했다면 여기서 prod 와 dev로 분기
```
    base
   /    \
  /      \
 /        \
prod      dev
```
### webpack.dev.config.js
개발모드일때만 적용되는 설정들을 여기서 설정.  
`webpack-merge`를 통해 webpack.base.config.js 와 묶어준다.
### webpack.prod.config.js
배포모드일때만 적용되는 설정들을 여기서 설정.  
`webpack-merge`를 통해 webpack.base.config.js 와 묶어준다.

## 모듈정리

* #### [`path`](https://nodejs.org/api/path.html#path_path)
파일 및 디렉토리 경로로 작업 할 수 있는 유틸리티를 제공

* #### [`ora`](https://github.com/sindresorhus/ora)
터미널을 꾸며줌  
![이미지](https://github.com/sindresorhus/ora/raw/master/screenshot.svg?sanitize=true)  

* #### [`rimraf`](https://github.com/isaacs/rimraf)
노드를위한 [유닉스 명령어](https://en.wikipedia.org/wiki/Rm_(Unix)의 `rm -rf`이며 하위디렉토리의 파일들까지 모두 삭제

* #### [`chalk`](https://github.com/chalk/chalk)
터미널의 문자열들에대해 꾸며줌

* #### [`webpack`](https://github.com/webpack/webpack)
모듈 번들러

* #### [`semver`](https://www.npmjs.com/package/semver)
버젼명을 다루는 모듈, [참고](https://github.com/Lanace/lanace.github.io/wiki/Semver-%EB%9E%80%3F)

* #### [`shelljs`](https://www.npmjs.com/package/shelljs)
Node 위에 Unix 쉘 명령을 이식할 수 있는 모듈  

* #### [`node-notifier`](https://github.com/mikaelbr/node-notifier)
Node 를 이용해 시스템알람을 만들어주는 모듈

* #### [`autoprefixer`](https://github.com/postcss/autoprefixer)
-webkit-, -ms- 등의 prefix 없이 css 스타일 지정을 도와주는 모듈

* #### [`babel-helper-vue-jsx-merge-props`](https://github.com/vuejs/babel-helper-vue-jsx-merge-props/blob/master/index.js)
jsx 의 props 들을 merge 해주는 모듈

* #### [`babel-plugin-syntax-jsx`](https://www.npmjs.com/package/babel-plugin-syntax-jsx)
jsx 문법을 사용가능하게 해줌


* #### [`babel-plugin-transform-runtime `](https://babeljs.io/docs/en/babel-plugin-transform-runtime.html)
babel 기반에서 polyfill 을 추가하는 모듈

* #### [`babel-plugin-transform-vue-jsx`](https://github.com/vuejs/babel-plugin-transform-vue-jsx)
vue 의 jsx 문법을 babel 로 전환해주는 모듈

* #### [`copy-webpack-plugin`](https://github.com/webpack-contrib/copy-webpack-plugin)
파일이나 폴더를 build 폴더로 복사해주는 모듈

* #### [`eslint-friendly-formatter`](https://github.com/royriojas/eslint-friendly-formatter)
SublimeText, iTerm2의 클릭하여 파일열기 기능에대해 익숙한 eslint 제공

* #### [`eslint-plugin-vue`](https://github.com/vuejs/eslint-plugin-vue)
vuejs 의 코딩규칙을 정의해주는 모듈

* #### [`extract-text-webpack-plugin`](https://www.npmjs.com/package/extract-text-webpack-plugin)
번들이나 번들의 텍스트를 별도의 파일로 추출해주는 모듈

* #### [`friendly-errors-webpack-plugin`](https://github.com/geowarin/friendly-errors-webpack-plugin)
웹팩 오류를 알아내고 정리하고, 모아서 우선순위를 지정해주는 모듈

* #### [`optimize-css-assets-webpack-plugin`](https://www.npmjs.com/package/optimize-css-assets-webpack-plugin)
css 의 assets 들을 최적화해주는 모듈

* #### [`portfinder`](https://www.npmjs.com/package/portfinder)
빈 포트를 찾아주는 모듈

* #### [`postcss-import`](https://github.com/postcss/postcss-import)
`@import` 내용을 인라인화 해주는 모듈

* #### [`postcss-url`](https://www.npmjs.com/package/postcss-url)
`url()` 에서 rebase 합니다. inline 또는 copy할 수 있습니다.

* #### [`vue-style-loader`](https://github.com/vuejs/vue-style-loader)
`style-loader` 기반으로 만들어진 모듈이며 비슷한 동작을 css 를 문서에 스타일태그로 동적으로 넣는 모듈


 * #### [`vue-template-compiler`](https://www.npmjs.com/package/vue-template-compiler)
 vue template 을 컴파일해주는 모듈이며 기본적으로 생성된다.

 * #### [`webpack-bundle-analyzer`](https://www.npmjs.com/package/webpack-bundle-analyzer)
모든 번들의 내용에 대해 파일의 크기를 시각화 해주는 모듈

## 참고문서
* [vuejs-templates DOC](https://vuejs-templates.github.io/webpack/)
