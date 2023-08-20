# Tutorial on how to setup Husky with esLint

Watch the [YouTube video](https://youtube.com) and follow the steps below:

1.  Install esLint:
    ```
    npm init @eslint/config
    ```
2.  Add rules to .eslintrc config file.
3.  Test eslint:
    ```
    npx eslint src/**.js --fix
    ```
4.  Install husky.
    ```
    npx husky-init && npm install
    ```
5.  Modify the ".husky/pre-commit" file

    ```
    #!/usr/bin/env sh

    .  "$(dirname  -- "$0")/_/husky.sh"

    npm  run  lint
    ```

6.  Add "lint" function to your package.json:
    ```
    "lint": "npx eslint src/**.js --fix"
    ```
7.  Commit changes.
