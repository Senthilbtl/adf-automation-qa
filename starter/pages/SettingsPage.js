let settingsPage = function(){

    let txt_provider = element(by.tagName('span.mat-select-value-text > span'));
    let txt_selectECM = element(by.cssContainingText('mat-option .mat-option-text', 'ECM'));
    let btn_apply = element(by.id('host-button'));
    let btn_settings = element(by.css('a[data-automation-id="settings"]'));
    let txt_selected = element(by.css('.mat-select-value'));

    this.openUrl = function(url){
        
        browser.get(url);
        
    };

    this.verifyUrl = function(url){

        expect(browser.getCurrentUrl()).toEqual(url);

    };

    this.selectProvider = function(){
     
        expect(txt_provider.isDisplayed()).toBe(true);
        txt_provider.click();
        expect(txt_selectECM.isDisplayed()).toBe(true);
        txt_selectECM.click();


    };

    this.clickApply = function(){

        expect(btn_apply.isDisplayed()).toBe(true);
        btn_apply.click();

    };

    this.selectedSettings = function(value){

        expect(btn_settings.isDisplayed()).toBe(true);
        btn_settings.click();
        expect(txt_selected.getText()).toBe(value);

    };

};

module.exports = new settingsPage();