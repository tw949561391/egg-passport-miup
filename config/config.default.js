'use strict';

/**
 * egg-passportMiup default config
 * @member Config#passportMiup
 * @property {String} SOME_KEY - some description
 */
exports.passportMiup = {
    key: '',
    secret: '',
    authorizationURL: 'https://passport.miup.fun/api/authorize',
    tokenURL: 'https://passport.miup.fun/api/token',
    profileURL: 'https://passport.miup.fun/api/me',
    scope: ''
};
