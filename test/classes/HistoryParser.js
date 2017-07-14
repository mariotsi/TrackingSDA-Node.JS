const chai = require('chai');
const should = chai.should();
const cheerio = require('cheerio');
const moment = require('moment');
const testData = require('../data/index');
const HistoryParser = require('../../out/classes/HistoryParser').default;
describe('HistoryParser class', () => {
  describe('getSteps method', () => {
    describe('with valid HTML', () => {
      it('should return steps', (done) => {
        HistoryParser.getSteps(cheerio.load(testData['289603A257318'].rawBody)).should.eql(
          testData['289603A257318'].result.steps
        );
        done();
      });
    });
    describe('with empty HTML', () => {
      it('should return empty steps', (done) => {
        HistoryParser.getSteps(cheerio.load('')).should.be.an('array').that.is.empty;
        done();
      });
    });
  });
  describe('parse method', () => {
    describe('with valid html', () => {
      describe('and a delivered shipment', () => {
        it('should return correct infos and also info on who has signed for and when', (done) => {
          const result = HistoryParser.parse(cheerio.load(testData['289603A257318'].rawBody));
          result.esito.consegnata.should.be.true;
          result.esito.firma.should.be.a('string');
          result.should.eql(testData['289603A257318'].result);
          done();
        });
      });
      describe('and a still in transit shipment', () => {
        it('should return correct infos but no info on who has signed for', (done) => {
          const result = HistoryParser.parse(cheerio.load(testData.notDelivered.rawBody));
          result.esito.consegnata.should.be.false;
          should.not.exist(result.esito.firma);
          result.should.eql(testData.notDelivered.result);
          done();
        });
      });
      describe('with valid html', () => {
        it('steps should be ordered in descending order by date', (done) => {
          const {steps} = HistoryParser.parse(cheerio.load(testData['289603A257318'].rawBody));
          steps.every((el, index, array) => {
            return moment(el.data).isSameOrAfter(
              moment((array[index + 1] || {data: '1970-01-01T00:00:00.000Z'}).data)
            );
          }).should.be.true;
          done();
        });
      });
    });
    describe('with empty html', () => {
      it('should return shipment not found error object', (done) => {
        HistoryParser.parse(cheerio.load('')).should.eql({
          esito: {
            esito: false,
            errorCode: 404,
            message: 'Shipment not found',
          },
        });
        done();
      });
    });
    describe('with valid HTML but with unknown shipment', () => {
      it('should return shipment not found error object', (done) => {
        HistoryParser.parse(cheerio.load(testData.notFound.rawBody)).should.eql(testData.notFound.result);
        done();
      });
    });
  });
});
