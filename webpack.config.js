const path= require("path");
const webpackMerge = require('webpack-merge');
const htmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports=()=>{
    return webpackMerge({
        entry:'./src/index.js',
        output:{
            path:path.resolve(__dirname,'dist'),
            filename:'bundel.js',
            library:"CommonComp",
            libraryTarget:'umd'
        },
        module:{
            rules:[
                {test:/\.m?js$/,loader:'babel-loader'},
                {test:/\.(css|less|scss)$/,loader:[miniCssExtractPlugin.loader,'css-loader','sass-loader']},
                {test:/\.(svg|png|jpe?g)$/,loader:'url-loader'}
            ]
        },
      devServer:{
          historyApiFallback:true,
          port:9095
      },
      plugins:[new miniCssExtractPlugin()]  
    })
}