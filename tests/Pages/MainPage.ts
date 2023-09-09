import { test, expect, Page, Locator } from '@playwright/test';

export class MainPage{

readonly page:Page;
readonly admin:Locator;
readonly job:Locator;
readonly jobTitles:Locator;

constructor(page:Page){

    this.page=page;
    this.admin=this.page.locator("//span[text()='Admin']");
    this.job=this.page.locator("//span[@class='oxd-topbar-body-nav-tab-item' and text()='Job ']");
    this.jobTitles=this.page.locator("//a[text()='Job Titles']");
}


async adminTab(){

    await this.admin.click();
    
}

async jobTab(){

    await this.job.click();
    
}

async titlesTab(){

    await this.jobTitles.click();
    
}









}