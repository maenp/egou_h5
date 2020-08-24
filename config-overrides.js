//相当于vue中的vue.config.js
const {override, fixBabelImports, addWebpackAlias, addDecoratorsLegacy} = require('customize-cra');
const path = require('path')


/*
* 修改react脚手架的配置有两种方法，
* 一是通过rject暴露出脚手架的配置项进行修改，
* 二是通过安装customize-cra间接进行修改，
* **如果使用了第二种方法，会导致第一种方法暴露出来的配置修改无效
* */
const paths = require('react-scripts/config/paths');//地址文件
const publicUrlOrPath = '//static1.egou.com/p/m_egou/hd/2020/618/'//自定义静态文件路径
// const publicUrlOrPath = './'//
if (process.env.NODE_ENV === 'production') {//生产环境下
    paths.publicUrlOrPath = publicUrlOrPath // 修改打包文件地址
}

// paths.appBuild = path.join(path.dirname(paths.appBuild), 'dist'); // 修改打包目录


module.exports = override(
    //按需加载
    fixBabelImports('import', {
        libraryName: 'antd-mobile',
        libraryDirectory: 'es',
        style: 'css',
    }),
    //配置别名
    addWebpackAlias({
        "@": path.join(__dirname, "./src"),
        "@components": path.join(__dirname, "./src/components"),
        "@api": path.join(__dirname, "./src/api"),
        "@actions": path.join(__dirname, "./src/actions"),
        "@common": path.join(__dirname, "./src/common"),
        "@lib": path.join(__dirname, "./src/lib"),
        "@pages": path.join(__dirname, "./src/pages"),
        "@router": path.join(__dirname, "./src/router"),
        "@store": path.join(__dirname, "./src/store"),
        "@utils": path.join(__dirname, "./src/utils"),
        "@hoc": path.join(__dirname, "./src/hoc"),
    }),
    //配置装饰器的
    addDecoratorsLegacy()
);