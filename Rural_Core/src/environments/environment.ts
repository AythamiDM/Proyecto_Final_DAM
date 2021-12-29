// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyAaoEFb2pS_5C_MECqHPTDKUwExH7VqrT4",
    authDomain: "rural-core-b4cf7.firebaseapp.com",
    projectId: "rural-core-b4cf7",
    storageBucket: "rural-core-b4cf7.appspot.com",
    messagingSenderId: "460378670468",
    appId: "1:460378670468:web:44cd6360ad2e5d5f4409d1",
    measurementId: "G-3G84E8JHKS"
  },
  endPoint: 'http://localhost:8080/api',
  comercios: '/comercios',
  categorias: '/categorias'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
