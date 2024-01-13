module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:vue/vue3-essential',
		'plugin:@typescript-eslint/recommended',
	],
	parser: "vue-eslint-parser",
	parserOptions: {
		"parser": "@typescript-eslint/parser",
		"extraFileExtensions": [".vue"],
		"ecmaVersion": 2021
	},
	overrides: [
		{
			env: {
				node: true,
			},
			files: [
				'.eslintrc.{js,cjs}',
			],
			parserOptions: {
				sourceType: 'script',
			},
		},
	],
	plugins: [
		'vue',
		'@typescript-eslint',
	],
	rules: {
		indent: [
			'warn',
			'tab',
		],
		semi: [
			'warn',
			'never',
		],
		'no-tabs': [
			'warn',
			{
				allowIndentationTabs: true,
			},
		],
		'no-trailing-spaces': [
			'warn', {
				ignoreComments: true,
			},
		],
		'no-unused-vars': 'warn',
		'vue/multi-word-component-names': 'off',
		'vue/no-unused-components': 'warn',
		'vue/quote-props': 'off',
		'prefer-rest-params': 'warn',
		'no-empty': 'warn',
		'vue/no-v-model-argument': 'off',
	},
	root: true,
}
