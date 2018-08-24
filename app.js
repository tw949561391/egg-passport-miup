const Strategy = require('./lib/passport-miup').MiupStrategy;


module.exports = app => {
    const config = app.config.passportMiup;
    config.passReqToCallback = true;
    config.clientID = config.key;
    config.clientSecret = config.secret;
    config.state = config.state || Date.now();

    // must require `req` params
    app.passport.use('miup', new Strategy(config, (req, accessToken, refreshToken, params, profile, done) => {
        const user = {
            userId: params.userId,
            username: params.username,
            nickname: params.nickname,
            accessToken,
            refreshToken,
            params,
            profile,
        };
        app.passport.doVerify(req, user, done);
    }));
};