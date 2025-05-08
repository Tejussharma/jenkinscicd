import { test,expect } from '@playwright/test';

test('Test 1 @dev' , async({page})=>{
await page.goto("https://saucedemo.com");
await expect(page).toHaveTitle('Swag Labs');
})

test('Test 2 @uat' , async({page})=>{
    await page.goto("https://saucedemo.com");
    console.log("Reached the Page-2");
    await expect(page).toHaveTitle('Swag Labs');
})
test('Test 3 @dev' , async({page})=>{
    await page.goto("https://saucedemo.com");
    await expect(page).toHaveTitle('Swag Labs');
    })
    
    test('Test 4 @uat' , async({page})=>{
        await page.goto("https://saucedemo.com");
        console.log("Reached the Page-2");
        await expect(page).toHaveTitle('Swag Labs');
    })
        
    

