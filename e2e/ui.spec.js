const { test, expect } = require('@playwright/test');
const fs = require('fs');

test('Storing book in file', async ({ page }) => {

 
  await page.goto('https://demoqa.com/');
  await page.click('text=Book Store Application');
  await page.click('text=Login');

  await page.fill('#userName', 'uppili');
  await page.fill('#password', 'Uppili@2014');
  await page.click('#login');

  await expect(page.locator('#userName-value')).toBeVisible();
  await expect(page.getByText('Logout')).toBeVisible();

  await page.click('text=Go To Book Store');

  await page.fill('#searchBox', 'Learning JavaScript Design Patterns');

  const book = page.locator('text=Learning JavaScript Design Patterns');
  await expect(book).toBeVisible();

  
  const title = await page.locator('//table/tbody/tr/td').nth(1).textContent();
  console.log(title)
  const author = await page.locator('//table/tbody/tr/td').nth(2).textContent();
  console.log(author)
  const publisher = await page.locator('//table/tbody/tr/td').nth(3).textContent();
  console.log(publisher)

  
  fs.writeFileSync('bookDetails.txt', 
    `Title: ${title}\nAuthor: ${author}\nPublisher: ${publisher}`
  );


  await page.click('text=Log out');
});