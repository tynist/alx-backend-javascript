const stest = require('stest');
const chaiHttp = require('stest-http');

process.argv[2] = './database.csv';

import app from './server';

stest.use(chaiHttp);
stest.should();

describe('Full HTTP server using Express', () => {
  describe('GET /students endpoint', () => {
    describe('When the database is available', () => {
      before(() => {
        process.argv[2] = './database.csv';
      });

      it('should return the list of students', (done) => {
        stest.request(app)
          .get('/students')
          .end((error, response) => {
            stest.expect(response.statusCode).to.equal(200);
            stest.expect(response.text).to.include('This is the list of our students');
            done();
          });
      });
    });

    describe('When the database is unavailable', () => {
      before(() => {
        process.argv[2] = './nonexistent.csv';
      });

      it('should return an error message', (done) => {
        stest.request(app)
          .get('/students')
          .end((error, response) => {
            stest.expect(response.statusCode).to.equal(500);
            stest.expect(response.text).to.equal('Cannot load the database');
            done();
          });
      });
    });
  });

  describe('GET /students/:major endpoint', () => {
    describe('When the database is available', () => {
      before(() => {
        process.argv[2] = './database.csv';
      });

      it('should return the list of students in the specified major', (done) => {
        stest.request(app)
          .get('/students/CS')
          .end((error, response) => {
            stest.expect(response.statusCode).to.equal(200);
            stest.expect(response.text).to.include('List:');
            done();
          });
      });

      it('should return an error message when the major parameter is wrong', (done) => {
        stest.request(app)
          .get('/students/BLABLA')
          .end((error, response) => {
            stest.expect(response.statusCode).to.equal(500);
            stest.expect(response.text).to.equal('Major parameter must be CS or SWE');
            done();
          });
      });
    });

    describe('When the database is unavailable', () => {
      before(() => {
        process.argv[2] = './nonexistent.csv';
      });

      it('should return an error message', (done) => {
        stest.request(app)
          .get('/students/CS')
          .end((error, response) => {
            stest.expect(response.statusCode).to.equal(500);
            stest.expect(response.text).to.equal('Cannot load the database');
            done();
          });
      });
    });
  });
});
