const Dotenv = require('dotenv-webpack');

module.exports = {
  // other webpack config options here...
  plugins: [
    new Dotenv({
      path: './.env', // Path to .env file
      safe: true // load .env.example file as well
    })
  ],
};
