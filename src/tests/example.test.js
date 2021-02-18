import puppeteer from 'puppeteer'
import { step } from 'mocha-steps'

describe('Mocha steps demo', () => {
    let browser
    let page

    before(async () => {
        browser = await puppeteer.launch({ headless:true })
        page = await browser.newPage()
        await page.setDefaultTimeout(7000)
    })

    after(async () => {
        await browser.close()
    })

    step('launch Google home', async () => {
        await page.goto("https://google.com")
    })

    step('step 2 will fail', async () => {
        await page.waitForSelector('#fail')
    })

    step('step 3', async () => {
        console.log('Step 3')
    })

    step('step 4', async () => {
        console.log('Step 4')
    })
})