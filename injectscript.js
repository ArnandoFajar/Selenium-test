const { Builder, Browser, By, Key, until } = require("selenium-webdriver");

(async function example() {
  let driver = await new Builder().forBrowser("chrome").build();
  try {

    await driver.get("https://shopee.co.id/");
    await driver.findElement(By.xpath('//input[@class="shopee-searchbar-input__input"]')).sendKeys('kerudung',Key.RETURN);
    await driver.sleep(3000);

    let getVolume = await driver.executeScript(`return document.querySelectorAll("a[data-sqe='link']").length`);
    let products = [];

    for (i = 1; i <= getVolume - 5; i++)
    {
        let namaProduk = await driver.findElement(By.xpath(`//*[@id="main"]/div/div[2]/div/div/div[2]/div[2]/div[2]/div[${i}]/a/div/div/div[1]/div/img`)).getAttribute('alt');
        products.push(namaProduk);
    }
    console.log(products);
    await driver.sleep(10000);

  } finally {
    await driver.quit();
  }
})();
