module.exports = {
    extends: 'airbnb',

    parser: 'babel-eslint',

    plugins: [
        'flowtype'
    ],

    rules: {
        indent: ['error', 4],
        'object-curly-spacing': ['error', 'never'],
    },
    
    overrides: [
        {
            env: {
                browser: true
            },
            files: [
                'src/client/**.js'
            ],
        
            rules: {
                'react/jsx-indent': ['error', 4],
                'react/jsx-filename-extension': ['warn', {'extensions': ['.js', '.jsx']}]
            }
        }
    ]
};
