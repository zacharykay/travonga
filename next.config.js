module.exports = {
  reactStrictMode: false,
  images: {
    domains: [ "www.travelimager.com" ],
  },

  webpack: (config, { webpack }) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
      })
    );

    return config;
  },
};
