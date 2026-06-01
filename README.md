Scripts:

- dev: Watch file changes and then restart the server
- lint: Scans the project for bad practices, bugs or style violations, for example:
`
    const userName = "Tommy"
    console.log(userName)
` 
it converts into `Missing semicolon.`
- lint:fix: The same than the lint script and fix what it can
- format: Format the code

.eslint.config.js

- js.configs.recommended: Provides basic javascript rules, for example:
`
    const age = 20;
    if (age = 30) {}
`
Expected a comparison and instead saw an assignment.

- ...tseslint.configs.recommended: Make sure to use a safer typing, for example:
`
    let age: number = "25";
`
This is not valid

- eslint-config-prettier (prettier): Formatting decisions are made by prettier and prevents eslint and prettier from fighting because of this

- globals: This tells eslint the global variables so it knows that you are running nodejs.