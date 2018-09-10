const puppeteer = require('puppeteer');
// 自动执行此异步函数
(async () => {
  // 运行puppeteer
  const browser = await puppeteer.launch();
  // 等待浏览器打开新页面
  const page = await browser.newPage();
  // 使浏览器跳转到对应页面
  await page.goto('https://example.com');
  // 对浏览器进行截图
  await page.screenshot({ path: 'example.png' })
  // 截图成功后关闭浏览器
  await browser.close()
})();