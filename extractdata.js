const { Builder, Browser, By, Key, until } = require("selenium-webdriver");

(async function example() {
  let driver = await new Builder().forBrowser("chrome").build();
  try {

    await driver.get("https://www.tokopedia.com/");
    await driver.findElement(By.xpath('//*[@id="header-main-wrapper"]/div[2]/div[2]/div[1]/div/div/div/input')).sendKeys('kerudung',Key.RETURN);
    await driver.sleep(3000);
    let nameProduk = await driver.findElement(By.xpath('//*[@data-testid="master-product-card"]/div/div/div[2]/a/div')).getText();
    console.log(nameProduk);
    await driver.sleep(5000);

  } finally {
    await driver.quit();
  }
})();
