module.exports = {
    lintOnSave: false,

    devServer: {
        open: process.platform === 'linux',
        host: '0.0.0.0',
        port: 8080,
        https: true,
        hotOnly: false,
        // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#configuring-proxy
        // Proxy is used to point all reqs that don't match a route to another place, like an API
        proxy: null, // string | Object
        before: app => {}
    }
};
