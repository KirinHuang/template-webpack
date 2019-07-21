module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "extends": [
        "eslint:recommended",
        "airbnb-typescript",
        "plugin:@typescript-eslint/recommended",
        "prettier/@typescript-eslint",
        "prettier",
        "prettier/@typescript-eslint"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    parser: "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        // Too restrictive, writing ugly code to defend against a very unlikely scenario: https://eslint.org/docs/rules/no-prototype-builtins
        "no-prototype-builtins": "off",
        // https://basarat.gitbooks.io/typescript/docs/tips/defaultIsBad.html
        "import/prefer-default-export": "off",
        "import/no-default-export": "error",
        // Use function hoisting to improve code readability
        "no-use-before-define": [
            "error",
            { functions: false, classes: true, variables: true },
        ],
        // Makes no sense to allow type inferrence for expression parameters, but require typing the response
        "@typescript-eslint/explicit-function-return-type": [
            "error",
            { allowExpressions: true, allowTypedFunctionExpressions: true },
        ],   
        "@typescript-eslint/no-use-before-define": [
            "error",
            { functions: false, classes: true, variables: true, typedefs: true },
        ],
        "no-console": "off",
    }
};