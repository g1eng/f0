// jest needs to wait the webdriver. Pass following option for the test:
// --testTimeout 30000 (or more)

const {Builder, By, until} = require("selenium-webdriver");
let
    driver,
    getButton,
    postButton,
    putButton,
    deleteButton,
    postBodyButton,
    putBodyButton,
    targetButton,
    opFunc,
    alertProcessor

describe('F0 test page', ()=>{
    beforeAll(async ()=>{
        driver = await new Builder()
            .forBrowser("firefox")
            .build()
        const url = "file://" + process.env.PWD + "/fixtures/browser/client.html"
        driver.get(url);
        getButton = driver.findElement(By.id('get'))
        postButton = driver.findElement(By.id('post'))
        putButton = driver.findElement(By.id('put'))
        deleteButton = driver.findElement(By.id('delete'))
        postBodyButton = driver.findElement(By.id('post_body'))
        putBodyButton = driver.findElement(By.id('put_body'))
        opFunc = async function(){
            targetButton.click()
            const alertText = await alertProcessor(driver)
            console.log(alertText)
            return alertText.toString()
        }
        alertProcessor = async function(driver){
            await driver.wait(until.alertIsPresent());
            let alert = await driver.switchTo().alert()
            await alert.accept();
            return await alert.getText();
        }
    })
    afterAll(()=>{
        driver.quit()
    })
    describe('get button', ()=>{
        test("make alert for status code 200", async ()=>{
            targetButton = getButton
            const msg = await opFunc()
            await expect(msg).toContain("GET")
            await expect(msg).toContain("status is 200")
        })
    })
    describe('post button', ()=>{
        test("make alert for status code 200", async ()=>{
            targetButton = postButton
            const msg = await opFunc()
            await expect(msg).toContain("POST")
            await expect(msg).toContain("status is 200")
        })
    })
    describe('put button', ()=>{
        test("make alert for status code 200", async ()=>{
            targetButton = putButton
            const msg = await opFunc()
            await expect(msg).toContain("PUT")
            await expect(msg).toContain("status is 200")
        })
    })
    describe('delete button', ()=>{
        test("make alert for status code 200", async ()=>{
            targetButton = deleteButton
            const msg = await opFunc()
            await expect(msg).toContain("DELETE")
            await expect(msg).toContain("status is 200")
        })
    })
    describe('post body button', ()=>{
        test("make alert for status code 200", async ()=>{
            targetButton = postButton
            const msg = await opFunc()
            await expect(msg).toContain("POST")
            await expect(msg).toContain("status is 200")
        })
    })
    describe('put body button', ()=>{
        test("make alert for status code 200", async ()=>{
            targetButton = putButton
            const msg = await opFunc()
            await expect(msg).toContain("PUT")
            await expect(msg).toContain("status is 200")
        })
    })
});