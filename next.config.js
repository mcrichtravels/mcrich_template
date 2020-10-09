const path = require('path')
const withVideos = require('next-videos')
const withImages = require('next-images')

const withSass = require('@zeit/next-sass');
const withCSS = require("@zeit/next-css");


// module.exports = {
//   sassOptions: {
//     includePaths: [path.join(__dirname, 'styles')],
//   },
// }
module.exports = withImages({
    assetPrefix: '',
    webpack(config, options) {
      return config
    }
});
module.exports = withCSS(withSass({
    webpack (config, options) {
        config.module.rules.push({
            test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 100000
                }
            }
        });
        return config;
    }
}));

/*Loader handles image*/



/*loader handling banner videos*/
module.exports = withVideos({
    assetPrefix: '',
    webpack(config, options) {
      return config
    }
})