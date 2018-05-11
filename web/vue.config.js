module.exports = {
    lintOnSave: false,

    devServer: {
        open: process.platform === 'linux',
        host: 'lvh.me',
        port: 8080,
        https: true,
        hotOnly: false,
        disableHostCheck: true,
        // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#configuring-proxy
        // Proxy is used to point all reqs that don't match a route to another place, like an API
        proxy: null, // string | Object
        before: app => {}
    }
};
