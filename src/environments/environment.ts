// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: true,
  firebase: {
  apiKey: 'AIzaSyCsvcVOzl62M_Ysed_JKTCRp-gUle6VqTfls',
    authDomain: 'asdf.firebaseapp.com',
    databaseURL: 'https://asdf.firebaseio.com',
    projectId: 'asdf',
    storageBucket: 'asdf.appspot.com',
    messagingSenderId: '1030144732228119'
  }
};