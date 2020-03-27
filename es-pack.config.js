const path = require('path');
const fs = require('fs');

module.exports = {
    onBundle: (webpackConfig) => {
        webpackConfig.externals = { 'perf_hooks': 'perf_hooks' };
        webpackConfig.output.library = 'FpsRun';

        const filename = webpackConfig.output.filename.replace('fps-run-js', 'fps-run');
        webpackConfig.output.filename = filename;
    },
    onVerify: (preloadJs) => {
    },
};
