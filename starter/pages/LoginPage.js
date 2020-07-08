let loginpage = function(){

    let txt_username = element(by.id('username'));
    let txt_password = element(by.id('password'));
    let btn_signin = element(by.id('login-button'));

    this.enterUsername = function(usrname){

        expect(txt_username.isDisplayed()).toBe(true);
        txt_username.clear();
        txt_username.sendKeys(usrname);

    };

    this.enterPassword = function(password){

        expect(txt_password.isDisplayed()).toBe(true);
        txt_password.clear();
        txt_password.sendKeys(password);

    };

    this.clickSignin = function(){

        expect(btn_signin.isDisplayed()).toBe(true);
        btn_signin.click();
    
    };

};

module.exports = new loginpage();