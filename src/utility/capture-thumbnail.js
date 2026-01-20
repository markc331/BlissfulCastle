import {chromium} from "playwright";
import fs from "fs";
import path from "path";
import {fileURLToPath} from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projects= [
    {name: "BlissfulCastle", url: "https://blissfulcastle20.web.app/"},
    {name: "DRGreenhouse", url: "https://scholarcommons.scu.edu/cseng_senior/253/"}
];

(async () => {
    const broswer = await chromium.launch();
    const page = await broswer.newPage({viewport: {width: 1290, height: 720}});

    const outDir = path.join(__dirname, "../../public/thumbnails");
    fs.mkdirSync(outDir, {recursive: true});

    for (const p of projects) {
        await page.goto(p.url, {waitUntil: "networkidle"});
        await page.waitForTimeout(2000);
        await page.click("onetrust-accept-btn-handler", {timeout: 5000}).catch(() => {});

        for (const frame of page.frames()) {
            await frame.click("#onetrust-accept-btn-handler", {timeout:2000}).catch(() => {});
        }

        await page.addStyleTag({
            content: `
            #onetrust-consent-sdk,
            .ot-sdk-container,
            .ot-sdk-row {display: none !important;}
            `
        })

        await page.waitForTimeout(1000);
        await page.screenshot({path: path.join(outDir, `${p.name}.png`), fullPage: false});
    }

    await broswer.close();
})();