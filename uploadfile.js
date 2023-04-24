const { Builder, Browser, By, Key, until } = require("selenium-webdriver");

(async function example() {
  let driver = await new Builder().forBrowser("chrome").build();
  try {

    await driver.get("https://demo.imacros.net/Automate/FileUploadDemo");
    await driver.findElement(By.xpath('//*[@id="uploaded_file"]')).sendKeys('C:\\Users\\ASUS\\OneDrive\\Pictures\\bahan-belajar\\p_cat2.png');
    await driver.sleep(3000);

  } finally {
    await driver.quit();
  }
})();
