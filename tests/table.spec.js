import { test, expect } from '@playwright/test';
test('Table',async({page}) => {
    await page.goto('https://playwright.dev/docs/actionability');
    const Table = '//h2[@id="introduction"]//following::table[1]'
    const isTable= await page.locator(Table).isVisible()
     expect (isTable).toBeTruthy()

const TableHead = page.locator(Table); 
const TableHeader = TableHead.locator('thead tr th');
const HeadingNames = await TableHeader.allTextContents();
console.log('Headings:', HeadingNames);

  //const firstRowCells = TableHead.locator('tbody tr').first().locator('td');
  //const rowData = await firstRowCells.allTextContents();
  //console.log('First Row:', rowData);

})