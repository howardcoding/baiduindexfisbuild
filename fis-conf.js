// js压缩：使用fis-optimizer-uglify-js 插件
fis.match('*.js', {
  optimizer: fis.plugin('uglify-js')
});
// CSS压缩：使用fis-optimizer-clean-css 插件
fis.match('*.css', {
  optimizer: fis.plugin('clean-css')
});
// 合并打包需加
fis.match('::package', {
  postpackager: fis.plugin('loader')
});

// //css打包配置
// fis.match('*.css', {
//   packTo: '/static/aio.css'
// });

// //js打包配置
// fis.match('*.js', {
//   packTo: '/static/aio.js'
// });

// // 图片合并
// 启用 fis-spriter-csssprites 插件
fis.match('::package', {
  spriter: fis.plugin('csssprites')
})

// 对 CSS 进行图片合并
fis.match('*.css', {
  // 给匹配到的文件分配属性 `useSprite`
  useSprite: true
});
// fis.match('::packager', {
//     spriter : fis.plugin('csssprites')
// });
 
// fis.match('*.css', {
//     useSprite : true,
//     optimizer : fis.plugin('clean-css')
// });
 
// fis.match('*.png', {
//     optimizer : fis.plugin('png-compressor')
// });
// 添加md5戳：对图片引用 URL 添加 md5 戳：
fis.match('*.{js,css,png,jpg,jpeg}', {
  useHash: true
});