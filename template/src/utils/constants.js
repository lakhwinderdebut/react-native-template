// SK = Storage keys, when something is needed to be saved in async
// storage a key must be passed, all those keys used in the
// application will be defined here
// for example: auth token for requesting web APIs after login, we use
//  @AuthToken as key to store the token
export const SK = {
  TOKEN: '@AuthToken',
  USER_NAME: '@UserName',
  USER_EMAIL: '@UserEmail',
};
