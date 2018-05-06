module.exports = {
    extends: 'airbnb',

    parser: 'babel-eslint',

    plugins: [
        'flowtype',
    ],

    rules: {
        indent: ['error', 4],
        'object-curly-spacing': ['error', 'never'],
        'react/jsx-indent': ['error', 4],
        'react/jsx-filename-extension': ['warn', {extensions: ['.js', '.jsx']}],
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
