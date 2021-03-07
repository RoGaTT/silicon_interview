const path = require('path');

module.exports = {
  resolve: (config, env) => {
    console.log('Override resolve');
    return {
      ...config.resolve,
      extensions: [
        ...new Set([
          ...config.resolve.extensions,
          '.js*',
          '.ts*',
          '.json',
          '.scss',
        ]),
      ],
      aliases: {
        '@': path.resolve(__dirname, 'src'),
      },
    };
  },
};
