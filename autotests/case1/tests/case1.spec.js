const { test } = require('@playwright/test');
const { HOME_BANNER, BUTTONS, LOGIN_FORM } = require("../tests/Selectors");
const { fillLogIn, userDetails } = require("../tests/Helpers")

test('Should navigate to Home page', async ({ page }) => {
    await page.goto('http://automationpractice.com/index.php');
    await page.waitForSelector(HOME_BANNERi);
    await page.click(BUTTONS.SIGN_IN);
    await fillLogIn(page, userDetails);
    await page.click(BUTTONS.SUBMIT_LOGIN);

    await page.waitForSelector(BUTTONS.ACCOUNT_BUTTON);
    await page.waitForSelector(BUTTONS.LOGOUT);
    await page.click(BUTTONS.LOGOUT);

    await page.waitForSelector(LOGIN_FORM.EMAIL_FIELD);
    await page.waitForSelector(LOGIN_FORM.PASS_FIELD);

});



