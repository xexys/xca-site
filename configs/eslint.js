module.exports = {
    extends: 'airbnb',

    parser: 'babel-eslint',

    plugins: [
        'flowtype',
    ],

    settings: {
        'import/resolver': {
            'babel-module': {},
        },
    },

    rules: {
        indent: ['error', 4],
        'max-len': ['error', 120],
        'arrow-parens': 0,
        'object-curly-spacing': ['error', 'never'],
        'react/jsx-indent': ['error', 4],
        'react/jsx-filename-extension': ['warn', {extensions: ['.js', '.jsx']}],
        'import/prefer-default-export': 0,
    },

    overrides: [
        {
            files: [
                'configs/**/*.js',
            ],
            parserOptions: {
                sourceType: 'script',
            },
        },
        {
            files: [
                'src/client/**/*.js',
            ],
            env: {
                browser: true,
            },
        },
        {
            files: [
                'src/server/**/*.js',
            ],
            env: {
                node: true,
            },
        },
    ],
};
