// Load modules.

const OAuth2Strategy = require('passport-oauth2');

class Strategy extends OAuth2Strategy {
    /**
     * @param options
     * @param verify
     */
    constructor(options, verify) {
        options = options || {};
        options.scopeSeparator = options.scopeSeparator || ',';
        options.customHeaders = options.customHeaders || {};
        super(options, verify);
        this.name = 'miup';
        this.profileURL = options.profileURL;
    }


    userProfile(accessToken, done) {
        this._oauth2.get(this.profileURL, accessToken, done);
    }
}

// Expose constructor.
module.exports = Strategy;
