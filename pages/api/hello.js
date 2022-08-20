// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const puppeteer = require("puppeteer-core");
const chrome = require("chrome-aws-lambda");

export default async function handler(req, res) {
  const data = await getData();
  res.json({ data });
}

async function getData() {
  const browser = await puppeteer.launch({
    args: chrome.args,
    executablePath: await chrome.executablePath,
    headless: chrome.headless,
  });

  const page = await browser.newPage();
  await page.goto("http://lms.uaf.edu.pk/login/index.php");
  let regNumber = "2020-ag-8322";
  await page.type("#REG", regNumber);
  await Promise.all([
    page.click("input[value=Result]"),
    page.waitForNavigation(),
  ]);

  let title = await page.title();

  await browser.close();

  return title;
}
