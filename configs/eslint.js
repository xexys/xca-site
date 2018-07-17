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
        indent: ['error', 4, {SwitchCase: 1}],
        'max-len': ['error', 120],
        'arrow-parens': 0,
        'arrow-body-style': 0,
        'object-curly-spacing': ['error', 'never'],
        'react/jsx-indent': ['error', 4],
        'react/jsx-filename-extension': ['warn', {extensions: ['.js', '.jsx']}],
        'import/prefer-default-export': 0,
    },

    parserOptions: {
        sourceType: 'module',
    },

    overrides: [
        {
            files: [
                'configs/**/*.js',
            ],
            env: {
                node: true,
            },
            parserOptions: {
                sourceType: 'script',
            },
        },
        {
            files: [
                'src/entries/**/*.js',
            ],
            env: {
                browser: true,
            },
        },
        {
            files: [
                'src/controllers/**/*.js',
                'src/resolvers/**/*.js',
                'src/router/**/*.js',
            ],
            env: {
                node: true,
            },
        },
    ],
};
