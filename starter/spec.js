// spec.js

let setpage = require('./pages/SettingsPage');

let lpage = require('./pages/LoginPage');

let hpage = require('./pages/HomePage');

let testData = require('./data/adftestdata.json');

describe('ADF Demo App', function() {
  
 // Total 5 Automation tests written to cover all 21 steps given in README.md file

 // Step 1 to Step 3
 it('adf_settings_test_1', function() {

    setpage.openUrl(testData.testUrl);

    setpage.verifyUrl(testData.testUrl);

    setpage.selectProvider();
    
    setpage.clickApply();

    setpage.selectedSettings(testData.providerInput);

    setpage.clickApply();

  });

  // Step 4
  it('adf_login_test_2', function() {

    setpage.verifyUrl(testData.loginUrl);

    lpage.enterUsername(testData.usernameInput);

    lpage.enterPassword(testData.passwordInput);

    lpage.clickSignin();

  });

  // Step 5 to Step 11
  it('adf_add_folder_test_3', function() {

    setpage.verifyUrl(testData.homeUrl);

    hpage.clickContentServices();

    setpage.verifyUrl(testData.filesUrl);

    hpage.verifyEmptyFolder();

    hpage.clickNewFolder();

    hpage.newFolderDialog();

    hpage.enterFolderName(testData.folderName);

    hpage.clickCreateFolder();

    hpage.verifyAddedFolder(testData.folderName);

  });

  // Step 12 to Step 18
  it('adf_add_same_folder_test_4', function() {

    hpage.clickNewFolder();

    hpage.newFolderDialog();

    hpage.enterFolderName(testData.folderName);

    hpage.clickCreateFolder();

    hpage.verifyError(testData.errorMessage);

    hpage.newFolderDialog();

    hpage.clickCancel();

  });

  // Step 19 to Step 21
  it('adf_delete_folder_test_5', function() {

    hpage.clickFolderMenu();

    hpage.clickDelete();

    hpage.verifyEmpty(testData.emptyFolder);

  });

});