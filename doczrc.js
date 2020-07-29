export default {
  files: './src/**/*.{md,markdown,mdx}', // 识别的文件后缀
  dest: 'docs', // 打包出来的文件目录名
  title: 'tubulang-ui', // 站点标题
  typescript: true, // 组件源文件是通过typescript开发，需要打开此选项
  base: '/lang-ui',
}
