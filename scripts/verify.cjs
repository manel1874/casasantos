// Run with Playwright available in NODE_PATH; the static server must be running.
const { chromium } = require('playwright');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const base = process.env.SITE_URL || 'http://127.0.0.1:8765/';
const paths = {
  Cozinha: 'cozinha/output/atelier-varanda-3d/index.html',
  Sala: 'sala/output/opcao-05-cozy-sofa-l-v4/index.html',
  Escritório: 'escritorio/output/proposta-v1/index.html',
};
(async () => {
  fs.mkdirSync('test-results', { recursive: true });
  const browser = await chromium.launch({ headless: true, args: ['--enable-unsafe-swiftshader'] });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  page.on('response', response => { if (response.status() >= 400) errors.push(`${response.status()} ${response.url()}`); });
  const imageReady = async selector => {
    await page.locator(selector).evaluate(image => image.decode());
    assert.ok(await page.locator(selector).evaluate(image => image.naturalWidth > 0));
  };
  const fits = async () => assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `Horizontal overflow: ${page.url()}`);
  await page.goto(base);
  await page.locator('.room-card img').evaluateAll(images => Promise.all(images.map(image => image.decode())));
  await fits();
  await page.screenshot({ path: 'test-results/inicio-desktop.png', fullPage: true });
  for (const width of [320, 390, 768, 1440]) {
    await page.setViewportSize({ width, height: 844 });
    await page.goto(base);
    await fits();
    for (const [label, url] of Object.entries(paths)) {
      const nav = width <= 760 ? '.casa-mobile-nav' : '.casa-nav';
      await page.locator(nav).getByRole('link', { name: label, exact: true }).click();
      await page.waitForURL(base + url);
      await imageReady('#hero');
      await fits();
      assert.equal(await page.locator(`${nav} [aria-current="page"]`).innerText(), label);
    }
    await page.locator(width <= 760 ? '.casa-mobile-nav' : '.casa-nav').getByRole('link', { name: 'Início', exact: true }).click();
    if (width === 390) await page.screenshot({ path: 'test-results/inicio-mobile.png', fullPage: true });
  }
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(base + paths.Cozinha);
  for (const view of ['natural', 'japandi', 'mediterranico', 'classico', 'urbano', 'superior', 'inverso', 'planta', 'geometria']) {
    await page.locator(`.nav [data-view="${view}"]`).click();
    await imageReady('#hero');
    await fits();
  }
  await page.locator('.nav [data-view="natural"]').click();
  await page.locator('#expand').click();
  await imageReady('#zoom-image');
  await page.keyboard.press('Escape');
  assert.equal(await page.locator('#zoom').evaluate(dialog => dialog.open), false);
  await page.locator('#archive summary').click();
  for (const value of await page.locator('#archive-select option').evaluateAll(options => options.map(option => option.value))) {
    await page.locator('#archive-select').selectOption(value);
    await imageReady('#archive-image');
  }
  await page.locator('#archive summary').click();
  await page.evaluate(() => scrollTo(0, 0));
  await page.screenshot({ path: 'test-results/cozinha-mobile.png' });
  await page.locator('.modes [data-mode="model"]').click();
  const kitchenFrame = page.frameLocator('#model-frame');
  await kitchenFrame.locator('canvas').waitFor();
  await kitchenFrame.locator('[data-camera="top"]').click();
  await kitchenFrame.locator('#dimensions').check();
  await kitchenFrame.locator('#style').selectOption('japandi');
  await fits();
  await page.goto(base + paths.Sala);
  assert.equal(await page.locator('#hero').getAttribute('src'), 'sala-quadros-laterais-geral-quadro.webp');
  assert.equal(await page.getByRole('heading', { name: 'Dois quadros para o canto junto à janela' }).count(), 1);
  for (const scene of ['quadro', 'livre', 'cinema']) {
    await page.locator(`[data-scene="${scene}"]`).click();
    for (const view of ['interior', 'geral']) {
      await page.locator(`[data-view="${view}"]`).click();
      await imageReady('#hero');
      const expected = view === 'geral' ? `sala-quadros-laterais-geral-${scene}.webp` : `sala-atual-interior-${scene}.webp`;
      assert.equal(await page.locator('#hero').getAttribute('src'), expected);
      assert.equal(await page.locator('#open-current-image').getAttribute('href'), expected);
    }
  }
  await page.locator('[data-plan="luz"]').click();
  await imageReady('#plan');
  await fits();
  await page.evaluate(() => scrollTo(0, 0));
  await page.screenshot({ path: 'test-results/sala-mobile.png' });
  await page.locator('#room-model').scrollIntoViewIfNeeded();
  await page.frameLocator('#room-model').locator('canvas').waitFor();
  await page.frameLocator('#room-model').locator('#mode').selectOption('livre');
  await page.waitForFunction(() => document.querySelector('[data-scene="livre"]').getAttribute('aria-pressed') === 'true');
  await fits();
  await page.goto(base + paths.Escritório);
  for (const mode of ['ambiente', 'plantas']) {
    await page.locator(`[data-mode="${mode}"]`).click();
    const count = await page.locator('#views button').count();
    for (let i = 0; i < count; i++) {
      await page.locator('#views button').nth(i).click();
      await imageReady('#hero');
    }
    await fits();
  }
  await page.locator('[data-mode="ambiente"]').click();
  await page.evaluate(() => scrollTo(0, 0));
  await page.screenshot({ path: 'test-results/escritorio-mobile.png' });
  await page.locator('[data-mode="modelo"]').click();
  const officeFrame = page.frameLocator('#model-frame');
  await officeFrame.locator('canvas').waitFor();
  await officeFrame.locator('[data-view="top"]').click();
  await officeFrame.locator('#dimensions').check();
  await officeFrame.locator('#style').selectOption('5');
  await fits();
  assert.deepEqual(errors, []);
  console.log(JSON.stringify({ passed: true, widths: [320, 390, 768, 1440], rooms: 3, models: 3, kitchenViews: 9, livingRoomViews: 6, history: 'all images loaded', browserErrors: errors }));
  await browser.close();
})().catch(error => { console.error(error); process.exit(1); });
