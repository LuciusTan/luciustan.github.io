const workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/5.1.3/workbox-sw.js"),workbox.core.setCacheNameDetails({prefix:"L-Zone"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"9363a8eefe9458a6fe9b0865f649e503",url:"./2019/11/20/jq-note-1/index.html"},{revision:"8dbf81f8959a21eba7f4b2caaf0ee9d1",url:"./2019/11/21/jq-note-2/index.html"},{revision:"c4f36f8617db5335fd59ded3044dd721",url:"./2019/11/26/fontend_knowledge1/index.html"},{revision:"524af8eca44b2e08418970dcba9bb702",url:"./2019/11/27/fontend_knowledge2/index.html"},{revision:"340a41bd87884ec4d4d52923ee149245",url:"./2019/12/01/fontend_knowledge3/index.html"},{revision:"cb5a0d82f0b6e0b4e6931e076005fab5",url:"./2020/03/02/koa-note-1/index.html"},{revision:"2782c81e8f291ae75dab10941a08155d",url:"./2020/03/04/frame-note-1/index.html"},{revision:"5169d7756f95b3dae5c6c2c3495d8a4e",url:"./2020/03/04/git-note/index.html"},{revision:"564767677854eb73fdb2306419dcd764",url:"./2020/03/08/vue-note-1/index.html"},{revision:"55c8dff0ab5d085baec246bbb1843a5c",url:"./2020/05/07/image_verification_code/index.html"},{revision:"1540eb66b6df606373a931273a08ee2b",url:"./2020/05/26/dev-environment/index.html"},{revision:"a53e85598cf1315d491ea47e9b9ca4c7",url:"./2020/06/01/NoSQL/index.html"},{revision:"f8277bb0058c1972782eaed86f866bf0",url:"./404.html"},{revision:"2fb05d5060db820d42f8e80cf1454fc2",url:"./archives/2019/11/index.html"},{revision:"38757868fd625f491793c06cdcba64f7",url:"./archives/2019/12/index.html"},{revision:"d84f66bc1aeb75e469d62290ea3a2ff7",url:"./archives/2019/index.html"},{revision:"6af0896efe468f81b39382f94ee8cebe",url:"./archives/2020/03/index.html"},{revision:"c54ce93f084934e6090d30b694652f54",url:"./archives/2020/05/index.html"},{revision:"350889ff3a0abcc08ed4bcc57a9774bc",url:"./archives/2020/06/index.html"},{revision:"7a167ee476f9788bb38bc1d617a48ee0",url:"./archives/2020/index.html"},{revision:"3016a3e7976f287f7458def4d7ba4142",url:"./archives/index.html"},{revision:"6f7abea19259840ac5d589289b7756ae",url:"./archives/page/2/index.html"},{revision:"d5d2500bfe8443b42baaefe4996ee532",url:"./assets/algolia/algoliasearch.js"},{revision:"9c5e51e57e2b1d888950bf4cb5708c49",url:"./assets/algolia/algoliasearch.min.js"},{revision:"ce9b0e62645c036a143f639b92e7789f",url:"./assets/algolia/algoliasearchLite.js"},{revision:"c2d71f042c879659dbc97f8853b62f21",url:"./assets/algolia/algoliasearchLite.min.js"},{revision:"68644a68ea7c9afbe7ca6c3a3164abdf",url:"./categories/index.html"},{revision:"ca4e84eeb99b28c6c8ecc5f5933fe0fa",url:"./categories/学习笔记/index.html"},{revision:"2ca661894c30222d417cbc2736b5aa91",url:"./categories/工具书/index.html"},{revision:"8913a3f59c4d32587d30be6401da54fc",url:"./css/index.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"1d428d8341035c18e3f285e1033f60d6",url:"./index.html"},{revision:"f7efbacdf5c8e57ad57deace1198b010",url:"./js/main.js"},{revision:"533d980c0d50a0d0d7fe34c41a3e2100",url:"./js/search/algolia.js"},{revision:"acb62dcdf7e90930da3f6bf07349fc21",url:"./js/search/local-search.js"},{revision:"b3810513e04b13b2d18c6b779c883f85",url:"./js/tw_cn.js"},{revision:"4cfc631de0e5f6ff12b2833cac848f27",url:"./js/utils.js"},{revision:"26bacf57074f37f6996a1dc84a4ac44a",url:"./link/index.html"},{revision:"5c126a7d2caa14f93148c33410df9ced",url:"./manifest.json"},{revision:"19ea48f9305fb56f6fbea3f7ecf8ad71",url:"./movies/index.html"},{revision:"08e131e699f779a3681f4b9b99db0b8e",url:"./music/index.html"},{revision:"b70562fcee4f7689c837b4e2087d3180",url:"./page/2/index.html"},{revision:"52b6bd8019dbce14d1bb0475e66f6b84",url:"./photos/Gallery1.html"},{revision:"e68e2bb29d2b02108bafe0969afb4d80",url:"./photos/index.html"},{revision:"e2696e712a0c72e3877875b922693dd1",url:"./tags/API开发/index.html"},{revision:"9889b98359eccfb3ece15ede588465f0",url:"./tags/Git/index.html"},{revision:"3eee2279850dfe01159b31aaebd80f27",url:"./tags/Github/index.html"},{revision:"4c0ccdeec19e2533063f9076ed5ac29d",url:"./tags/index.html"},{revision:"3b249dfcc3074ac920b1b1a6e42bf8c2",url:"./tags/jQuery/index.html"},{revision:"052136dd6f7784f54078feaa450ed7da",url:"./tags/Koa/index.html"},{revision:"5e3fc5e9e4a17fc5cd2d5eca927e1876",url:"./tags/MongoDB/index.html"},{revision:"9fece3142b2a14e9804183de768be3dd",url:"./tags/NoSQL/index.html"},{revision:"c07e293ffd6a4fadd842fc77ea7138de",url:"./tags/Redis/index.html"},{revision:"994e2343e18425cb7f599aea2fe61fa0",url:"./tags/VUE/index.html"},{revision:"94968166e94bfa99bd1e8dad5e79e91d",url:"./tags/前端/index.html"},{revision:"5b16f941570cd603ebef98c058a4746d",url:"./tags/开发环境/index.html"},{revision:"90e9507da0afdd94430068cbad521094",url:"./tags/数据库/index.html"},{revision:"dfc42a63e8c548849275de2e0690bc37",url:"./tags/框架/index.html"},{revision:"d39c024eefc393b0766d525f656fc2b9",url:"./tags/表单/index.html"},{revision:"37b1ed893b35c8fe02497d6c96a966e6",url:"./tags/面试题/index.html"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();