import {test,expect} from "@playwright/test";

test("Test Scenario 1",async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground")
    await page.getByRole('link', { name: 'Simple Form Demo' }).click();
    await expect(page).toHaveURL(new RegExp('simple-form-demo','i'));
    let message="Welcome to LambdaTest";
    await page.getByPlaceholder('Please enter your Message').fill(message);
    await page.getByRole('button', { name: 'Get Checked Value' }).click();
    await expect(page.locator('#message')).toContainText(message);
    page.close()
    
});


test("Test Scenario 2",async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground")   
    await page.getByRole('link', { name: 'Drag & Drop Sliders' }).click();
    
    const source = page.locator('#slider3').getByRole('slider');
    const target = page.locator('#slider3').getByRole('slider');
        
    await target.dragTo(target);
    await target.dragTo(target, {
          sourcePosition: { x: 0,y:0 },
          targetPosition: { x: 465, y: 0 },
        });
    
    await expect(page.getByText('95', { exact: false })).toContainText('95')
    page.close();
    
   
});

test("Test Scenario 3",async({page})=>{
    const message="Thanks for contacting us, we";
    await page.goto("https://www.lambdatest.com/selenium-playground")   
    await page.getByRole('link', { name: 'Input Form Submit' }).click();
    await page.getByRole('button', { name: 'Submit' }).click();
    await page.getByPlaceholder('Name', { exact: true }).fill("Tester")
    await page.getByPlaceholder('Email', { exact: true }).fill("test@test.com")
    await page.getByPlaceholder('Password').fill("Test1111")
    await page.getByPlaceholder('Company').fill("ABC ltd")
    await page.getByPlaceholder('Website').fill("http://https://www.lambdatest.com")
    await page.getByRole('combobox').selectOption('United States');
    await page.getByPlaceholder('City').fill("New York")
    await page.getByPlaceholder('Address 1').fill("U25")
    await page.getByPlaceholder('Address 2').fill("11 Wall St")
    await page.getByPlaceholder('State').fill("NY")
    await page.getByPlaceholder('Zip code').fill("44213")
    await expect(page.getByText('Thanks for contacting us, we')).toBeHidden();
    await page.getByRole('button', { name: 'Submit' }).click();
    await expect(page.getByText('Thanks for contacting us, we')).toBeVisible();
    await expect(page.getByText('Thanks for contacting us, we')).toContainText(message);
    
    page.close();

    
});