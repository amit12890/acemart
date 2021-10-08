## Run dev frontend server

`yarn watch`

## Setup HTTPS for local development

- add .env variable : `CUSTOM_ORIGIN_EXACT_DOMAIN=dev.acemart`
- cd into root folder with package.json file
- run command `yarn buildpack create-custom-origin .`