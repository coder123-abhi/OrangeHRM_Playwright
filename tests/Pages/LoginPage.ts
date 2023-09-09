import { test, expect, Page, Locator } from '@playwright/test';

export class LoginPage{

readonly page:Page;
readonly username:Locator;
readonly password:Locator;
readonly login:Locator;

constructor(page:Page){

    this.page=page;
    this.username=this.page.locator("//input[@name='username']");
    this.password=this.page.locator("//input[@name='password']");
    this.login=this.page.locator("//button[text()=' Login ']");
}


async unameField(){

    await this.username.click();
    
    await this.username.fill('Admin');

}

async passwField(){

    await this.password.click();
    
    await this.password.fill('admin123');

}

async loginBtn(){

    await this.login.click();
    
   

}









}


