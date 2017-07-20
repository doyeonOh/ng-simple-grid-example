// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCrd0m6eFM6uZebUvSrudeKYMlQ7L2ufnE",
    authDomain: "ng-simple-grid-example.firebaseapp.com",
    databaseURL: "https://ng-simple-grid-example.firebaseio.com",
    projectId: "ng-simple-grid-example",
    storageBucket: "ng-simple-grid-example.appspot.com",
    messagingSenderId: "153949737941"
  }
};