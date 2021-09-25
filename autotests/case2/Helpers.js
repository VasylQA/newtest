const { SHIP } = require('../case2/Selectors');

const fillShipForm = async (page, shipInfo) => {
    await page.waitForSelector(SHIP.EMAIL);
    await page.fill(SHIP.EMAIL, shipInfo.email);

    await page.waitForSelector(SHIP.FULL_NAME);
    await page.fill(SHIP.FULL_NAME, shipInfo.full_name);

    await page.waitForSelector(SHIP.ADDRESS);
    await page.fill(SHIP.ADDRESS, shipInfo.address);

    await page.waitForSelector(SHIP.CITY);
    await page.fill(SHIP.CITY, shipInfo.city);

    await page.waitForSelector(SHIP.STATE);
    await page.selectOption(SHIP.STATE, shipInfo.state);

    await page.waitForSelector(SHIP.ZIP);
    await page.fill(SHIP.ZIP, shipInfo.zip);

    await page.waitForSelector(SHIP.NUMBER);
    await page.fill(SHIP.NUMBER, shipInfo.number);
};

module.exports = {
    fillShipForm
}