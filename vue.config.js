
const path = require("path")

const utils = {
  assetsPath (_path) {
    const assetsSubDirectory = process.env.NODE_ENV === 'production'
      // 生产环境下的 static 路径
      ? 'static'
      // 开发环境下的 static 路径
      : 'static'
    return path.posix.join(assetsSubDirectory, _path)
  },
  resolve (dir) {
    return path.join(__dirname, '..', dir)
  },
}

module.exports = {
  devServer: {
    // 设置代理
    proxy: {
      "/agents": {
        target: "http://127.0.0.1:3001/", // 域名
        ws: true, // 是否启用websockets
        changOrigin: true, //开启代理
        pathRequiresRewrite: {},
      },
    },
  },
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false,
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.(woff2?|eot|ttf|otf)(\?.*)$/,
          loader: 'url-loader',
          options: {
            name: utils.assetsPath('fonts/[name].[hash:7].[ext]'),
          },
        },
      ],
    },
  },
  chainWebpack: config => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule.use('vue-svg-loader').loader('vue-svg-loader')
  },
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/assets/styles/variable.scss";
        `,
      },
    },
  },
}