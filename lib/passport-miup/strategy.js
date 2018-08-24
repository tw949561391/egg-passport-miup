// Load modules.

const OAuth2Strategy = require('passport-oauth2');
const AUTHORIZATION_URL = "https://passport.miup.fun/api/authorize";
const TOKEN_URL = "https://passport.miup.fun/api/token.json";

class Strategy extends OAuth2Strategy {
  /**
     *
     * @param options
     * @param verify
     */
  constructor(options, verify) {
    options = options || {};
    options.authorizationURL = options.authorizationURL || AUTHORIZATION_URL;
    options.tokenURL = options.tokenURL || TOKEN_URL;
    options.scopeSeparator = options.scopeSeparator || ',';
    options.customHeaders = options.customHeaders || {};
    super(options, verify);
    this.name = 'miup';
  }
}

// Expose constructor.
module.exports = Strategy;
