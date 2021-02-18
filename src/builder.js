import puppeteer from 'puppeteer'

export default class Builder {
    static async build(viewport) {
        const launchOptions = {
            headless: true,
            slowMo: 1,
            args: ['--no-snadbox', '--disable-setui-sandbox', '--disable-web-security']
        }

        const browser = await puppeteer.launch(launchOptions)
        const page = await browser.newPage()
        const extendedPage = new Builder(page)
        await page.setDefaultTimeout(15000)
    }
}