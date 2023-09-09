import { test, expect } from '@playwright/test';
import { LoginPage } from './Pages/LoginPage';
import { MainPage } from './Pages/MainPage';
import { LogoutPage } from './Pages/LogoutPage';


test.beforeEach(async({page})=>{

let login=new LoginPage(page);

await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

await login.unameField();

await login.passwField();

await login.loginBtn();


});





test('Job Title Validation', async({page})=>{

  let main=new MainPage(page);

  await main.adminTab();

  await main.jobTab();

  await main.titlesTab();



  
});


test('Logout Validation', async({page})=>{

let logout=new LogoutPage(page);

await logout.profileTab();

await logout.logoutBtn();
  
});