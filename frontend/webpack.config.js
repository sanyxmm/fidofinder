module.exports = {
    // ... other configurations ...
    module: {
        rules: [
          {
            test: /\.scss$/, // Regex to match SCSS files
            use: [
              'style-loader', // Injects styles into the DOM
              'css-loader',   // Translates CSS into CommonJS
              'postcss-loader', // Processes CSS with PostCSS
              {
                loader: 'sass-loader', // Compiles Sass to CSS
                options: {
                  sourceMap: true, // Enable source maps for better debugging
                },
              },
              {
                loader: 'resolve-url-loader', // Resolves relative paths in url() statements
                options: {
                  sourceMap: true, // Enable source maps for better debugging
                },
              },
            ],
          },
          {
            test: /\.(js|jsx)$/, // Regex to match JavaScript and JSX files
            use: 'babel-loader', // Use Babel to transpile JavaScript and JSX
            exclude: /node_modules/,
          },
        ],
      },
  };