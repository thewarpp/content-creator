module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:react-hooks/recommended",
	],
	ignorePatterns: ["dist", ".eslintrc.cjs"],
	parser: "@typescript-eslint/parser",
	plugins: ["react-refresh", "unicorn"],
	rules: {
		"react-refresh/only-export-components": [
			"warn",
			{ allowConstantExport: true },
		],
		"unicorn/filename-case": ["error", { case: "kebabCase" }],
	},
	overrides: [
		{
			files: ["**/*.ts", "**/*.tsx", "**/*.js"],
			plugins: [
				"@typescript-eslint",
				"unused-imports",
				"simple-import-sort",
			],
			extends: ["plugin:tailwindcss/recommended"],
			parserOptions: {
				project: "./tsconfig.json",
			},
			rules: {
				"max-params": ["error", 3],
				"max-lines-per-function": ["error", 70],

				"react/destructuring-assignment": "off", // Vscode doesn't support automatically destructuring, it's a pain to add a new variable
				"react/require-default-props": "off", // Allow non-defined react props as undefined

				"@typescript-eslint/consistent-type-imports": "error", // Ensure `import type` is used when it's necessary
				"@typescript-eslint/no-unused-vars": "off",

				"tailwindcss/classnames-order": [
					"warn",
					{
						officialSorting: true,
					},
				], // Follow the same ordering as the official plugin `prettier-plugin-tailwindcss`
				"tailwindcss/no-custom-classname": "off",

				"import/prefer-default-export": "off", // Named export is easier to refactor automatically
				"simple-import-sort/imports": "error", // Import configuration for `eslint-plugin-simple-import-sort`
				"simple-import-sort/exports": "error", // Export configuration for `eslint-plugin-simple-import-sort`

				"unused-imports/no-unused-imports": "error",
				"unused-imports/no-unused-vars": [
					"error",
					{
						argsIgnorePattern: "^_",
						varsIgnorePattern: "^_",
						caughtErrorsIgnorePattern: "^_",
					},
				],
			},
		},
	],
};
