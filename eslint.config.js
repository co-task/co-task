module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	parser: '@typescript-eslint/parser',
	extends: [
		'airbnb',
		'airbnb-typescript',
		'airbnb/hooks',
		'plugin:import/errors',
		'plugin:import/warnings',
		'plugin:prettier/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/jsx-runtime',
		'prettier',
	],
	overrides: [
		{
			env: {
				node: true,
			},
			files: ['.eslintrc.{js,cjs}'],
			parserOptions: {
				sourceType: 'script',
			},
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		ecmaFeatures: {
			jsx: true,
		},
		sourceType: 'module',
		project: './tsconfig.eslint.json',
	},
	plugins: ['react', '@typescript-eslint', 'prettier'],
	rules: {
		'react/jsx-uses-react': 'off',
		'no-duplicate-imports': 'error',
		'no-empty-function': 'off',
		'spaced-comment': ['error', 'always'],
		'import/no-duplicates': 'error',
		'import/order': [
			'error',
			{
				groups: [
					'builtin',
					'external',
					'internal',
					'parent',
					'sibling',
					'index',
					'object',
				],
				alphabetize: { order: 'asc', caseInsensitive: true },
			},
		],
		'@typescript-eslint/no-explicit-any': [
			'error',
			{ ignoreRestArgs: false },
		],
		'@typescript-eslint/no-empty-function': 'off',
		'@typescript-eslint/no-unused-vars': 'warn',
		'@typescript-eslint/no-var-requires': 'off',
		'@typescript-eslint/consistent-type-exports': 'error',
		'@typescript-eslint/consistent-type-imports': 'error',
	},
};
