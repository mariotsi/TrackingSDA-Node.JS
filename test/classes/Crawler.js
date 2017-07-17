const chai = require('chai');
const cheerio = require('cheerio');
const testData = require('../data/');
chai.should();
let Crawler;
const mockery = require('mockery');
const sinon = require('sinon');
let ldvTest;

const rpStub = sinon.stub();
before(function(done) {
  mockery.enable({
    warnOnReplace: false,
    warnOnUnregistered: false,
    useCleanCache: true,
  });

  mockery.registerMock('request-promise-native', rpStub);
  Crawler = require('../../out/classes/Crawler').default;
  const Ldv = require('../../out/classes/Ldv').default;
  ldvTest = new Ldv('289603A257318');
  rpStub
    .withArgs(sinon.match({uri: sinon.match(/doGetTrackingHome/i)}))
    .returns(Promise.resolve(cheerio.load(testData.searchPage.rawBody)));
  rpStub.withArgs(sinon.match({uri: sinon.match(/doInsSecurityCode/i)})).returns(Promise.resolve('bb'));
  rpStub
    .withArgs(sinon.match({uri: sinon.match(new RegExp(`dispatcher\\?id_ldv=${ldvTest.code}&execute2=`, 'i'))}))
    .returns(Promise.resolve(testData['289603A257318'].rawBody));
  done();
});

after(function(done) {
  mockery.disable();
  mockery.deregisterAll();
  done();
});

describe('Crawler class', () => {
  describe('Constructor', () => {
    it('should set options correctly', (done) => {
      const crawler = new Crawler(ldvTest);
      crawler.ldv.should.equal(ldvTest);
      crawler.options.uri.should.be.empty;
      crawler.options.transform.should.be.a('function');
      done();
    });
  });
  describe('Static properties', () => {
    it('should match', (done) => {
      Crawler.searchPageUrl.should.equal(
        'http://wwww.sda.it/SITO_SDA-WEB/dispatcher?' +
          'id_ldv=@ldv@&invoker=home&LEN=&execute2=ActionTracking.doGetTrackingHome&button=Vai"]'
      );
      Crawler.validateSessionUrl.should.equal(
        'http://wwww.sda.it/SITO_SDA-WEB/dispatcherHol?&execute2=ActionTracking.' +
          'doInsSecurityCode&ses_id=@ses_id@&codice_sicurezza=@codice_sicurezza@&codice_sicurezza_request' +
          '=@codice_sicurezza@&firstAcs='
      );
      Crawler.shipmentDetailsUrl.should.equal(
        'http://wwww.sda.it/SITO_SDA-WEB/dispatcher?id_ldv=@ldv@&execute2=' +
          '@execute2@&ses_id=@ses_id@&code=ldv&codice_sicurezza=@codice_sicurezza@&codice_sicurezza_request=' +
          '@codice_sicurezza@&firstAcs=&codice_sicurezza=@codice_sicurezza@&codice_sicurezza_request=&firstAcs='
      );
      done();
    });
  });
  describe('Class methods', () => {
    describe('Fulfilled', () => {
      describe('searchLdv', () => {
        it('find sesId, codiceSicurezza and execute2', (done) => {
          const crawler = new Crawler(ldvTest);

          crawler.searchLdv().then(() => {
            crawler.sesId.should.equal(testData.searchPage.sesId);
            crawler.codiceSicurezza.should.equal(testData.searchPage.codiceSicurezza);
            crawler.execute2.should.equal(testData.searchPage.execute2);
            done();
          }, done);
        });
      });
      describe('validateSession', () => {
        it('should just resolve.', (done) => {
          const crawler = new Crawler(ldvTest);
          crawler.validateSession().then(done, done);
        });
      });
      describe('getShipmentDetails', () => {
        it('should match.', (done) => {
          const crawler = new Crawler(ldvTest);

          crawler.getShipmentDetails().then(() => {
            crawler.rawBody.should.eql(testData['289603A257318'].rawBody);
            done();
          }, done);
        });
      });
    });
    describe('Rejected', () => {
      before((done) => {
        rpStub.reset();
        rpStub.returns(Promise.reject());
        done();
      });
      describe('searchLdv', () => {
        it('Reject with error', (done) => {
          const crawler = new Crawler(ldvTest);
          crawler.searchLdv().then(
            () => done(new Error()),
            (err) => {
              err.message.should.be.equal('Error while accessing to the search page');
              err.status.should.be.equal(500);
              done();
            }
          );
        });
      });

      describe('validateSession', () => {
        it('Reject with error', (done) => {
          const crawler = new Crawler(ldvTest);
          crawler.validateSession().then(
            () => done(new Error()),
            (err) => {
              err.message.should.be.equal('Error validating session');
              err.status.should.be.equal(500);
              done();
            }
          );
        });
      });
      describe('getShipmentDetails', () => {
        it('Reject with error', (done) => {
          const crawler = new Crawler(ldvTest);
          crawler.getShipmentDetails().then(
            () => done(new Error()),
            (err) => {
              err.message.should.be.equal('Error retrieving shipment details');
              err.status.should.be.equal(500);
              done();
            }
          );
        });
      });
    });
  });
});
