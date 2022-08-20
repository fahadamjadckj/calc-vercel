// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const puppeteer = require("puppeteer-core");
const chrome = require("chrome-aws-lambda");

export default async function handler(req, res) {
  const browser = await puppeteer.launch({
    args: chrome.args,
    executablePath: await chrome.executablePath,
    headless: chrome.headless,
  });
  await page.goto("http://lms.uaf.edu.pk/login/index.php");
  let title = await page.title();
  res.status(200).json({ text: title });
}
