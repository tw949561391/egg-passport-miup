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
        this._oauth2._useAuthorizationHeaderForGET = true;
        this.profileURL = options.profileURL;
        this._oauth2.get = function (url, access_token, callback) {
            if (this._useAuthorizationHeaderForGET) {
                var headers = {'Authorization': this.buildAuthHeader(access_token)}
                access_token = null;
            }
            else {
                headers = {};
            }
            headers['Content-Type'] = 'application/json';
            this._request("GET", url, headers, "", access_token, callback);
        }
    }


    userProfile(accessToken, done) {
        this._oauth2.get(this.profileURL, accessToken, done);
    }
}

// Expose constructor.
module.exports = Strategy;



