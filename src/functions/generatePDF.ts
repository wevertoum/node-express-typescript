import puppeteer from "puppeteer";
import { b64Logo } from "../mocks/utis";

export async function generatePDF() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  let dynamicContent = "";
  for (let i = 1; i <= 20; i++) {
    const size = 500;
    dynamicContent += `
      <div style="border: 1px solid red; width: ${size}px; height: ${size}px; margin-bottom: 10px; break-inside: avoid;">
        uma linha qualquer (${i})
      </div>`;
  }

  const content = `
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                @page {
                    margin-top: 100px;
                    margin-bottom: 20px;
                }
                body {
                    margin: 0;
                    font-family: Arial, sans-serif;
                }
                .content {
                    margin-top: 0px;
                }
            </style>
        </head>
        <body>
            <div class="content">
                ${dynamicContent}
            </div>
        </body>
        </html>
    `;

  await page.setContent(content);

  await page.pdf({
    path: "report.pdf",
    format: "A4",
    displayHeaderFooter: true,
    headerTemplate: `
    <div style="font-size: 16px; width: 100%; text-align: center; padding: 10px 0; display: flex; align-items: center;">
      <img src="${b64Logo}" style="width: 64px; height: 64px; margin-right: 10px;">
      <div style="border-left: 1px solid #000; padding-left: 10px; margin-left: 10px;">
        <div>Nome paciente: Edineite</div>
        <div>Data do balanço: 12/12/2024</div>
      </div>
    </div>
  `,
  });

  await browser.close();
}

generatePDF().catch(console.error);
