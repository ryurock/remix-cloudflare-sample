/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
  serverBuildTarget: 'cloudflare-workers',
  // server: "./server.js",
  devServerBroadcastDelay: 1000,
  ignoredRouteFiles: ['**/.*'],
  // 追加
  watchPaths: ['app', 'packages'],
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // serverBuildPath: "build/index.js",
  // publicPath: "/build/",
};
