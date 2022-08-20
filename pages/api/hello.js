// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const puppeteer = require("puppeteer-core");
const chrome = require("chrome-aws-lambda");

export default async function handler(req, res) {
  await processedData(res, 10000);
}

async function processedData(res, duration) {
  const id = setTimeout(() => {
    res.json({ message: "some error fetching data" });
  });

  try {
    let data = await getData();
    clearTimeout(id);
    res.json(data);
  } catch (e) {
    res.status(500).json({
      message: e.message,
    });
  }
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

  await browser.close();

  return data;
}
