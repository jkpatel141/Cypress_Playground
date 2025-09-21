const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const inputFile = path.join(__dirname, 'cypress/reports/mochawesome.html');
const outputFile = path.join(__dirname, 'cypress/reports/mochawesome.pdf');

(async () => {
  try {
    // Check if the HTML report exists
    if (!fs.existsSync(inputFile)) {
      console.error(`❌ HTML report not found: ${inputFile}`);
      process.exit(1);
    }

    // Launch browser
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    const page = await browser.newPage();
    const html = fs.readFileSync(inputFile, 'utf-8');

    // Load HTML content into Puppeteer
    await page.setContent(html, { waitUntil: 'networkidle0' });

    // Generate PDF
    await page.pdf({
      path: outputFile,
      format: 'A4',
      printBackground: true,
    });

    console.log(`✅ PDF generated successfully: ${outputFile}`);

    await browser.close();
  } catch (error) {
    console.error('❌ Error generating PDF:', error);
    process.exit(1);
  }
})();