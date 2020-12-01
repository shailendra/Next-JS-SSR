const webpack = require('webpack')

/* All defined configs are on below link
https://github.com/vercel/next.js/blob/canary/packages/next/next-server/server/config.ts
*/

/* you can change configs as per phase. eg. PHASE_PRODUCTION_BUILD, PHASE_PRODUCTION_SERVER, PHASE_DEVELOPMENT_SERVER more..
https://nextjs.org/docs/api-reference/next.config.js/introduction
https://github.com/vercel/next.js/blob/canary/packages/next/next-server/lib/constants.ts#L1-L4
 */
module.exports = {

   basePath: '',
   //basePath: '/store',

   env: {
      /* avoid to write env variable here. Use file env.local, .env.development, env.production.
      check /environment-variables page for detail
      */
      customKey: 'my-value',
   },

   
   async rewrites() {
      /* https://nextjs.org/docs/api-reference/next.config.js/rewrites */
      return [
         {
            source: '/about',  // is the incoming request path.
            destination: '/post/10',  // is the path you want to route to.
         },
         {
            source: '/search/:path*',
            destination: '/post/:path*',
         },
         {
            source: '/works/:path*',
            destination: `https://bcwebwise.com/:path*`,
         },
         {
            source: '/works/:path*',
            destination: `https://bcwebwise.com/:path*`,
            basePath: false,  // will ignore basePath if set
         }
      ]
   },


   async redirects() {
      /* 
         ????? Find out Difference between rewrite and redirects  ??????
      */
      return [
         {
            source: '/more',
            destination: 'https://www.bcwebwise.com/awards',
            permanent: true,
         },
      ]
   },


   /* need to do RnD
   https://nextjs.org/docs/api-reference/next.config.js/cdn-support-with-asset-prefix
   */
   /* assetPrefix: 'http://127.0.0.1:5500/src/', */


   images: {
      deviceSizes: [16, 32, 48, 64, 96, 128, 256, 384, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
      imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
   },


   webpack: (config, { buildId, dev, isServer, defaultLoaders, }) => {
      config.node = {
         fs: "empty",
      };
      /* config.module.rules.push({
         test: /\.(glb|gltf|bin)$/,
         use: {
            loader: "file-loader",
         },
      }); */
      /* config.plugins.push(
         new webpack.ProvidePlugin({
            $: "jquery",
            "jQuery": "jquery"

         })); */
      return config;
   },


};