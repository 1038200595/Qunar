# qunar

慕课网
Vue2.5 开发去哪儿网App 从零基础入门到实战项目
Tuesday,February 25,2020
>  

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

cnpm i stylus --save
cnpm i stylus-loader --save

gitub: vue-awesome-swiper   
使用轮播插件：cnpm install vue-awesome-swiper@2.6.7 --save

git add .
git commit -m 'add swiper-icons'
git push
git checkout master
git merge origin/feature/release

远端拉取最新代码分支（一般为master），然后由远端检出master分支到本地，
本地new branch，然后将新分支推送到远端下到该分支，这样就在远端创建出了一个最新的分支

然后继续在远端的master分支拉取新分支

cnpm i axios --save
在本地/static/mock目录下新建index.json模拟数据，
在config文件下的index.js文件添加：
    proxyTable: {
      '/api':{
        target:'http://localhost:8080',
        pathRewrite:{
          '^/api':'/static/mock'
        }
      }
    },
将请求的api地址转发到本地的/static/mock目录下，然后重新运行npm run start