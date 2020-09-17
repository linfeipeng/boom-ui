module.exports = {
    publicPath: '/',
    outputDir: 'dist',
    assetsDir: 'assets',
    indexPath: 'index.html',
    filenameHashing: true,
    lintOnSave: process.env.NODE_ENV !== 'production',
    runtimeCompiler: false,
    transpileDependencies: [],
    productionSourceMap: false,
    integrity: false,
    configureWebpack: () => { },
    chainWebpack: () => { },
    css: {
        requireModuleExtension: true,
        extract: process.env.NODE_ENV === 'production',
        sourceMap: false,
        loaderOptions: {}
    },
    devServer: {
        proxy: {
            '/api': {
                target: '<url>',
                ws: true,
                changeOrigin: true
            },
            '/foo': {
                target: '<other_url>'
            }
        }
    },
    pluginOptions: {}
}