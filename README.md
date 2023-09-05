# Getting Started
Follow these steps before attempting to run the automation.

Ensure that Visual Studio Code (or your preferred IDE) and NodeJS are installed first. 
Follow the instructions in the Cypress guide:
https://docs.cypress.io/guides/getting-started/installing-cypress

A more detailed installation guide is available on the Browserstack website:
https://www.browserstack.com/guide/how-to-run-cypress-test-automation


# Build and Test
In order to run the automation and use the CYPRESS UI you will need to start with the following command:
 
 npx cypress open
 
 This will open the UI and will allow you to select which test file to run and which browser you would like to use.
 The tests will execute and feedback successful and failed tests within the UI. This will allow you to also debug
 any tests as you can make changes to the code, and run the changed test in the UI.

 To run a particular test file headlessly in Chrome without using the Cypress UI, enter this command:
 
 npx cypress run --spec "cypress/e2e/Tests.cy.js" -b chrome
 
 The results will be displayed in the IDE terminal once complete.