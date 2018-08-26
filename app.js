const Strategy = require('./lib/passport-miup').MiupStrategy;


module.exports = app => {
    const config = app.config.passportMiup;
    config.passReqToCallback = true;
    config.clientID = config.key;
    config.clientSecret = config.secret;
    config.state = config.state || Date.now();
    const strategy = new Strategy(config, (req, accessToken, refreshToken, params, profile, done) => {
        params.refresh_token = refreshToken;
        params.access_token = accessToken;
        profile.token = params;
        app.passport.doVerify(req, profile, (error, data) => {
            try {
                if (typeof(data) === 'string') {
                    data = JSON.parse(data);
                }
                done(null, data);
            } catch (e) {
                done(e);
            }

        });
    });
    app.passport.use('miup', strategy);
};