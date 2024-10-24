let testResults = [];
const Mochawesome = require('mochawesome');

module.exports = (on, config) => {
  on('test:finished', (test) => {
    const reporter = new Mochawesome({
      reportDir: 'cypress/reports/html',
      overwrite: true,
    });
    reporter.addTest(test);
  });
};
Cypress.on('test:after:run', (test, result) => {
  testResults.push({
    name: test.title,
    status: result.state,
    duration: result.duration
  });
});

Cypress.on('run:complete', () => {
  cy.writeTestResultsToCSV(testResults);
});
