// // const { defineConfig } = require("cypress");


// // module.exports = defineConfig({
// //   projectId: "izm68d",
// //   reporter: 'cypress-mochawesome-reporter',
// //   screenshotOnRunFailure:true,
// //   video:true,
// //   defaultCommandTimeout:8000,
// //   pageLoadTimeout:20000,
// //   e2e: {
// //     setupNodeEvents(on, config) {
// //       require('cypress-mochawesome-reporter/plugin')(on);
// //       // implement node event listeners here  
// //     },  
// //     baseUrl:"https://v7datalabs.in/live/"
// //   },
// // });
// // module.exports = {
// //   // Other Cypress config options
// //   resultsFolder: 'cypress/results',
// // };

// // const { defineConfig } = require("cypress");
// // const fs = require('fs');
// // const path = require('path');

// // // Helper function to write results to CSV
// // const writeTestResultsToCSV = (results) => {
// //   const csvHeaders = 'Test Name,Status,Duration\n';
// //   const csvRows = results.map(result => 
// //     `${result.name},${result.status},${result.duration}`
// //   ).join('\n');
  
// //   const csvContent = csvHeaders + csvRows;
// //   const filePath = path.join('C:\Users\kanna\VSCODE\cypress\Results', 'test-results.csv');

// //   fs.writeFileSync(filePath, csvContent);
// // };

// // module.exports = defineConfig({
// //   projectId: "izm68d",
// //   reporter: 'cypress-mochawesome-reporter',
// //   screenshotOnRunFailure: true,
// //   video: true,
// //   defaultCommandTimeout: 8000,
// //   pageLoadTimeout: 20000,
// //   e2e: {
// //     setupNodeEvents(on, config) {
// //       let testResults = [];

// //       on('after:run', () => {
// //         // Write results to CSV after all tests have run
// //         writeTestResultsToCSV(testResults);
// //       });

// //       // Register your plugin (if any)
// //       require('cypress-mochawesome-reporter/plugin')(on);

// //       // Use `task` event to handle custom actions like collecting test results
// //       on('task', {
// //         recordTestResult(result) {
// //           testResults.push(result);
// //           return null;
// //         }
// //       });
// //     },
// //     baseUrl: "https://v7datalabs.in/live/"
// //   },
// //   resultsFolder: 'C:\Users\kanna\VSCODE\cypress\Results' // Folder for results
// // });



// // last

// const { defineConfig } = require("cypress");
// const fs = require('fs');
// const path = require('path');

// module.exports = defineConfig({
//   projectId: "izm68d",
//   reporter: 'cypress-mochawesome-reporter',
//   screenshotOnRunFailure: true,
//   video: true,
//   defaultCommandTimeout: 8000,
//   pageLoadTimeout: 20000,
//   env:
//   {
//     protourl:("http://V7datalabs.in/live")
//   },
//   e2e: {
//     setupNodeEvents(on, config) {
//       require('cypress-mochawesome-reporter/plugin')(on);
//       let testResults = [];
//       on('task', {
//         recordTestResult(result) {
//           testResults.push(result);
//           return null;
//         }
//       });

//       on('after:run', async () => {
//         // Dynamically import neat-csv
//         const neatCsv = (await import('neat-csv')).default;

//         // Create CSV data
//         const csvHeaders = 'testName,status,timeTaken\n';
//         //const csrow = 'smoke,pass,1.3s\n';
//          const csvRows = testResults.map(result =>
//          `${result.testName},${result.status},${result.timeTaken}`
//         ).join('\n');
//         const csvContent = csvHeaders + csvRows;
//        // const csvContent = csvHeaders + csrow;

//         // Write CSV file
//         //const filePath = path.join('cypress/results', 'test-results.csv');
//         //fs.writeFileSync(filePath, csvContent, { encoding: 'utf8' });
//         // Define file path and ensure directory exists
//         const directoryPath = path.join(__dirname, 'cypress', 'results');
//         const filePath = path.join(directoryPath, 'test-results.csv');

//         if (!fs.existsSync(directoryPath)) {
//           fs.mkdirSync(directoryPath, { recursive: true });
//         }
//         // Write CSV file
//         fs.writeFileSync(filePath, csvContent);

//         return null;
//       });
//     },
//     //baseUrl: "https://v7datalabs.in/live/"
//   },
//    // resultsFolder: 'cypress/results'
// });



// // const { defineConfig } = require("cypress");

// // module.exports = defineConfig({
// //    reporter: 'cypress-mochawesome-reporter',
// //       screenshotOnRunFailure:true,
// //       video:true,
// //       defaultCommandTimeout:8000,
// //       pageLoadTimeout:20000,
// //   e2e: {
// //     setupNodeEvents(on, config) {
// //       require('cypress-mochawesome-reporter/plugin')(on);
      
// //       // implement node event listeners here
// //     },
// //baseurl:'https://www.saucedemo.com/v1/'
// //   },
// // });
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  env:
  {
    protourl:("https://www.saucedemo.com/v1/")
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    }
  },
});
