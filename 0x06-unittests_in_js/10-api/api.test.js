const request = require('supertest');
const { expect } = require('chai');
const app = require('./api');

describe('API endpoints', () => {
  // Test suite for the /available_payments endpoint
  describe('GET /available_payments', () => {
    it('returns the available payment methods', (done) => {
      request(app)
        .get('/available_payments')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.body).to.deep.equal({
            payment_methods: {
              credit_cards: true,
              paypal: false
            }
          });
          done();
        });
    });
  });

  // Test suite for the /login endpoint
  describe('POST /login', () => {
    it('returns a welcome message with the username', (done) => {
      const username = 'Betty';
      request(app)
        .post('/login')
        .send({ userName: username })
        .expect('Content-Type', /text/)
        .expect(200)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.text).to.equal(`Welcome ${username}`);
          done();
        });
    });
  });
});
