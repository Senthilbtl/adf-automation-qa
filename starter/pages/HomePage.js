let HomePage = function(){

    let lnk_contentServices = element(by.css('mat-list-item[data-automation-id="Content Services"] .mat-line'));
    let lnk_newFolder = element(by.css('button[data-automation-id="create-new-folder"] .mat-icon'));
    let dlg_newFolder = element(by.css('.mat-dialog-title'));
    let txt_name = element(by.css('#adf-folder-name-input'));
    let txt_errorMessage = element(by.css('simple-snack-bar>span'));
    let btn_create = element(by.css('button#adf-folder-create-button > .mat-button-wrapper'));
    let btn_cancel = element(by.css('button#adf-folder-cancel-button > .mat-button-wrapper'));
    let lnk_menu = element(by.css('button[data-automation-id="action_menu_0"]'));
    let lnk_delete = element(by.css('button[data-automation-id="DOCUMENT_LIST.ACTIONS.FOLDER.DELETE"] .mat-icon'));
    let txt_folderEmpty = element(by.css('adf-empty-list>div:nth-of-type(1)>div:nth-of-type(1)>div:nth-of-type(1)'));
    let tbl_folders = element(by.css(".adf-datatable-body adf-datatable-row"));

    this.clickContentServices = function(){

        expect(lnk_contentServices.isDisplayed()).toBe(true);
        lnk_contentServices.click();

    };

    this.verifyEmptyFolder = function(){

        element.all(by.css(".adf-datatable-body adf-datatable-row")).then(function(items) {
            let total = items.length;
            //console.log(total);
            while(total > 0){
                lnk_menu.click();
                lnk_delete.click();
                total --;
            }
        });

    };

    this.clickNewFolder = function(){
        
        expect(lnk_newFolder.isDisplayed()).toBe(true);
        lnk_newFolder.click();

    };

    this.newFolderDialog = function(){
        
        expect(dlg_newFolder.isDisplayed()).toBe(true);
        dlg_newFolder.click();

    };

    this.enterFolderName = function(name){

        expect(txt_name.isDisplayed()).toBe(true);
        txt_name.clear();
        txt_name.sendKeys(name);

    };

    this.clickCreateFolder = function(){

        expect(btn_create.isDisplayed()).toBe(true);
        btn_create.click();

    };


    this.verifyAddedFolder = function(folderName){

        element.all(by.css('span[aria-label="'+folderName+'"]')).getText().then(function(items) {
    
            expect(items).toContain(folderName);
           
        });

    };

    this.verifyError = function(message){

        expect(txt_errorMessage.isDisplayed()).toBe(true);
        let errorText = txt_errorMessage;
        expect(errorText.getText()).toEqual(message);
        //expect(errorText.getText()).toEqual('There\'s already a folder with this name. Try a different name.');

    };

    this.clickCancel = function(){

        expect(btn_cancel.isDisplayed()).toBe(true);
        btn_cancel.click();

    };

    this.clickFolderMenu = function(){

        expect(lnk_menu.isDisplayed()).toBe(true);
        lnk_menu.click();

    };

    this.clickDelete = function(){

        expect(lnk_delete.isDisplayed()).toBe(true);
        lnk_delete.click();
    };

    this.verifyEmpty = function(value){

        expect(txt_folderEmpty.isDisplayed()).toBe(true);
        var emptyText = txt_folderEmpty;
        expect(emptyText.getText()).toEqual(value);

    };

};

module.exports = new HomePage();