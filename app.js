const Strategy = require('./lib/passport-miup').MiupStrategy;


module.exports = app => {
    const config = app.config.passportMiup;
    config.passReqToCallback = true;
    config.clientID = config.key;
    config.clientSecret = config.secret;
    config.state = config.state || Date.now();
    const strategy = new Strategy(config, (req, accessToken, refreshToken, params, profile, done) => {
        params.refreshToken = refreshToken;
        params.accessToken = accessToken;
        profile.token = params;
        profile.app.passport.doVerify(req, profile, done);
    });
    app.passport.use('miup', strategy);
};