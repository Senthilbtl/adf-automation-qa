// spec.js

let setpage = require('./pages/SettingsPage');

let lpage = require('./pages/LoginPage');

let hpage = require('./pages/HomePage');

let testData = require('./data/adftestdata.json');

describe('ADF Demo App', function() {

 it('adf_settings_test', function() {

    setpage.openUrl(testData.testUrl);

    setpage.verifyUrl(testData.testUrl);

    setpage.selectProvider();
    
    setpage.clickGo();

    setpage.selectedSettings(testData.providerInput);

    setpage.clickGo();

  });

  it('adf_login_test', function() {

    setpage.verifyUrl(testData.loginUrl);

    lpage.enterUsername(testData.usernameInput);

    lpage.enterPassword(testData.passwordInput);

    lpage.clickSignin();

  });

  it('adf_add_folder_test', function() {

    setpage.verifyUrl(testData.homeUrl);

    hpage.clickContentServices();

    setpage.verifyUrl(testData.filesUrl);

    hpage.verifyEmptyFolder(testData.emptyFolder);

    hpage.clickNewFolder();

    hpage.enterFolderName(testData.folderName);

    hpage.clickCreateFolder();

  });

  it('adf_add_same_folder_test', function() {

    hpage.clickNewFolder();

    hpage.enterFolderName(testData.folderName);

    hpage.clickCreateFolder();

    hpage.verifyError();

    hpage.clickCancel();

  });

  it('adf_delete_folder_test', function() {

    hpage.clickFolderMenu();

    hpage.clickDelete();

    hpage.verifyEmpty(testData.emptyFolder);

  });

});