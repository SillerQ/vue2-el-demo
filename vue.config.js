const path = require('path');

function resolve(dir) {
    return path.join(__dirname, './', dir);
}

const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false,

    chainWebpack: (config) => {
        // 先刪除默认的svg配置
        config.module.rules.delete('svg');

        // svg rule loader
        const svgRule = config.module.rule('svg'); // 找到svg-loader
        // svgRule.uses.clear(); // 清除已有的loader, 如果不这样做会添加在此loader之后
        svgRule.exclude.add(/node_modules/); // 正则匹配排除node_modules目录
        svgRule // 添加svg新的loader处理
            .test(/\.svg$/)
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]',
            });

        // 修改images loader 添加svg处理
        const imagesRule = config.module.rule('images');
        imagesRule.exclude.add(resolve('src/assets'));
        config.module
            .rule('images')
            .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/);
    },
});
