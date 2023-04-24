const { Builder, Browser, By, Key, until } = require("selenium-webdriver");

(async function example() {
  let driver = await new Builder().forBrowser("chrome").build();
  try {
    //buka tab 1
    await driver.get("https://www.google.com/ncr");

    //extract tab 1
    const tab1 = await driver.getWindowHandle();

    //buka tab baru
    await driver.switchTo().newWindow("tab");
    await driver.get("https://www.facebook.com");

    //extract tab2
    const tab2 = await driver.getWindowHandle();

    //Switch back to the old tab or window
    await driver.switchTo().window(tab1);
    await driver.findElement(By.name("q")).sendKeys("webdriver", Key.RETURN);
    await driver.wait(until.titleIs("webdriver - Google Search"), 1000);

    //Close the tab or window
    //Switch back to the old tab or window
    await driver.switchTo().window(tab2);
    await driver.close();

    await driver.sleep(5000);

  } finally {
    await driver.quit();
  }
})();
