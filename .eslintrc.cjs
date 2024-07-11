module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		// 'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react-hooks/recommended',
	],
	ignorePatterns: ['dist', '.eslintrc.cjs'],
	parser: '@typescript-eslint/parser',
	plugins: [
		'prettier',
		'react-refresh',
		// 'airbnb-base', // Airbnb base rules
		// 'eslint:recommended',
		// 'plugin:react/recommended', // Plugin for React
		// 'plugin:prettier/recommended', // Prettier plugin
	],
	rules: {
		'prettier/prettier': [
			'error',
			{
				printWidth: 90,
				singleQuote: true,
				tabWidth: 2,
				useTabs: true,
				arrowParens: 'avoid',
				semi: true,
				bracketSpacing: true,
				endOfLine: 'auto',
			},
		],
		// 'array-bracket-spacing': [
		// 	'error',
		// 	'always',
		// 	{ singleValue: false, arraysInArrays: false },
		// ],
		'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
		'no-await-in-loop': 'off',
		'import/prefer-default-export': 'off',
		'no-unused-vars': [
			1,
			{
				ignoreRestSiblings: true,
				argsIgnorePattern: 'res|next|^err|^ignore|^_',
				caughtErrors: 'none',
			},
		],
		'no-param-reassign': ['error'],
		'lines-between-class-members': [
			'error',
			{
				enforce: [
					{
						blankLine: 'always',
						prev: '*',
						next: 'method',
					},
					{
						blankLine: 'always',
						prev: 'method',
						next: '*',
					},
					{
						blankLine: 'always',
						prev: 'field',
						next: 'field',
					},
				],
			},
		],
		'class-methods-use-this': 'off',
		'no-plusplus': [
			'error',
			{
				allowForLoopAfterthoughts: true,
			},
		],
		'import/namespace': 'off',
		'no-underscore-dangle': 'off',
		// 'no-constant-condition': [
		// 	'error',
		// 	{
		// 		checkLoops: false,
		// 	},
		// ],
	},
};
