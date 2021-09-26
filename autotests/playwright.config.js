// import { PlaywrightTestConfig } from "@playwright/test";

const config = {
    use: {
        headless: true,
        viewport: { width: 1280, height: 720 },
        ignoreHTTPSErrors: true,
        screenshot: 'only-on-failure',
        video: 'on-first-retry',
    },
};

// use: {
    //     headless: true,
    //     browserName: "chromium",
    //     screenshot: "only-on-failure",
    //     // video: "retry-with-video"
    // }
    // retries: 2,
    // reporter: [["dot"], ["json", { outputFile: "test-result.json"}]]

module.exports = config;