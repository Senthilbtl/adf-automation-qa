let settingsPage = function(){

    let providerElement = element(by.tagName('span.mat-select-value-text > span'));
    let selectECM = element(by.cssContainingText('mat-option .mat-option-text', 'ECM'));
    let applyButton = element(by.id('host-button'));
    let settingsButton = element(by.css('a[data-automation-id="settings"]'));
    let selectedElement = element(by.css('.mat-select-value'));

    this.openUrl = function(url){
        
        browser.get(url);
        
    };

    this.verifyUrl = function(url){

        expect(browser.getCurrentUrl()).toEqual(url);

    };

    this.selectProvider = function(){
     
        expect(providerElement.isDisplayed()).toBe(true);
        providerElement.click();
        expect(selectECM.isDisplayed()).toBe(true);
        selectECM.click();


    };

    this.clickGo = function(){

        expect(applyButton.isDisplayed()).toBe(true);
        applyButton.click();

    };

    this.selectedSettings = function(value){

        expect(settingsButton.isDisplayed()).toBe(true);
        settingsButton.click();
        expect(selectedElement.getText()).toBe(value);

    };

};

module.exports = new settingsPage();