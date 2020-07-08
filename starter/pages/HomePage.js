let HomePage = function(){

    let contentServicesElement = element(by.css('mat-list-item[data-automation-id="Content Services"] .mat-line'));
    let newFolderElement = element(by.css('button[data-automation-id="create-new-folder"] .mat-icon'));
    let newFolderDialog = element(by.css('.mat-dialog-title'));
    let nameElement = element(by.css('#adf-folder-name-input'));
    let errorElement = element(by.css('simple-snack-bar>span'));
    let createElement = element(by.css('button#adf-folder-create-button > .mat-button-wrapper'));
    let cancelElement = element(by.css('button#adf-folder-cancel-button > .mat-button-wrapper'));
    let menuElement = element(by.css('button[data-automation-id="action_menu_0"]'));
    let deleteElement = element(by.css('button[data-automation-id="DOCUMENT_LIST.ACTIONS.FOLDER.DELETE"] .mat-icon'));
    let logoutElement = element(by.css('mat-list-item[adf-logout] .mat-line'));
    let folderEmptyElement = element(by.css('adf-empty-list>div:nth-of-type(1)>div:nth-of-type(1)>div:nth-of-type(1)'));

    this.enterUsername = function(usrname){
        usernameElement.clear();
        usernameElement.sendKeys(usrname);
    };

    this.clickContentServices = function(){
        contentServicesElement.click();
    };


    this.verifyEmptyFolder = function(){

        element.all(by.css(".adf-datatable-body adf-datatable-row")).then(function(items) {
            let total = items.length;
            while(total > 0){
                menuElement.click();
                deleteElement.click();
                total --;
            }
        });

    };

    this.clickNewFolder = function(){
        newFolderElement.click();
    };

    this.enterFolderName = function(name){
        newFolderDialog.click();
        nameElement.clear();
        nameElement.sendKeys(name);

    };

    this.clickCreateFolder = function(){
        createElement.click();
    };

    this.verifyError = function(){
        let foo = errorElement;
        expect(foo.getText()).toEqual('There\'s already a folder with this name. Try a different name.');
    };

    this.clickCancel = function(){
        cancelElement.click();
    };

    this.clickFolderMenu = function(){
        menuElement.click();
    };

    this.clickDelete = function(){
        deleteElement.click();
    };

    this.verifyEmpty = function(value){

        var fd = folderEmptyElement;
        expect(fd.getText()).toEqual(value);

    };

    this.logout = function(){

        browser.executeScript('window.scrollTo(0,0);').then(function(){
            //expect(logoutElement.isDisplayed()).toBe(true);
            logoutElement.isDisplayed();
            logoutElement.click();
        });
    };

};

module.exports = new HomePage();