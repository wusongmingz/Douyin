const { defineConfig } = require('@vue/cli-service');
const AutoImport = require('unplugin-auto-import/webpack');

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      AutoImport({
        imports: ['vue'],
        dts: 'src/auto-imports.d.ts', // 可选，生成类型声明文件
      }),
    ],
  },
});
