let loginpage = function(){

    let usernameElement = element(by.id('username'));
    let passwordElement = element(by.id('password'));
    let signinButton = element(by.id('login-button'));

    this.enterUsername = function(usrname){

        usernameElement.clear();
        usernameElement.sendKeys(usrname);
    };

    this.enterPassword = function(password){
        passwordElement.clear();
        passwordElement.sendKeys(password);
    };

    this.clickSignin = function(){
        signinButton.click();
    };

};

module.exports = new loginpage();