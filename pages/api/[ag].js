// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const puppeteer = require("puppeteer-core");
const chrome = require("chrome-aws-lambda");
const { sortBySemesters } = require("../../lib/semesterCount");

export default async function handler(req, res) {
  const { ag } = req.query;

  const browser = await puppeteer.launch({
    args: ['--proxy-server=119.160.107.86:3128','--no-sandbox', '--disable-setuid-sandbox'],
    executablePath: await chrome.executablePath,
    headless: chrome.headless,
  });
  let page = await browser.newPage();
  await page.goto("http://lms.uaf.edu.pk/login/index.php");

  await page.type("#REG", ag);

  await Promise.all([
    page.click("input[value=Result]"),
    page.waitForNavigation(),
  ]);

  let data = await page.evaluate(() => {
    let values = [];
    let tableRows = document.querySelectorAll("tr");

    tableRows.forEach((row) => {
      let children = {};
      let index = 0;
      row.childNodes.forEach((child) => {
        if (child.innerText != null) {
          children[index] = child.innerText;
          index++;
        }
      });
      values.push(children);
    });

    return values;
  });

  const sorted = await sortBySemesters(data);
  res.status(200).json({ text: sorted });
}
