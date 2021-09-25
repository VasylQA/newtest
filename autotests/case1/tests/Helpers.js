const {LOGIN_FORM} = require("../tests/Selectors")

const fillLogIn = async (page, userDetails) => {
    await page.waitForSelector(LOGIN_FORM.EMAIL_FIELD);
    await page.fill(LOGIN_FORM.EMAIL_FIELD, userDetails.email);

    await page.waitForSelector(LOGIN_FORM.PASS_FIELD);
    await page.fill(LOGIN_FORM.PASS_FIELD, userDetails.password);
};

const userDetails = {
    email: "testqa0918@gmail.com",
    password: "romanko13"
};

module.exports = {
    fillLogIn,
    userDetails
};