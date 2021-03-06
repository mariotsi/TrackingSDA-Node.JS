const chai = require('chai');
chai.should();
const expect = chai.expect;
const sinon = require('sinon');
const Ldv = require('../../out/classes/Ldv').default;
const Crawler = require('../../out/classes/Crawler').default;
describe('Ldv class', () => {
  describe('constructor', () => {
    describe('with ldv length 7', () => {
      it('should create the Ldv object', (done) => {
        try {
          const ldv = new Ldv('1234567');
          ldv.code.should.equal('1234567');
          done();
        } catch (err) {
          done(err);
        }
      });
    });
    describe('with ldv length 9', () => {
      it('should create the Ldv object', (done) => {
        try {
          const ldv = new Ldv('123456789');
          ldv.code.should.equal('123456789');
          done();
        } catch (err) {
          done(err);
        }
      });
    });
    describe('with ldv length 12', () => {
      it('should create the Ldv object', (done) => {
        try {
          const ldv = new Ldv('123456789ABC');
          ldv.code.should.equal('123456789ABC');
          done();
        } catch (err) {
          done(err);
        }
      });
    });
    describe('with ldv length 13', () => {
      it('should create the Ldv object', (done) => {
        try {
          const ldv = new Ldv('123456789ABCD');
          ldv.code.should.equal('123456789ABCD');
          done();
        } catch (err) {
          done(err);
        }
      });
    });
    describe('with ldv length 1', () => {
      it('should fail', (done) => {
        expect(() => new Ldv('1')).to.throw('Wrong LDV format');
        done();
      });
    });
  });

  describe('extractData method', () => {
    const ldv = new Ldv('1234567');
    before((done) => {
      sinon.stub(Crawler.prototype, 'searchLdv');
      sinon.stub(Crawler.prototype, 'validateSession');
      sinon.stub(Crawler.prototype, 'getShipmentDetails');
      done();
    });
    after((done) => {
      Crawler.prototype.searchLdv.restore();
      Crawler.prototype.validateSession.restore();
      Crawler.prototype.getShipmentDetails.restore();
      done();
    });
    describe('without error on crawler', () => {
      it('should resolve', (done) => {
        Crawler.prototype.rawBody = {html: sinon.spy()};
        Crawler.prototype.parse = sinon.spy();
        ldv.extractData().then(done, done);
      });
    });
    describe('parser that doesnt add rawBody to crawler', () => {
      it('should warn about html of undefined', (done) => {
        Crawler.prototype.rawBody = undefined;
        ldv.extractData().then(done.bind(this, new Error()), (err) => {
          err.message.should.equal('Cannot read property \'html\' of undefined');
          done();
        });
      });
    });
    describe('failing Crawler.searchLdv', () => {
      after((done) => {
        Crawler.prototype.searchLdv.reset();
        done();
      });
      it('should throw an error', (done) => {
        Crawler.prototype.searchLdv.throws('TheError1');
        ldv.extractData().then(done.bind(this, new Error()), (err) => {
          err.name.should.equal('TheError1');
          done();
        });
      });
    });
    describe('failing Crawler.validateSession', () => {
      after((done) => {
        Crawler.prototype.validateSession.reset();
        done();
      });
      it('should throw an error', (done) => {
        Crawler.prototype.validateSession.throws('TheError2');
        ldv.extractData().then(done.bind(this, new Error()), (err) => {
          err.name.should.equal('TheError2');
          done();
        });
      });
    });
    describe('failing Crawler.searchLdv', () => {
      after((done) => {
        Crawler.prototype.getShipmentDetails.reset();
        done();
      });
      it('should throw an error', (done) => {
        Crawler.prototype.getShipmentDetails.throws('TheError3');
        ldv.extractData().then(done.bind(this, new Error()), (err) => {
          err.name.should.equal('TheError3');
          done();
        });
      });
    });
  });
});
