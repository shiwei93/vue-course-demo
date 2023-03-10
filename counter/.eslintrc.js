module.exports = {
    parser: 'vue-eslint-parser',
    extends: [
        'plugin:vue/strongly-recommended',
        'eslint:recommended',
        '@vue/typescript/recommended',
        'prettier',
    ],
    plugins: ['@typescript-eslint', 'prettier'],
    rules: {
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                argsIgnorePattern: '^_',
            },
        ],
        '@typescript-eslint/no-shadow': 1,
        'no-unused-vars': 'off',
        'no-shadow': 'off',
        'no-undef': 'off',
        'vue/no-multiple-template-root': 'off',
    },
};
