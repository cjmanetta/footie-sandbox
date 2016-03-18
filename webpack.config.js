module.exports = {
  context: __dirname + "/app",
  entry: {
  	javascript: "./app.js",
  	html: "./index.html",
  },

  output: {
    filename: "app.js",
    path: __dirname + "/dist",
  },
  module: {
  loaders: [
  	{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "react-hot",
      query: {
      	presets: ['es2015', 'react', 'stage-2']
      },
    },
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader",
      query: {
      	presets: ['es2015', 'react', 'stage-2']
      },
    },
    {
      test: /\.html$/,
      loader: "file?name=[name].[ext]",
    },


  ],
},

}

