const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('https://www.apprx.cn')

  // 页面求值计算页面参数
  const dimensions = await page.evaluate(() => {
    return {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
      deviceScaleFactor: window.devicePixelRatio
    };
  });

  console.log('Dimensions：', dimensions);

  await browser.close()
})();
