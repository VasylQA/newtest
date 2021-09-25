const { test, expect } = require('@playwright/test');
const { BUTTONS } = require('../case2/Selectors');
const { shipInfo } = require('../case2/Constans');
const { fillShipForm } = require('../case2/Helpers');


test('Should buy mattress', async ({ page }) => {
    await page.goto('https://qa.levelsleep.com');
    await page.click(BUTTONS.HEADER_SHOP);
    await page.click(BUTTONS.MATTRESS);
    await page.click(BUTTONS.ADD_TO_CART);

    await fillShipForm(page, shipInfo);
    await page.click(BUTTONS.CON_TO_BILL);


    await page.waitForSelector(BUTTONS.CON_TO_REV);
    expect(page.url()).toMatch('/billing');

});