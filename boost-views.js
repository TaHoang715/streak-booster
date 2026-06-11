const { chromium } = require('playwright');
const { execSync } = require('child_process');

async function getCount(page) {
  try {
    // Navigate to the counter URL to read the count
    await page.goto('https://count.getloli.com/get/@TaHoang715?theme=moebooru', { waitUntil: 'domcontentloaded', timeout: 15000 });
    const content = await page.content();
    
    // Search for digit images in the SVG content
    const matches = content.match(/moebooru\/(\d+)\.gif/g);
    if (!matches) {
      console.log("No digit images found in SVG content.");
      return 0;
    }
    
    const digits = matches.map(m => {
      const dMatch = m.match(/moebooru\/(\d+)\.gif/);
      return dMatch ? dMatch[1] : '';
    });
    
    const count = parseInt(digits.join(''), 10);
    console.log("Current count on server:", count);
    return count;
  } catch (err) {
    console.error("Error reading count:", err.message);
    return 0;
  }
}

function selfDestruct() {
  console.log("=== Target of 15,000 views reached! Initiating self-destruct cleanup ===");
  try {
    execSync('git config --global user.name "TaHoang715"');
    execSync('git config --global user.email "taminhhoang.nk@gmail.com"');
    execSync('git rm boost-views.js .github/workflows/visitor-booster.yml');
    execSync('git commit -m "chore: cleanup temporary booster files after reaching 15k count [skip ci]"');
    execSync('git push origin main');
    console.log("Self-destruct completed successfully!");
  } catch (err) {
    console.error("Error during self-destruct:", err.message);
  }
}

async function run() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
  });
  const page = await context.newPage();
  
  // 1. Check current count before boosting
  const initialCount = await getCount(page);
  await context.close();
  
  if (initialCount >= 15000) {
    selfDestruct();
    await browser.close();
    return;
  }
  
  // 2. Perform boosting
  console.log(`Starting boost run. Initial count is ${initialCount}. Target is 15,000.`);
  const boostTarget = 2000;
  let successCount = 0;
  let activeRequests = 0;
  const workerLimit = 15; // 15 parallel workers
  
  const workerPromises = [];
  
  // Create worker function to run in parallel
  const runWorker = async (workerId) => {
    const workerContext = await browser.newContext({
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    });
    const workerPage = await workerContext.newPage();
    
    while (successCount < boostTarget) {
      successCount++;
      const id = successCount;
      try {
        console.log(`[Worker ${workerId}] Navigating request #${id}/${boostTarget}...`);
        await workerPage.goto(`https://count.getloli.com/get/@TaHoang715?theme=moebooru&t=${Date.now()}_${id}`, {
          timeout: 20000,
          waitUntil: 'commit'
        });
      } catch (err) {
        console.error(`[Worker ${workerId}] Request #${id} failed:`, err.message);
      }
    }
    await workerContext.close();
  };

  for (let i = 0; i < workerLimit; i++) {
    workerPromises.push(runWorker(i));
  }
  
  await Promise.all(workerPromises);
  
  // 3. Check new count after boosting
  const postContext = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
  });
  const postPage = await postContext.newPage();
  const finalCount = await getCount(postPage);
  await postContext.close();
  
  console.log(`Boost run completed. Final count is ${finalCount}.`);
  
  if (finalCount >= 15000) {
    selfDestruct();
  } else {
    console.log(`Remaining views to target: ${15000 - finalCount}. Will continue on next scheduled run.`);
  }
  
  await browser.close();
}

run().catch(console.error);
