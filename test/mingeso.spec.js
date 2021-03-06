// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Mingeso', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('show list postulants', async function() {
    await driver.get("http://165.227.193.242/")
    await driver.findElement(By.linkText("Listado de Postulantes")).click()
  })
  it('save postulant', async function() {
    await driver.get("http://165.227.193.242/")
    await driver.findElement(By.linkText("Crear Postulación")).click()
    await driver.findElement(By.id("rut")).click()
    await driver.findElement(By.id("rut")).sendKeys("18.765.525-0")
    await driver.findElement(By.id("name")).click()
    await driver.findElement(By.id("name")).sendKeys("sebastian")
    await driver.findElement(By.id("birth_date")).click()
    await driver.findElement(By.id("birth_date")).sendKeys("9999-99-99")
    await driver.findElement(By.id("Course")).click()
    {
      const dropdown = await driver.findElement(By.id("Course"))
      console.log(dropdown.findElement("option"));
      await driver.findElement(By.xpath("//option[. = 'Ingeniería Civil en Electricidad']")).click()
    }
    await driver.findElement(By.css(".btn")).click()
  })
  it('send empty form', async function() {
    await driver.get("http://165.227.193.242/")
    await driver.findElement(By.linkText("Crear Postulación")).click()
    await driver.findElement(By.css(".btn")).click()
  })
})
