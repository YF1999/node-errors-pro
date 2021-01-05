module.exports = {
    env: {
        es2017: true,
        jest: true,
        node: true,
    },
    extends: ['airbnb-typescript/base'],
    ignorePatterns: ['*.cjs', '*.js', '*.mjs', '*.d.ts'],
    parserOptions: {
        project: 'tsconfig.json',
    },
    plugins: ['@typescript-eslint', 'import', 'jest', 'prettier'],
    rules: {
        'arrow-body-style': 'off', // Disabled for prettier
        'class-methods-use-this': 'off',
        'consistent-return': 'off',
        'guard-for-in': 'off',
        'implicit-arrow-linebreak': 'off',
        'max-len': ['error', { code: 100 }],
        'no-continue': 'off',
        'no-console': ['error', { allow: ['log', 'debug', 'info', 'warn', 'error'] }],
        'no-else-return': 'off',
        'no-param-reassign': 'off',
        'no-plusplus': 'off',
        'no-restricted-syntax': 'off',
        'no-underscore-dangle': 'off', // Disabled for leading-underscore options of '@typescript-eslint/naming-convention'
        'object-curly-newline': 'off', // Disabled for prettier
        'operator-linebreak': 'off', // Disabled for prettier

        '@typescript-eslint/brace-style': 'off', // Disabled for better comments
        '@typescript-eslint/comma-dangle': 'off',
        // According to https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/FAQ.md#the-indent--typescript-eslintindent-rules
        // Disable the next rule and use prettier instead.
        '@typescript-eslint/indent': 'off',
        '@typescript-eslint/lines-between-class-members': 'off',
        '@typescript-eslint/naming-convention': [
            'error',
            { selector: 'accessor', format: ['camelCase'] },
            { selector: 'class', format: ['PascalCase'] },
            { selector: 'enum', format: ['PascalCase'] },
            { selector: 'enumMember', format: ['camelCase'] },
            { selector: 'function', format: ['camelCase'], leadingUnderscore: 'allow' },
            { selector: 'interface', format: ['PascalCase'] },
            { selector: 'method', format: ['camelCase'], leadingUnderscore: 'allow' },
            { selector: 'parameter', format: ['camelCase'], leadingUnderscore: 'allow' },
            { selector: 'property', format: ['camelCase'], leadingUnderscore: 'allow' },
            { selector: 'typeAlias', format: ['PascalCase'] },
            { selector: 'typeParameter', format: ['PascalCase'] },
            {
                // 'UPPER_CASE' for constant variables
                selector: 'variable',
                format: ['camelCase', 'UPPER_CASE'],
                leadingUnderscore: 'allow',
            },
        ],

        'import/prefer-default-export': 'off',
    },
};