import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()], // 配置需要使用的插件列表
  base: "./", // 在生产中服务时的基本公共路径
  publicDir: "public",  // 静态资源服务的文件夹, 默认"public"
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)) // 这里是将src目录配置别名为 @ 方便在项目中导入src目录下的文件
    }
  },

  // 本地运行配置
  server: {
    host: "0.0.0.0", // 指定服务器主机名  0.0.0.0 可以看见network 通过ip访问
    port: 3000, // 指定服务器端口
    open: true, // 在服务器启动时自动在浏览器中打开应用程序
    strictPort: false, // 设置为false时,若端口被占用会尝试下一个可用端口, 而不是直接退出
    https: false, // 是否开启 https
    cors: true, // 为开发服务器配置 CORS, 默认启用并允许任何源
    proxy: { // 为开发服务器配置自定义代理规则
      '/api': {
        target: "http://192.168.xxx.xxx:xxxx", // 代理接口
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      }
    }
  },

  //打包配置
  build: {
    target: "modules", // 设置最终构建的浏览器兼容目标。modules:支持原生 ES 模块的浏览器
    outDir: "dist", // 指定输出路径
    assetsDir: "assets", // 指定生成静态资源的存放路径
    assetsInlineLimit: "4096", // 小于此阈值的导入或引用资源将内联为base64编码，设置为0可禁用此项。默认4096（4kb）
    cssCodeSplit: true, // 启用/禁用CSS代码拆分，如果禁用，整个项目的所有CSS将被提取到一个CSS文件中,默认true
    sourcemap: false, // 构建后是否生成 source map 文件
    minify: "terser", // 混淆器，terser构建后文件体积更小
    write: true, // 设置为 false 来禁用将构建后的文件写入磁盘
    emptyOutDir: true,  // 默认情况下，若 outDir 在 root 目录下，则 Vite 会在构建时清空该目录。
    chunkSizeWarningLimit: 500,  // chunk 大小警告的限制
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      }
    }, //去除 console debugger
  },
})