module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
    ],
    extends: [
        'eslint:recommended',
        "plugin:react/recommended",
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking'
    ],
    parserOptions: {
        tsconfigRootDir: 'src',
        project: ['../tsconfig.json'],
    },
    rules: {
        "indent": ["error", 2],
        "max-lines": ["error", { "max": 300, "skipComments": true }]
    }
};
