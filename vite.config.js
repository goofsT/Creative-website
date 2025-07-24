import { defineConfig, splitVendorChunkPlugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import UnoCSS from 'unocss/vite'
import viteCompression from 'vite-plugin-compression'
import viteImagemin from 'vite-plugin-imagemin'
import { visualizer } from 'rollup-plugin-visualizer'
import legacy from '@vitejs/plugin-legacy'
import { createHtmlPlugin } from 'vite-plugin-html'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    UnoCSS(),
    // 自动拆分Vendor包
    splitVendorChunkPlugin(),
    // HTML压缩插件
    createHtmlPlugin({
      minify: {
        collapseWhitespace: true,
        keepClosingSlash: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
        minifyCSS: true,
        minifyJS: true
      },
      // 注入变量到HTML模板
      inject: {
        data: {
          title: '茶叶网站',
          injectScript: `<script src="./inject.js"></script>`,
        }
      }
    }),
    // GZIP / BROTLI 压缩
    viteCompression({
      verbose: false,
      algorithm: 'gzip', // 或 'brotliCompress'
      ext: '.gz',
      threshold: 10240, // 只压缩大于 10kb 的文件
    }),
    viteCompression({
      verbose: false,
      algorithm: 'brotliCompress',
      ext: '.br',
      threshold: 10240,
    }),
    // 图片压缩
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      mozjpeg: {
        quality: 80,
      },
      pngquant: {
        quality: [0.7, 0.8],
        speed: 4,
      },
      webp: {
        quality: 75,
      },
      svgo: {
        plugins: [
          {
            name: 'removeViewBox',
          },
          {
            name: 'removeEmptyAttrs',
            active: false,
          },
        ],
      },
    }),
    // 兼容旧版浏览器
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
    // 打包分析
    visualizer({
      filename: './dist/stats.html',
      open: false,
      gzipSize: true,
      brotliSize: true,
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    allowedHosts: ['selenium-rich-tea.com']
  },
  build: {
    // 设置输出目录
    outDir: 'dist',
    // 启用 source map
    sourcemap: false,
    // 打包后文件名格式化
    rollupOptions: {
      output: {
        // 使用更加稳定的代码分割策略
        manualChunks: {
          'vue-vendor': ['vue', 'vue-router'],
          'gsap-vendor': ['gsap'],
          'common-utils': [] // 可根据需要添加公共工具库
        },
        // 自定义CSS文件输出
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          let extType = info[info.length - 1];
          if (/\.(png|jpe?g|gif|svg|webp|ico)(\?.*)?$/.test(assetInfo.name)) {
            extType = 'img';
          } else if (/\.(woff2?|eot|ttf|otf)(\?.*)?$/.test(assetInfo.name)) {
            extType = 'fonts';
          } else if (/\.css$/.test(assetInfo.name)) {
            extType = 'css';
          }
          return `assets/${extType}/[name]-[hash][extname]`;
        },
        // JS文件输出格式
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      },
    },
    // 设置chunk大小警告阈值
    chunkSizeWarningLimit: 1000,
    // CSS代码分割
    cssCodeSplit: true,
    // 压缩代码
    minify: 'terser',
    // Terser配置
    terserOptions: {
      compress: {
        drop_console: true,  // 生产环境去除console
        drop_debugger: true, // 生产环境去除debugger
        pure_funcs: ['console.log'] // 去除console.log
      }
    },
    // 设置静态资源内联阈值
    assetsInlineLimit: 4096,
    // CSS压缩选项
    cssMinify: 'lightningcss',
  },
  // 预加载主要模块
  optimizeDeps: {
    include: ['vue', 'vue-router', 'gsap'],
    exclude: []
  }
}) 