module.exports = {
    presets: [
        ["@babel/preset-env", {
            useBuiltIns: 'usage',
            corejs: '2.6.5',
        }],
        "@babel/preset-flow"
    ],
    plugins: [
        '@babel/plugin-syntax-dynamic-import',
        '@babel/plugin-proposal-optional-chaining',
    ]
}