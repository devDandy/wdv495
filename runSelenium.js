const {Builder, By, Key, until} = require('selenium-webdriver');



let driver = new Builder()

    .forBrowser('chrome')

    .build();



driver.get('http://devciba.centraliowabeekeepersassoc.org/')

   	.then(_ => driver.findElement(By.id('menu-item-478')).click())
   	.then(_ => driver.findElement(By.id("fld_8768091_1")).sendKeys("Dan"))
   	.then(_ => driver.findElement(By.id("fld_9970286_1")).sendKeys("Schneider"))
   	.then(_ => driver.findElement(By.id("fld_6009157_1")).sendKeys("dschnd@gmail.com"))
   	.then(_ => driver.findElement(By.id("fld_7683514_1")).sendKeys("Hello world!"))
   	.then(_ => driver.findElement(By.id("fld_5781537_1")).click())
   	.then(_ => driver.findElement(By.xpath("/html/body/div[1]/div/div[2]/div/div[2]/div/div/main/article/div/div/form/div[5]/div[1]/div/div/select/option[2]")).click())
   	.then(_ => driver.findElement(By.id("fld_5781537_1")).click())

   	.then(_ => driver.findElement(By.id("fld_7908577_1")).click())
   	



.then(_ => driver.wait(until.titleIs('“Promoting the Craft, Science, and Future of Beekeeping since 1947”'), 20000))
.then(_ => driver.quit());