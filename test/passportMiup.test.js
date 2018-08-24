'use strict';

const mock = require('egg-mock');

describe('test/passportMiup.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/passportMiup-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, passportMiup')
      .expect(200);
  });
});
