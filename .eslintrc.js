module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'prettier',
        'plugin:react/jsx-runtime',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 13,
        sourceType: 'module',
        project: './tsconfig.json',
    },
    plugins: ['react', '@typescript-eslint', 'prettier'],
    rules: {
        'react/jsx-filename-extension': [
            2,
            { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
        ],
        'react/function-component-definition': [
            2,
            {
                namedComponents: 'function-declaration',
            },
        ],
        'prettier/prettier': 'error',
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
            },
        ],
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.ts', '.tsx', '.js', '.jsx'],
            },
        },
    },
}
