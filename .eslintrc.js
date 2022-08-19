module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    env: {
        es6: true,
        node: true,
        'jest/globals': true
    },
    plugins: [
        '@typescript-eslint',
        'jest'
    ],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'plugin:jest/style'
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly'
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    rules: {
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
        'no-console': 'error',
        'comma-dangle': ['error', 'never'],
        camelcase: ['error', { allow: ['_id', 'request_id', 'merchant_name', 'customer_name', 'logo_size', 'snowdrop_service'] }],
        '@typescript-eslint/ban-ts-comment': [
            'error',
            {
                'ts-ignore': 'allow-with-description'
            }
        ],
        indent: ['error', 4],
        'linebreak-style': 0,
        'max-len': ['error', {
            code: 120,
            ignoreStrings: true,
            ignoreTemplateLiterals: true,
            ignoreComments: true
        }],
        'import/extensions': [
            'error',
            'always',
            {
                js: 'never',
                ts: 'never'
            }
        ],
        'no-multiple-empty-lines': [
            'error',
            { max: 2 }
        ],
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['error'],

        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': 'error',

        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error'],

        // Jest rules
        'jest/consistent-test-it': ['error', {
            fn: 'test',
            withinDescribe: 'it'
        }],
        'jest/expect-expect': 'error',
        'jest/max-nested-describe': ['error', { max: 5 }],
        'jest/no-commented-out-tests': 'error',
        'jest/no-conditional-expect': 'warn',
        'jest/no-conditional-in-test': 'error',
        'jest/no-deprecated-functions': 'error',
        'jest/no-disabled-tests': 'warn',
        'jest/no-export': 'error',
        'jest/no-focused-tests': 'error',
        'jest/no-hooks': 'error',
        'jest/no-identical-title': 'error',
        'jest/no-jest-import': 'error',
        'jest/no-mocks-import': 'error',
        'jest/no-standalone-expect': 'error',
        'jest/no-test-prefixes': 'error',
        'jest/no-test-return-statement': 'error',
        'jest/prefer-called-with': 'error',
        'jest/prefer-comparison-matcher': 'error',
        'jest/prefer-equality-matcher': 'error',
        'jest/prefer-expect-resolves': 'error',
        'jest/prefer-lowercase-title': 'error',
        'jest/prefer-spy-on': 'error',
        'jest/prefer-strict-equal': 'error',
        'jest/prefer-todo': 'error',
        'jest/require-top-level-describe': 'error',
        'jest/valid-describe-callback': 'error',
        'jest/valid-expect': 'error',
        'jest/valid-expect-in-promise': 'error',
        'jest/valid-title': 'error'
        // End of jest rules
    }
};
