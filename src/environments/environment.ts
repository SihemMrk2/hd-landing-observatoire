// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

//const apiUrl = 'https://api-dot-bdv-front-app.appspot.com';
const apiUrl = 'http://localhost:1337';

export const environment = {
  production: false,
  mixpanelKey: '2d4d62f68fa9bd1dc9eb0ab401117f12',
  apiVersion: 'v1.0.0',
  apiUrl: apiUrl,
  logoSocialMedia: apiUrl + '/uploads/4b4bcaa067dc4952a45178c4ff21f39f.png',
  apiAddressCredentials: ['bdv_addresses_7889', '3ReMzWtMRNG4KaHq'],
  apiAddressUrl: 'https://bdv-addresses-dot-bdvapis.appspot.com/v1',
  apiUsersCredentials: ['bdv_pro_5789', '3ReMzWtMRNG4KaHq'],
  apiUsersUrl: 'http://localhost:6789/v1',
  apibackendUrl: 'https://bdv-backend-preprod.appspot.com/v1',
  apibackendCredentials: ['cendrillon', 'TPFrkw82zE7YmYSc'],
  strapiKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkYTk4ZWRlNzhhNjgyMThkMDVmMWIyOSIsImlhdCI6MTU3MTQwMjU3NCwiZXhwIjoxNTczOTk0NTc0fQ.d0Ez_v37yA6t_tveeLymO9-ok3-0C758H-e9vrcsYZQ",
  intercomVisible: true
};
