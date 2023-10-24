const express = require("express");
// const router = express.Router();
const puppeteer = require("puppeteer");
const bodyParser = require("body-parser");
const cors = require("cors");
const pdf = require("html-pdf");
const fs = require("fs");

const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// const templatePath = "./documents/index.js";
const templatePath = require("./documents/index.js");

// configure post request

async function createPDF(data) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const htmlString = templatePath(data);
  // const htmlTemplate = fs.readFileSync(templatePath, "utf-8");
  // const injected = `${htmlTemplate}`;
  await page.setContent(htmlString);
  const pdfBuffer = await page.pdf({
    path: "output.pdf",
    format: "A4",
    printBackground: true,
  });
  await browser.close();
  return pdfBuffer;
}
app.post("/create-pdf", async (req, res) => {
  try {
    const data = req.body;
    console.log(data);
    const pdfGenerated = await createPDF(data);
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "attachment; filename=output.pdf");
    res.send(pdfGenerated);
  } catch (error) {
    console.error(error);
  }
});
// configure get request
app.get("/fetch-pdf", (req, res) => {
  res.sendFile(`${__dirname}/output.pdf`);
});
app.listen(port, () => console.log(`listening to port ${port}`));
