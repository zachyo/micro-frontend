module.exports = {
    module : {
        rules : [
            {
                // file with extension .mjs or .js to be processed by babel-loader
                test : /\.m?js$/,
                exclude : /node_modules/,
                use : {
                    loader : 'babel-loader',
                    options : {
                        presets : ['@babel/preset-react','@babel/preset-env'],
                        plugins : ['@babel/plugin-transform-runtime']
                    }
                }
            }
        ]
    }
}