module.exports = {
    presets: [
        "@babel/typescript",
        ["@babel/preset-env", {
            useBuiltIns: 'usage',
            corejs: '2.6.5',
        }]
    ],
    plugins: [
        '@babel/plugin-syntax-dynamic-import',
        '@babel/plugin-proposal-optional-chaining'
    ]
}