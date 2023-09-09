import { test, expect, Page, Locator } from '@playwright/test';

export class LogoutPage{

    readonly page:Page;
    readonly profile:Locator;
    readonly logout:Locator;

    
    constructor(page:Page){
    
        this.page=page;
        this.profile=this.page.locator("//p[@class='oxd-userdropdown-name']");
        this.logout=this.page.locator("//a[text()='Logout']");
    }
    
    
    async profileTab(){
    
        await this.profile.click();
        

    
    }
    
    async logoutBtn(){
    
        await this.logout.click();
        

    
    }
    

    
    
    
    
    
    
    
    
    }
