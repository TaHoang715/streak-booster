const { chromium } = require('playwright');

async function run() {
  const browser = await chromium.launch({ headless: true });
  
  // We want to reach around 2588 views
  const targetCount = 2650;
  let currentCount = 0;
  
  const workerCount = 15; // 15 parallel pages to run fast without overloading the CPU
  
  const workers = Array.from({ length: workerCount }).map(async (_, index) => {
    const context = await browser.newContext({
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    });
    const page = await context.newPage();
    
    while (currentCount < targetCount) {
      currentCount++;
      const id = currentCount;
      try {
        console.log(`[Worker ${index}] Loading page view #${id}...`);
        // We append a timestamp or counter to bypass caching
        await page.goto(`https://count.getloli.com/get/@TaHoang715?theme=moebooru&t=${Date.now()}_${id}`, {
          timeout: 20000,
          waitUntil: 'commit' // Wait until the HTML starts loading (sufficient to trigger the visit)
        });
        console.log(`[Worker ${index}] Page view #${id} triggered successfully.`);
      } catch (err) {
        console.error(`[Worker ${index}] Page view #${id} failed:`, err.message);
      }
    }
    await context.close();
  });
  
  await Promise.all(workers);
  await browser.close();
  console.log('All page views completed!');
}

run().catch(console.error);
