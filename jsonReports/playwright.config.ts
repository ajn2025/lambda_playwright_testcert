import { devices, PlaywrightTestConfig } from '@playwright/test';

    
const capabilities ={
    browserName: "Chrome", // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`
    browserVersion: "latest",
    
    "LT:Options": {
        platform: "Windows 10",
        build: "Playwright Test from config",
        name: "Playwright test",
        user:"aj.salvacion",
        accessKey:"ffigfxPAxLce65rT27TNHB07KKuw5cmuZndlC2Xm0W71bA8mHt",
        network: true,
        video: true,
        console: true,
        tunnel: false, // Add tunnel configuration if testing locally hosted webpage
        tunnelName: "", // Optional
        geoLocation: '', // country code can be fetched from https://www.lambdatest.com/capabilities-generator/
    }
    


};
const config: PlaywrightTestConfig = {
    projects: [
        // {
        //     name: "chrome:latest:MacOS Catalina@lambdatest",
        //     use: {
        //         viewport: { width: 1920, height: 1080 },
        //     },
        // },
        {
            name: "chrome:latest:Windows 10@lambdatest",
            use: {
                viewport: { width: 1280, height: 720 },
            },
        },
        //{
        //     name: "chrome",
        //     use: {
        //         ...devices["Desktop Chrome"]
        //     }
        // },
        {
            name: "firefox",
            use: {
                ...devices["Desktop Firefox"]
            }
        }
    ],
    

    testMatch: ["tests/assignment.test.ts"],
    use: {
        connectOptions: {
            wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=
            ${encodeURIComponent(JSON.stringify(capabilities))}`
        },
        baseURL: "https://www.lambdatest.com/selenium-playground",
        headless: false,
        screenshot: "on",
        video: "on",
        launchOptions: {
            // slowMo: 1000
        },
    },
    timeout: 60 * 1000 * 5,
    retries: 0,
    reporter: [["dot"], ["json", {
        outputFile: "jsonReports/jsonReport.json"
    }], ["html", {
        open: "never"
    }]]
};



export default config;



