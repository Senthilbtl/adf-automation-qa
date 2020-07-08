## Alfresco ADF automation QA exercise by Senthil

## Description: Details about the automation tests created and command to run all, 

Total 5 Automation tests written to cover all 21 steps given in README.md file

1. adf_settings_test_1 - Step 1 to Step 3
2. adf_login_test_2 - Step 4
3. adf_add_folder_test_3 - Step 5 to Step 11
4. adf_add_same_folder_test_4 - Step 12 to Step 18
5. adf_delete_folder_test_5 - Step 19 to Step 21

- run tests: `protractor conf.js`

## Explanation Describes the choice made in the solution, 

* Protractor with Page Object Model  framework is used to design the tests. This helps to segregate page elements and methods to interact with it.
* Reuse the page methods across multiple test scripts. Easy to maintain the handle the changes in future.
* Test data is managed externally using JSON file. 
* Test Report: Latest Execution report can be found at starter/target/screenshots/test-report.html
* Screenshots: It is captured after every test execution completed. Found at starter/target/screenshot
* Video: Video recording of successful execution of all 5 tests can be found at starter/recording

## Prerequisites

- install Node 
- `npm install -g protractor` to install protractor
- `npm install` to install the project dependencies
- `npm install protractor-jasmine2-screenshot-reporter` to install reporting dependencies