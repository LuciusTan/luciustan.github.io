const workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/5.1.3/workbox-sw.js"),workbox.core.setCacheNameDetails({prefix:"L-Zone"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"d0beb0f283e1917d94fa5e16615f850c",url:"./2019/11/20/jq-note-1/index.html"},{revision:"4b0af05cce92f4abee1bb4e023a2d4bc",url:"./2019/11/21/jq-note-2/index.html"},{revision:"bed49597a79ba1ee485b815306617669",url:"./2019/11/26/fontend_knowledge1/index.html"},{revision:"5785283116be677094bd85e0d6868c9b",url:"./2019/11/27/fontend_knowledge2/index.html"},{revision:"48f20796f021e562a6014d16469571b0",url:"./2019/12/01/fontend_knowledge3/index.html"},{revision:"504687247dd65aa10ea616e1edcb572d",url:"./2020/03/02/koa-note-1/index.html"},{revision:"ca55cdb034214e4d6d80ef4b394a98bd",url:"./2020/03/04/frame-note-1/index.html"},{revision:"63eec2105f20da5bbcaf8ec49582a90a",url:"./2020/03/04/git-note/index.html"},{revision:"90895134a87294499458a0c47fc143ab",url:"./2020/03/08/vue-note-1/index.html"},{revision:"1a5fc8809109c8195391a604cbbc8d2f",url:"./2020/05/07/image_verification_code/index.html"},{revision:"6106228e3e4b616efe7184a878eb564f",url:"./2020/05/15/doclever/index.html"},{revision:"d1258bd41be8f02400ddfabc221076a0",url:"./2020/05/26/dev-environment/index.html"},{revision:"710a0b6f1f1a0517be9a610447b7d938",url:"./2020/06/01/NoSQL/index.html"},{revision:"00283dbdd5fb243703d7bb0ac58060e0",url:"./2021/07/26/unraid_system/index.html"},{revision:"cc01d6a2592d54d471301601c5816492",url:"./2021/10/26/jira/index.html"},{revision:"048b9c01bb89b29b847e006a0587f2c7",url:"./2021/10/26/unraid_java/index.html"},{revision:"ab8584999d3cc56afbada4a3601e6590",url:"./404.html"},{revision:"2fcf41285aa66353e3db24394fa2a8c5",url:"./archives/2019/11/index.html"},{revision:"8c0fee1b9df9e9f8e4ccaffc317d4144",url:"./archives/2019/12/index.html"},{revision:"1b93409ecc97bf80e540a3327cbca359",url:"./archives/2019/index.html"},{revision:"b09f3c4b4a7d2514d19c166866104f00",url:"./archives/2020/03/index.html"},{revision:"e69e726f7d710e9e6a4319f10fb5ba1c",url:"./archives/2020/05/index.html"},{revision:"91103928e88e62f1c87e135efc2be627",url:"./archives/2020/06/index.html"},{revision:"5dce99586b932a357f8b9765fced5928",url:"./archives/2020/index.html"},{revision:"da5b3977e5fbe0c3eb1d0927b2b7e3a1",url:"./archives/2021/07/index.html"},{revision:"0fef4dbde5c2be3dbbfab6187f9ff1cf",url:"./archives/2021/10/index.html"},{revision:"3fb7b083a8de5d31c8bc2871d94b2302",url:"./archives/2021/index.html"},{revision:"a29727a981b1922ac8890d8c926fbb11",url:"./archives/index.html"},{revision:"079619b5623ad1e267eabe0c01a4afd5",url:"./archives/page/2/index.html"},{revision:"d5d2500bfe8443b42baaefe4996ee532",url:"./assets/algolia/algoliasearch.js"},{revision:"9c5e51e57e2b1d888950bf4cb5708c49",url:"./assets/algolia/algoliasearch.min.js"},{revision:"ce9b0e62645c036a143f639b92e7789f",url:"./assets/algolia/algoliasearchLite.js"},{revision:"c2d71f042c879659dbc97f8853b62f21",url:"./assets/algolia/algoliasearchLite.min.js"},{revision:"69de610396c6d12de2f407388826ac8d",url:"./categories/index.html"},{revision:"b604eb5e64b9df1a4111cfe65e80d3d3",url:"./categories/学习笔记/index.html"},{revision:"8e275ea861626d64c15851ff628dc666",url:"./categories/工具书/index.html"},{revision:"de2ea00451fff24717b95139ce8a3743",url:"./categories/教程/index.html"},{revision:"8913a3f59c4d32587d30be6401da54fc",url:"./css/index.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"1122249212f1f66c58af595a8b3b3c7a",url:"./index.html"},{revision:"f7efbacdf5c8e57ad57deace1198b010",url:"./js/main.js"},{revision:"533d980c0d50a0d0d7fe34c41a3e2100",url:"./js/search/algolia.js"},{revision:"acb62dcdf7e90930da3f6bf07349fc21",url:"./js/search/local-search.js"},{revision:"b3810513e04b13b2d18c6b779c883f85",url:"./js/tw_cn.js"},{revision:"4cfc631de0e5f6ff12b2833cac848f27",url:"./js/utils.js"},{revision:"d9e8d6c3c282d4ca5c763a7e3b9d9b9c",url:"./link/index.html"},{revision:"5c126a7d2caa14f93148c33410df9ced",url:"./manifest.json"},{revision:"390641eac1c7eb7b92f355e088309def",url:"./movies/index.html"},{revision:"4d92087c7fc0ac934afbb75530064657",url:"./music/index.html"},{revision:"bcc56cc0817f1f027b7bd57f86126561",url:"./page/2/index.html"},{revision:"96c21ee25b31c2502687ec828c5eea1f",url:"./photos/Gallery1.html"},{revision:"118a803aca02e9c97fe7a0528e398c55",url:"./photos/index.html"},{revision:"18667ad6c9b4c23511b731e03993557a",url:"./tags/API开发/index.html"},{revision:"62f6b56dca2625e5f41b969953552bf8",url:"./tags/Docker/index.html"},{revision:"9ee84c16d090425dcfb0de26c831251b",url:"./tags/Form表单/index.html"},{revision:"b09d392ea9c94e802d796ef0122e5a2e",url:"./tags/Git/index.html"},{revision:"49bd39565212eaa545a84a71bf7565ab",url:"./tags/Github/index.html"},{revision:"30599919df5bc03e10db0e315723b3a4",url:"./tags/index.html"},{revision:"17e28ea21252a367f4a7412e2e58e53f",url:"./tags/jQuery/index.html"},{revision:"67ddac51d4b95e47144bfe538dd3f619",url:"./tags/Koa/index.html"},{revision:"e02d33df82f450740e8e913b142e3d6b",url:"./tags/Mock数据/index.html"},{revision:"2d12cb2295ae99ac80747862f4461a12",url:"./tags/MongoDB/index.html"},{revision:"3d0c735cc47bd8aca717f546b96b5559",url:"./tags/NoSQL/index.html"},{revision:"c1c554c9046916a90f8d25a5c5faf3af",url:"./tags/Redis/index.html"},{revision:"ef084e9354f9b488db48360443dcba7f",url:"./tags/Unraid/index.html"},{revision:"b49da7d5f221bbea98f8513f7a5f08e0",url:"./tags/VUE/index.html"},{revision:"b0c987b4bec4dcec4926c01f944a5b3a",url:"./tags/前端/index.html"},{revision:"6faa461efe78cb3852d944236c946ba2",url:"./tags/开发环境/index.html"},{revision:"59886eba717c35495f5e1033d2e34977",url:"./tags/数据库/index.html"},{revision:"8dcf9cad224c2f74393446ddbc46e674",url:"./tags/服务端/index.html"},{revision:"0cc66535a18b091a6848ad8ebec01c87",url:"./tags/框架/index.html"},{revision:"8e2ffa8f89ed4df840deed20a75d0c80",url:"./tags/缺陷管理/index.html"},{revision:"ffc8c6a085a1515e1131476afa8616ba",url:"./tags/面试题/index.html"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();