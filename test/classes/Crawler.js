const chai = require('chai');
chai.should();
const Crawler = require('../../out/classes/Crawler').default;
const Ldv = require('../../out/classes/Ldv').default;
const ldvTest = new Ldv('289603A257318');


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
      Crawler.searchPageUrl.should.equal('http://wwww.sda.it/SITO_SDA-WEB/dispatcher?' +
        'id_ldv=@ldv@&invoker=home&LEN=&execute2=ActionTracking.doGetTrackingHome&button=Vai"]');
      Crawler.validateSessionUrl.should.equal('http://wwww.sda.it/SITO_SDA-WEB/dispatcherHol?&execute2=ActionTracking.' +
        'doInsSecurityCode&ses_id=@ses_id@&codice_sicurezza=@codice_sicurezza@&codice_sicurezza_request' +
        '=@codice_sicurezza@&firstAcs=');
      Crawler.shipmentDetailsUrl.should.equal('http://wwww.sda.it/SITO_SDA-WEB/dispatcher?id_ldv=@ldv@&execute2=' +
        '@execute2@&ses_id=@ses_id@&code=ldv&codice_sicurezza=@codice_sicurezza@&codice_sicurezza_request=' +
        '@codice_sicurezza@&firstAcs=&codice_sicurezza=@codice_sicurezza@&codice_sicurezza_request=&firstAcs=');
      done();
    });
  });
  describe('Class methods', () => {
    describe('searchLdv', () => {
      it('find sesId, codiceSicurezza and execute2', (done) => {
        const crawler = new Crawler(ldvTest);
        crawler.searchLdv().then(() => {
          crawler.sesId.should.be.a('string').not.empty;
          crawler.codiceSicurezza.should.be.a('string').not.empty;
          crawler.execute2.should.be.a('string').not.empty;
          done();
        }, done);
      });
    });
  });
});
